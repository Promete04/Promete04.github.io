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

// Shared "$ ls ~/path" style header for each section
function sectionHeader(title, path) {
    return `
        <div class="border-b border-gray-200 dark:border-slate-800 pb-4 mb-10">
            <p class="prompt text-sm font-mono text-gray-500 dark:text-slate-500 mb-2">ls ${path}</p>
            <h2 class="text-3xl font-bold text-slate-900 dark:text-white">${title}</h2>
        </div>
    `;
}

// Typewriter effect; a new call cancels any typing still in progress
let typingRun = 0;
function typeText(el, text, speed = 35) {
    const run = ++typingRun;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.textContent = text;
        return;
    }
    el.textContent = '';
    let i = 0;
    (function step() {
        if (run !== typingRun || i >= text.length) return;
        el.textContent += text[i++];
        setTimeout(step, speed);
    })();
}

function renderHome() {
    const focus = profile.currentFocus;

    app.innerHTML = `
        <div class="flex flex-col items-center py-6 sm:py-12">

            <!-- Hero -->
            <div class="flex flex-col sm:flex-row items-center gap-8 w-full max-w-3xl mb-12 reveal">
                <div class="relative shrink-0">
                    <img src="${profile.avatar}" alt="Profile" class="w-64 h-auto rounded-lg shadow-xl ring-2 ring-brand-500/40 bg-slate-100 dark:bg-slate-800">
                    <span class="absolute -bottom-2 -right-2 flex items-center gap-1.5 text-xs font-mono px-2 py-1 rounded bg-white dark:bg-dark-surface border border-gray-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                        <span class="status-dot w-2 h-2 rounded-full bg-emerald-500"></span> online
                    </span>
                </div>
                <div class="text-center sm:text-left">
                    <p class="prompt font-mono text-sm text-gray-500 dark:text-slate-500 mb-2">whoami</p>
                    <h1 class="text-4xl sm:text-5xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">
                        ${profile.name}<span class="text-brand-600 dark:text-brand-500">.</span>
                    </h1>
                    <h2 class="text-lg sm:text-xl text-brand-600 dark:text-brand-500 font-medium min-h-[3.5rem] sm:min-h-0">
                        <span class="text-gray-400 dark:text-slate-600">&gt;</span> <span id="typed-title"></span><span class="cursor"></span>
                    </h2>
                    <p class="text-sm text-gray-500 dark:text-slate-500 mt-2">${profile.tagline}</p>
                </div>
            </div>

            <!-- Bio terminal -->
            <div class="terminal w-full max-w-3xl mb-8 reveal" style="animation-delay: 0.1s">
                <div class="terminal-bar">
                    <span class="terminal-dot bg-red-500/80"></span>
                    <span class="terminal-dot bg-amber-400/80"></span>
                    <span class="terminal-dot bg-emerald-500/80"></span>
                    <span class="ml-3 text-xs font-mono text-gray-500 dark:text-slate-500">guillermo@uah: ~</span>
                </div>
                <div class="p-6 sm:p-8 text-left">
                    <p class="prompt font-mono text-sm text-gray-500 dark:text-slate-500 mb-4">cat about.txt</p>
                    <p class="text-gray-600 dark:text-slate-400 leading-relaxed">
                        ${profile.bio}
                    </p>
                    ${profile.quote ? `
                    <p class="mt-6 text-sm text-gray-500 dark:text-slate-500 italic">
                        <span class="text-brand-600 dark:text-brand-500 not-italic">//</span> "${profile.quote}" — ${profile.quoteAuthor}
                    </p>
                    ` : ''}
                </div>
            </div>

            ${focus ? `
            <!-- Current focus -->
            <div onclick="renderSection('blog', ${focus.linkTarget})" class="card-glow cursor-pointer w-full max-w-3xl mb-12 p-6 rounded-lg border border-gray-200 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 bg-white/70 dark:bg-dark-surface/70 text-left group reveal" style="animation-delay: 0.2s">
                <p class="font-mono text-xs uppercase tracking-widest text-brand-600 dark:text-brand-500 mb-2 flex items-center gap-2">
                    <span class="status-dot w-2 h-2 rounded-full bg-brand-500"></span> currently_building
                </p>
                <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">${focus.title}</h3>
                <p class="text-gray-600 dark:text-slate-400 text-sm leading-relaxed mb-4">${focus.description}</p>
                <span class="text-brand-600 dark:text-brand-500 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    ${focus.linkText} <i class="fas fa-arrow-right text-xs"></i>
                </span>
            </div>
            ` : ''}

            <!-- Actions -->
            <div class="flex flex-wrap justify-center gap-4 reveal" style="animation-delay: 0.3s">
                <button onclick="renderSection('projects')" class="font-mono bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-lg font-medium transition shadow-lg shadow-brand-500/20">
                    ./projects
                </button>
                <button onclick="renderSection('cv')" class="font-mono bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-lg font-medium hover:border-brand-500 dark:hover:border-brand-500 transition">
                    cat resume.md
                </button>
            </div>
        </div>
    `;

    typeText(document.getElementById('typed-title'), profile.title);
}

function renderProjects() {
    const grid = document.createElement('div');
    // Masonry Layout using CSS Columns
    grid.className = "columns-1 md:columns-2 gap-6 space-y-6";

    projects.forEach((project, i) => {
        const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        const hasRepo = project.github && project.github.startsWith('http');
        grid.innerHTML += `
            <div class="card-glow reveal break-inside-avoid bg-white/80 dark:bg-dark-surface/80 p-6 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-brand-500 dark:hover:border-brand-500 group shadow-sm" style="animation-delay: ${i * 0.08}s">
                <p class="font-mono text-xs text-gray-400 dark:text-slate-600 mb-3">~/projects/<span class="text-brand-600 dark:text-brand-500">${slug}</span></p>
                <div class="flex justify-between items-start mb-4">
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-500 transition">
                        ${project.title}
                    </h3>
                    <div class="flex gap-3 text-gray-400">
                        ${hasRepo ? `<a href="${project.github}" target="_blank" class="hover:text-brand-600 dark:hover:text-brand-500" title="Repository"><i class="fab fa-github"></i></a>` : ''}
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
                        <span class="text-xs font-medium px-2.5 py-1 rounded bg-gray-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-gray-200 dark:border-slate-800 group-hover:border-brand-500/40 transition">
                            <span class="text-brand-600 dark:text-brand-500">#</span>${tech}
                        </span>
                    `).join('')}
                </div>
            </div>
        `;
    });

    app.innerHTML = sectionHeader('Discover what I am fiddling with', '~/projects');
    app.appendChild(grid);
}

function renderCV() {
    const container = document.createElement('div');
    container.className = "max-w-3xl mx-auto";

    experience.forEach((job, i) => {
        container.innerHTML += `
            <div class="reveal relative pl-8 border-l border-gray-200 dark:border-slate-700 pb-10 last:pb-0" style="animation-delay: ${i * 0.1}s">
                <div class="${i === 0 ? 'status-dot ' : ''}absolute -left-1.5 top-1.5 w-3 h-3 bg-brand-500 rounded-full ring-4 ring-white dark:ring-dark-bg"></div>
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

    app.innerHTML = sectionHeader('Experience Log', '~/experience');
    app.appendChild(container);
}

function renderBlog(postId = null) {
    if (postId) {
        const post = blogPosts.find(p => p.id === Number(postId));
        if (!post) return renderBlog();

        app.innerHTML = `
            <button onclick="renderSection('blog')" class="mb-8 text-sm font-medium text-brand-600 dark:text-brand-500 hover:underline flex items-center gap-2">
                <i class="fas fa-arrow-left"></i> Return to Index
            </button>
            <article class="bg-white/90 dark:bg-dark-surface/90 p-6 sm:p-8 rounded-lg border border-gray-200 dark:border-slate-800 max-w-3xl mx-auto shadow-sm">
                <header class="mb-8 border-b border-gray-100 dark:border-slate-700 pb-8">
                    <p class="prompt font-mono text-sm text-gray-500 dark:text-slate-500 mb-3">cat ~/blog/${post.id}.md</p>
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

        blogPosts.forEach((post, i) => {
            list.innerHTML += `
                <div onclick="renderSection('blog', ${post.id})" style="animation-delay: ${i * 0.08}s" class="card-glow reveal cursor-pointer bg-white/80 dark:bg-dark-surface/80 p-6 rounded-lg border border-gray-200 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 group shadow-sm">
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

        app.innerHTML = sectionHeader('Technical Notes', '~/blog');
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
