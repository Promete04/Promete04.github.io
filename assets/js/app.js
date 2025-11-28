/**
 * ==========================================
 *             APP LOGIC
 * ==========================================
 * 
 * This file handles the interactivity of the website:
 * - Rendering sections (Home, Projects, CV, Blog)
 * - Theme toggling (Dark/Light mode)
 * - Search functionality
 * 
 * You generally do not need to edit this file unless you want to change HOW the site works.
 */

const app = document.getElementById('app');
const themeIcon = document.getElementById('theme-icon');
const themeIconMobile = document.getElementById('theme-icon-mobile');

// ==========================================
//             THEME MANAGEMENT
// ==========================================

function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');

    if (isDark) {
        html.classList.remove('dark');
        updateIcons('moon');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        updateIcons('sun');
        localStorage.setItem('theme', 'dark');
    }
}

function updateIcons(type) {
    const iconClass = type === 'sun' ? "fas fa-sun" : "fas fa-moon";
    if (themeIcon) themeIcon.className = iconClass;
    if (themeIconMobile) themeIconMobile.className = iconClass;
}

// Init Theme
if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.remove('dark');
    updateIcons('moon');
} else {
    updateIcons('sun');
}

// ==========================================
//             SEARCH LOGIC
// ==========================================

function handleSearch(query) {
    if (!query || query.trim() === '') {
        renderSection('home');
        return;
    }

    const lowerQuery = query.toLowerCase();

    // Filter Projects
    const matchedProjects = projects.filter(p =>
        p.title.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.stack.some(s => s.toLowerCase().includes(lowerQuery))
    );

    // Filter Blog
    const matchedBlogs = blogPosts.filter(b =>
        b.title.toLowerCase().includes(lowerQuery) ||
        b.excerpt.toLowerCase().includes(lowerQuery)
    );

    renderSearchResults(matchedProjects, matchedBlogs, query);
}

function renderSearchResults(projects, blogs, query) {
    let html = `
        <div class="mb-8">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">Search Results for "<span class="text-brand-500">${query}</span>"</h2>
            <p class="text-gray-500 text-sm">Found ${projects.length} projects and ${blogs.length} articles.</p>
        </div>
    `;

    if (projects.length > 0) {
        html += `<h3 class="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 border-b border-gray-700 pb-2">Projects</h3>
                 <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">`;
        projects.forEach(p => {
            html += `
                <div class="bg-white dark:bg-dark-surface p-4 rounded border border-gray-200 dark:border-slate-700">
                    <h4 class="font-bold text-slate-900 dark:text-white">${p.title}</h4>
                    <p class="text-sm text-gray-600 dark:text-slate-400 mt-1">${p.description}</p>
                </div>
            `;
        });
        html += `</div>`;
    }

    if (blogs.length > 0) {
        html += `<h3 class="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 border-b border-gray-700 pb-2">Blog Posts</h3>
                 <div class="space-y-4">`;
        blogs.forEach(b => {
            html += `
                <div class="bg-white dark:bg-dark-surface p-4 rounded border border-gray-200 dark:border-slate-700 cursor-pointer hover:border-brand-500" onclick="renderSection('blog', ${b.id})">
                    <h4 class="font-bold text-slate-900 dark:text-white">${b.title}</h4>
                    <p class="text-sm text-gray-600 dark:text-slate-400 mt-1">${b.excerpt}</p>
                </div>
            `;
        });
        html += `</div>`;
    }

    if (projects.length === 0 && blogs.length === 0) {
        html += `<div class="text-center py-10 text-gray-500">No results found.</div>`;
    }

    app.innerHTML = html;
}

// ==========================================
//             RENDERING LOGIC
// ==========================================

function renderSection(section, dataId = null, pushHistory = true) {
    // Clear Search input if switching sections manually
    const searchInput = document.getElementById('searchInput');
    if (searchInput && !dataId) searchInput.value = '';

    // Update Nav Active State
    document.querySelectorAll('.nav-btn').forEach(btn => {
        const isActive = btn.textContent.toLowerCase().includes(section);
        btn.className = `nav-btn px-3 py-2 rounded text-sm font-medium transition ${isActive
            ? 'text-brand-600 dark:text-brand-500 bg-brand-900 bg-opacity-10'
            : 'text-gray-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-500'
            }`;
    });

    app.innerHTML = '';
    app.classList.remove('fade-in');
    void app.offsetWidth; // Trigger reflow
    app.classList.add('fade-in');

    if (section === 'home') renderHome();
    else if (section === 'projects') renderProjects();
    else if (section === 'cv') renderCV();
    else if (section === 'blog') renderBlog(dataId);

    // HISTORY API INTEGRATION
    if (pushHistory) {
        const url = new URL(window.location);
        url.searchParams.set('section', section);
        if (dataId) {
            url.searchParams.set('id', dataId);
        } else {
            url.searchParams.delete('id');
        }
        window.history.pushState({ section, dataId }, '', url);
    }
}

function renderHome() {
    app.innerHTML = `
        <div class="flex flex-col items-center min-h-screen text-center py-12">
            
            <!-- Top Content Group -->
            <div class="flex flex-col items-center justify-center flex-grow w-full">
                <div class="relative mb-8">
                    <img src="${profile.avatar}" alt="Profile" class="w-32 h-32 rounded-lg shadow-xl ring-2 ring-gray-200 dark:ring-slate-700 bg-slate-100 dark:bg-slate-800">
                </div>
                
                <h1 class="text-4xl sm:text-5xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">
                    ${profile.name}
                </h1>
                
                <h2 class="text-xl text-brand-600 dark:text-brand-500 font-medium mb-6">
                    ${profile.title}
                </h2>
                
                <p class="max-w-2xl text-gray-600 dark:text-slate-400 text-lg leading-relaxed mb-10">
                    ${profile.bio}
                </p>
                
                <div class="flex gap-4 mb-12">
                    <button onclick="renderSection('projects')" class="bg-brand-600 hover:bg-brand-500 text-white px-8 py-3 rounded-lg font-medium transition shadow-lg shadow-brand-500/20">
                        View Projects
                    </button>
                    <button onclick="renderSection('cv')" class="bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition">
                        Resume
                    </button>
                </div>


            </div>
        </div>
    `;
}

function renderProjects() {
    const grid = document.createElement('div');
    // Masonry Layout using CSS Columns
    grid.className = "columns-1 md:columns-2 gap-6 space-y-6";

    projects.forEach(project => {
        grid.innerHTML += `
            <div class="break-inside-avoid bg-white dark:bg-dark-surface p-6 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-brand-500 dark:hover:border-brand-500 transition group shadow-sm">
                <div class="flex justify-between items-start mb-4">
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-500 transition">
                        ${project.title}
                    </h3>
                    <div class="flex gap-3 text-gray-400">
                        <a href="${project.github}" class="hover:text-brand-600 dark:hover:text-brand-500"><i class="fab fa-github"></i></a>
                        ${project.relatedPostId ? `
                            <button onclick="renderSection('blog', ${project.relatedPostId})" class="hover:text-brand-600 dark:hover:text-brand-500" title="Read Blog Post">
                                <i class="fas fa-book"></i>
                            </button>
                        ` : ''}
                    </div>
                </div>
                <p class="text-gray-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                    ${project.description}
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.stack.map(tech => `
                        <span class="text-xs font-medium px-2.5 py-1 rounded bg-gray-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-gray-200 dark:border-slate-800">
                            ${tech}
                        </span>
                    `).join('')}
                </div>
            </div>
        `;
    });

    app.innerHTML = `
        <div class="border-b border-gray-200 dark:border-slate-800 pb-4 mb-8 flex justify-between items-end">
            <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Discover what I am fiddling with</h2>
            <span class="text-sm text-gray-500 dark:text-slate-500 font-mono hidden sm:block">~/projects</span>
        </div>
    `;
    app.appendChild(grid);
}

function renderCV() {
    const container = document.createElement('div');
    container.className = "max-w-3xl mx-auto";

    experience.forEach((job) => {
        container.innerHTML += `
            <div class="relative pl-8 border-l border-gray-200 dark:border-slate-700 pb-10 last:pb-0">
                <div class="absolute -left-1.5 top-1.5 w-3 h-3 bg-brand-500 rounded-full ring-4 ring-white dark:ring-dark-bg"></div>
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white">${job.role}</h3>
                    <span class="text-sm font-mono text-brand-600 dark:text-brand-500 bg-brand-50 dark:bg-brand-900/10 px-2 py-1 rounded mt-1 sm:mt-0">
                        ${job.period}
                    </span>
                </div>
                <div class="text-lg text-slate-700 dark:text-slate-300 font-medium mb-3 flex items-center gap-3">
                    ${job.company}
                    ${job.relatedPostId ? `
                        <button onclick="renderSection('blog', ${job.relatedPostId})" class="text-sm text-brand-600 dark:text-brand-500 hover:underline ml-2" title="Read Related Post">
                            <i class="fas fa-book mr-1"></i> Read More
                        </button>
                    ` : ''}
                </div>
                <p class="text-gray-600 dark:text-slate-400 leading-relaxed">
                    ${job.details}
                </p>
            </div>
        `;
    });

    app.innerHTML = `
        <div class="border-b border-gray-200 dark:border-slate-800 pb-4 mb-10 flex justify-between items-end">
            <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Experience Log</h2>
            <span class="text-sm text-gray-500 dark:text-slate-500 font-mono hidden sm:block">~/experience</span>
        </div>
    `;
    app.appendChild(container);
}

function renderBlog(postId = null) {
    if (postId) {
        const post = blogPosts.find(p => p.id === postId);
        if (!post) return renderBlog();

        app.innerHTML = `
            <button onclick="renderSection('blog')" class="mb-8 text-sm font-medium text-brand-600 dark:text-brand-500 hover:underline flex items-center gap-2">
                <i class="fas fa-arrow-left"></i> Return to Index
            </button>
            <article class="bg-white dark:bg-dark-surface p-8 rounded-lg border border-gray-200 dark:border-slate-800 max-w-3xl mx-auto shadow-sm">
                <header class="mb-8 border-b border-gray-100 hoverark:border-slate-700 pb-8">
                    <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">${post.title}</h1>
                    <div class="flex gap-6 text-sm text-gray-500 dark:text-slate-500 font-mono">
                        <span>${post.date}</span>
                    </div>
                </header>
                <div class="prose prose-slate dark:prose-invert max-w-none">
                    ${post.content}
                </div>
            </article>
        `;
    } else {
        const list = document.createElement('div');
        list.className = "max-w-3xl mx-auto space-y-6";

        blogPosts.forEach(post => {
            list.innerHTML += `
                <div onclick="renderSection('blog', ${post.id})" class="cursor-pointer bg-white dark:bg-dark-surface p-6 rounded-lg border border-gray-200 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 transition group shadow-sm">
                    <div class="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                        <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-500 transition">
                            ${post.title}
                        </h3>
                        <span class="text-xs font-mono text-gray-500 dark:text-slate-500 whitespace-nowrap bg-gray-100 dark:bg-slate-900 px-2 py-1 rounded">
                            ${post.date}
                        </span>
                    </div>
                    <p class="text-gray-600 dark:text-slate-400 mb-4 text-sm">
                        ${post.excerpt}
                    </p>
                    <span class="text-brand-600 dark:text-brand-500 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read Entry <i class="fas fa-arrow-right text-xs"></i>
                    </span>
                </div>
            `;
        });

        app.innerHTML = `
            <div class="border-b border-gray-200 dark:border-slate-800 pb-4 mb-8 flex justify-between items-end">
                <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Technical Notes</h2>
                <span class="text-sm text-gray-500 dark:text-slate-500 font-mono hidden sm:block">~/blog</span>
            </div>
        `;
        app.appendChild(list);
    }
}

// Handle Back/Forward Buttons
window.onpopstate = function (event) {
    if (event.state) {
        renderSection(event.state.section, event.state.dataId, false);
    } else {
        // Fallback if no state (e.g. initial load or external link)
        const urlParams = new URLSearchParams(window.location.search);
        const section = urlParams.get('section') || 'home';
        const id = urlParams.get('id');
        renderSection(section, id, false);
    }
};

// Initialize based on URL
const urlParams = new URLSearchParams(window.location.search);
const section = urlParams.get('section') || 'home';
const id = urlParams.get('id');
renderSection(section, id, false); // Don't push state on initial load
