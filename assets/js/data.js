/**
 * ==========================================
 *             USER DATA CONFIGURATION
 * ==========================================
 * INSTRUCTIONS:
 * 1. To add a new item (project, job, post), copy the block between the comments
 *    and paste it inside the square brackets [].
 * 2. Be careful with commas! Each item in a list must be separated by a comma.
 *    The last item in a list should NOT have a comma after the closing brace }.
 * 3. Text strings must be inside quotes "" or ''.
 */

const profile = {
    name: "Guillermo",
    title: "Embedded Systems & Hardware Security Enthusiast",
    tagline: "Specializing in Critical Infrastructure & Defense Technologies",
    bio: `
        I am a Computer Science and Engineering student at UAH, deeply passionate about Embedded Systems and the Cybersecurity architectures that protect them. 
        I thrive at the intersection of hardware and software, exploring how we can anchor trust in physical devices to secure critical infrastructure against sophisticated threats.
    `,
    quote: "Try everything once.",
    quoteAuthor: "Linus Torvalds",
    // Avatar image path. Ensure this file exists in assets/images/
    avatar: "assets/images/avatar.svg",
    currentFocus: {
        title: "FPGA Side-Channel Attacks",
        description: "Investigating power analysis vulnerabilities in low-cost FPGA implementations of AES.",
        linkText: "Read the Research Log",
        linkTarget: 2 // ID of the blog post
    }
};

const projects = [
    // --- COPY FROM HERE TO ADD A NEW PROJECT ---
    {
        title: "HomeLab",
        description: `
        Building and maintaining a comprehensive HomeLab for network segmentation, service deployment, and security configuration simulations.
        `,
        stack: ["Python", "Docker", "Bash", "NUT", "Proxmox", "TrueNAS"],
        github: "https://github.com/Promete04/homelab", // Repo link
        relatedPostId: 1
    },
    // --- END COPY ---
    {
        title: "PUF IoT Authentication FPGA",
        description: `
        Implementing a PUF-based authentication system for IoT devices using FPGA.
        `,
        stack: ["VHDL", "FPGA", "MQTT"],
        github: "https://github.com/Promete04/puf-iot-authentication-fpga", // Repo link
        relatedPostId: 2 // Linked to "Research Log: FPGA Security"
    },
    {
        title: "Mobile Compute Node",
        description: `
        Designing a portable computing platform for field operations and remote deployments.`,
        stack: ["Python", "Docker", "Bash", "Kali Linux", "NetworkManager"],
        github: "placeholder", // Repo link
        relatedPostId: 4
    },
];

const experience = [
    // --- COPY FROM HERE TO ADD A NEW JOB ---
    {
        role: "Year Abroad Student",
        company: "Ludwig Maximilian University of Munich (LMU)",
        period: "2025 - 2026",
        details: `
            Participating in an academic year abroad, focusing on advanced computer science topics and cultural exchange.
        `,
        relatedPostId: 3
    },
    {
        role: "Computer Science and Engineering Student",
        company: "Universidad de Alcalá (UAH)",
        period: "2023 - 2027 (Expected)",
        details: `
            Pursuing a Bachelor's degree in Computer Science and Engineering. <a href="https://www.uah.es/es/estudios/Grado-en-Ingenieria-Informatica/" target="_blank" class="text-brand-600 hover:underline">Program Details</a>.
        `
    }
    // --- END COPY ---
];

const blogPosts = [
    // --- COPY FROM HERE TO ADD A NEW POST ---
    {
        id: 1,
        title: "HomeLab",
        date: "Mar 18, 2026",
        excerpt: "Building and maintaining a comprehensive HomeLab for network segmentation, service deployment, and security configuration simulations.",

        content: `
    <p class="mb-4">Building and maintaining a comprehensive HomeLab for network segmentation, service deployment, and security configuration simulations.</p>
        <div>
            <!-- ENTRY 4 -->
            <div class="group mb-12">
                <div class="flex flex-wrap items-baseline gap-3 mb-4">
                    <h2 class="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                        Two Nodes Are Better Than One
                    </h2>
                    <span class="font-mono text-sm text-gray-500 dark:text-slate-500">-> 2026-03-18</span>
                </div>
                <div class="pl-4 border-l-2 border-gray-200 dark:border-slate-700 group-hover:border-brand-500 dark:group-hover:border-brand-500 transition-colors">
                    <p class="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
                        A fairly big update to the lab while I've been away. My gaming laptop, an Asus TUF Dash F15 (i7-12650H, RTX 3060, 16 GB DDR5), is now a full Proxmox node, joining the Dell Optiplex 9020 to form a two-node cluster. The Optiplex stays as <strong>Entrypoint</strong> (networking, automation, notes) and the laptop becomes <strong>asus</strong>, the GPU workhorse.
                    </p>
                    <p class="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
                        What moved to the asus node:
                    </p>
                    <ul class="list-disc list-inside text-gray-600 dark:text-slate-400 leading-relaxed mb-4 space-y-1">
                        <li><strong>Ollama LXC</strong>, running 7B and 9B parameter models with GPU passthrough via the RTX 3060.</li>
                        <li><strong>Jellyfin LXC</strong>, also GPU-accelerated so transcoding no longer throttles the Optiplex.</li>
                        <li><strong>Minecraft server LXC</strong>, freeing up resources on the primary node.</li>
                        <li><strong>Second Tailscale LXC</strong> as a failover, so if the primary tunnel goes down while I'm remote I still have a way back in.</li>
                    </ul>
                    <p class="text-gray-600 dark:text-slate-400 leading-relaxed">
                        One thing that didn't pan out: I tried to salvage a previously damaged drive by mounting it internally in the Optiplex and reading the undamaged sectors, but it was too far gone. It's unrecoverable and is now just sitting there doing nothing. Good reminder to keep backups.
                    </p>
                </div>
            </div>

            <div class="py-12">
                <div class="border-t border-gray-200 dark:border-slate-800 border-dashed"></div>
            </div>

            <!-- ENTRY 3 -->
            <div class="group mb-12">
                <div class="flex flex-wrap items-baseline gap-3 mb-4">
                    <h2 class="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                        Year Abroad Preparations
                    </h2>
                    <span class="font-mono text-sm text-gray-500 dark:text-slate-500">-> 2025-11-04</span>
                </div>
                <div class="pl-4 border-l-2 border-gray-200 dark:border-slate-700 group-hover:border-brand-500 dark:group-hover:border-brand-500 transition-colors">
                    <p class="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
                        This is my first entry since I started my year abroad in Germany. In order to prepare my homelab for it I've taken some measures:
                    </p>
                    <ul class="list-disc list-inside text-gray-600 dark:text-slate-400 leading-relaxed mb-4 space-y-1">
                        <li>* Deep clean my servers and checked all connections (usually I clean them every 3 months, allowing for an easy process)</li>
                        <li>* Instructed my family (If they restart the router they know that my UPS-ish script will turn the homelab off)</li>
                        <li>* Prayed that nothing breaks</li>
                    </ul>
                    <p class="text-gray-600 dark:text-slate-400 leading-relaxed">
                        Preparations out of the way, for a couple of weeks I have been working on migrating from Tailscale to a Wireguard + piHole||Adguard setup. Although I haven't finished that, while changing the config in my router I encountered some issues. Some of those changes made my router restart, making (with unlucky timing) my homelab to turn off. In order to solve this issue I have added a [DEBUG_MODE] flag to my UPS script, bypassing the shutting down functionality.
                    </p>
                </div>
            </div>
            
            <div class="py-12">
                <div class="border-t border-gray-200 dark:border-slate-800 border-dashed"></div>
            </div>
            

            <!-- ENTRY 2 -->
            <div class="group mb-12">
                <div class="flex flex-wrap items-baseline gap-3 mb-4">
                    <h2 class="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                        Backlog Updates
                    </h2>
                    <span class="font-mono text-sm text-gray-500 dark:text-slate-500">-> 2025-07-20</span>
                </div>
                <div class="pl-4 border-l-2 border-gray-200 dark:border-slate-700 group-hover:border-brand-500 dark:group-hover:border-brand-500 transition-colors">
                    <p class="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
                        Today I made some changes I had on my backlog.
                    </p>
                    <ul class="list-disc list-inside text-gray-600 dark:text-slate-400 leading-relaxed space-y-1">
                        <li>Changed the draw.io diagram to reflect the changes made in the last entry and also the adding of the service booklore.</li>
                        <li>Although, maybe obvious, I hadn't mounted my samba share in my primary server, so using Jellyfin was as hassle as I had to duplicate the data. Now I can easily save data in my NAS and use it.</li>
                    </ul>
                </div>
            </div>

            <div class="py-12">
                <div class="border-t border-gray-200 dark:border-slate-800 border-dashed"></div>
            </div>

            <!-- ENTRY 1 -->
            <div class="group">
                <div class="flex flex-wrap items-baseline gap-3 mb-4">
                    <h2 class="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                        Power Shortage & Migration
                    </h2>
                    <span class="font-mono text-sm text-gray-500 dark:text-slate-500">-> 2025-05-31</span>
                </div>
                <div class="pl-4 border-l-2 border-gray-200 dark:border-slate-700 group-hover:border-brand-500 dark:group-hover:border-brand-500 transition-colors">
                    <p class="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
                        Since as of today, 31/05/2025, I will be documenting here more subtle changes that won't change the readme file.
                    </p>
                    <p class="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
                        Some important changes have been made. Due to the power shortage that happened the 28/04/2025 in Spain, and me not being fully prepared, my setup suffered damages, and I lost one drive (no data was lost). This event made me rethink how I run my homelab, and several changes were made:
                    </p>
                    <ul class="list-disc list-inside text-gray-600 dark:text-slate-400 leading-relaxed space-y-1">
                        <li>Changed the OS of my primary server from Ubuntu to Proxmox, boosting my Containerization and VM capabilities.</li>
                        <li>Made a script that simulates a UPS, so I am able to automatically turn off safely everything. It is located here: docs/Scripts/UPS</li>
                        <li>Turned on AC recovery on both of the servers BIOSes, so no manual interaction is needed.</li>
                    </ul>
                </div>
            </div>

        </div>


`

    },

    {
        id: 2,
        title: "PUF IoT Authentication FPGA",
        date: "Nov 28, 2025",
        excerpt: "Implementing a PUF-based authentication system for IoT devices using FPGA.",
        content: `
    <p class="mb-10 text-lg text-gray-600 dark:text-slate-300">
        This post serves as a container for my ongoing research into FPGA vulnerabilities. I will update this page with new entries as I progress.
    </p>

        <div>

            <!-- ENTRY 1 -->
            <div class="group">
                <div class="flex flex-wrap items-baseline gap-3 mb-4">
                    <h2 class="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                        Academic Vision & Project Goals
                    </h2>
                    <span class="font-mono text-sm text-gray-500 dark:text-slate-500">2025-11-28</span>
                </div>
                <div class="pl-4 border-l-2 border-gray-200 dark:border-slate-700 group-hover:border-brand-500 dark:group-hover:border-brand-500 transition-colors">
                    <p class="text-gray-600 dark:text-slate-400 leading-relaxed">
                        This project represents a cornerstone of my academic journey, serving as the core of my <strong>Bachelor's Thesis</strong>. Beyond its immediate technical scope, it plays a crucial role in my path toward specializing in advanced communications and embedded security.
                    </p>
                    <p class="text-gray-600 dark:text-slate-400 leading-relaxed mt-4">
                        My goal is to leverage this research to demonstrate my readiness for the <a href="https://www.tum.de/en/studies/degree-programs/detail/communications-engineering-master-of-science-msc" target="_blank" class="text-brand-600 hover:underline">Master of Science in Communications Engineering at TUM (Technical University of Munich)</a>, a program I deeply aspire to join.
                    </p>
                </div>
            </div>

            
            <!--
            <div class="py-12">
                <div class="border-t border-gray-200 dark:border-slate-800 border-dashed"></div>
            </div>
            -->



        </div>
`
    },

    {
        id: 3,
        title: "Year Abroad at LMU Munich",
        date: "Mar 18, 2026",
        excerpt: "Documenting my experiences and academic journey during my year abroad at Ludwig Maximilian University of Munich.",
        content: `
    <p class="mb-4">This log captures my experiences, challenges, and learnings during my year abroad at LMU Munich.</p>
    
    <div>
        <!-- ENTRY 2 -->
        <div class="group mb-12">
            <div class="flex flex-wrap items-baseline gap-3 mb-4">
                <h2 class="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                    Midway Through, Courses, People & the City
                </h2>
                <span class="font-mono text-sm text-gray-500 dark:text-slate-500">2026-03-18</span>
            </div>
            <div class="pl-4 border-l-2 border-gray-200 dark:border-slate-700 group-hover:border-brand-500 dark:group-hover:border-brand-500 transition-colors">
                <p class="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
                    A few months in and Munich has completely won me over. The city has a rare quality, in its quiet tranquility also resides a "je ne sais quoi" that excites me, be it its precious buildings or its breathtaking surrounding (and inner) nature. It's something that can't be described with words.
                </p>
                <p class="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
                    Saying that the social side has been good would be an understatement. Mingling with internationals was expected and has helped me broaden my horizons, allowing me to understand different views and making oneself more open-minded. On the other side, locals. I can't state strongly enough how lucky I have been in this aspect, as I have been able to make what are expected to be long-lasting friendships with amazing people. This mixture has been enriching in a way I could not have predicted.
                </p>
                <p class="text-gray-600 dark:text-slate-400 leading-relaxed">
                    On the academic front, all courses passed. I have yet to sit the exam for the <strong>Blockvorlesung on Intelligent Systems</strong> given by <strong>Juan Bernabé Moreno</strong>, which I look forward to, as the course gave me a solid foundation to build on.
                </p>
            </div>
        </div>

        <div class="py-12">
            <div class="border-t border-gray-200 dark:border-slate-800 border-dashed"></div>
        </div>

        <!-- ENTRY 1 -->
        <div class="group">
            <div class="flex flex-wrap items-baseline gap-3 mb-4">
                <h2 class="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                    The Beginning
                </h2>
                <span class="font-mono text-sm text-gray-500 dark:text-slate-500">2025-11-28</span>
            </div>
            <div class="pl-4 border-l-2 border-gray-200 dark:border-slate-700 group-hover:border-brand-500 dark:group-hover:border-brand-500 transition-colors">
                <p class="text-gray-600 dark:text-slate-400 leading-relaxed">
                    Arriving in Munich marks the start of a new chapter. I'm looking forward to diving into the academic environment at LMU and exploring the city.
                </p>
            </div>
        </div>
    </div>
`
    },
    {
        id: 4,
        title: "Mobile Compute Node",
        date: "Jan 11, 2026",
        excerpt: "Designing a portable computing platform for field operations and remote deployments.",
        content: `
    <p class="mb-4">This post captures the development and deployment of a Mobile Compute Node, its objectives, tech stack, and use cases are to be determined.</p>
    <div>
        <!-- ENTRY 1 -->
        <div class="group">
            <div class="flex flex-wrap items-baseline gap-3 mb-4">
                <h2 class="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                    Setting objectives
                </h2>
                <span class="font-mono text-sm text-gray-500 dark:text-slate-500">2026-01-11</span>
            </div>
            <div class="pl-4 border-l-2 border-gray-200 dark:border-slate-700 group-hover:border-brand-500 dark:group-hover:border-brand-500 transition-colors">
                <p class="text-gray-600 dark:text-slate-400 leading-relaxed">
                    The primary goal of this project is to design and implement a portable computing platform that can be easily deployed in field operations and remote locations. This node should be capable of handling various computational tasks while being resilient to environmental challenges. 
                    The compute node cosist of a gutted all-in-one (more info to come). It has a battery pack, a SATA SSD and the on/off and reset buttons. The board itself has an 32GB eMMC module, a WiFi card, 4GB of RAM and a GigaBit RJ45 daughter board.
                    Right now I have configed it so it is SSH accessible via WiFi (the wifi card functions as an AP) and Ethernet. The Ethernet can be set to client or server mode, in the latter it becomes the DHCP server, more functionalit to come.
                </p>
            </div>
        </div>
    </div>
`    },
];
