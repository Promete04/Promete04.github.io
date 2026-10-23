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
        I am a final-year Computer Science and Engineering student at UAH, passionate about Embedded Systems and the intersection of hardware and software. Over time, a curiosity for hardware tinkering, a Model UN debate representing Portugal on the right to privacy, a growing awareness of how exposed our systems really are, and a rabbit hole or two led me to hardware security and the architectures that protect critical infrastructure. After an Erasmus year at LMU Munich, where I took courses like Cryptography and Security Bug Bounty, I am back in Alcalá working on my Bachelor's thesis on hardware acceleration of post-quantum cryptography (FrodoKEM) on FPGAs, and working towards a Master's in Communications Engineering at TUM, with the hope of building something meaningful from there.
    `,
    quote: "Try everything once.",
    quoteAuthor: "Linus Torvalds",
    // Avatar image path. Ensure this file exists in assets/images/
    avatar: "assets/images/avatar.jpg",
    currentFocus: {
        title: "Hardware Acceleration of FrodoKEM on AMD Versal AI Edge",
        description: "Bachelor's thesis: offloading the bottleneck of FrodoKEM, a conservative lattice-based post-quantum KEM, to the FPGA fabric of an Alinx VD100 with HLS, and measuring latency, throughput and energy against a software baseline.",
        linkText: "Read the Research Log",
        linkTarget: 5 // ID of the blog post
    }
};

const projects = [
    {
        title: "HomeLab",
        description: `
        Building and maintaining a comprehensive HomeLab for network segmentation, service deployment, and security configuration simulations.
        `,
        stack: ["Python", "Docker", "Bash", "NUT", "Proxmox", "TrueNAS"],
        github: "https://github.com/Promete04/homelab", // Repo link
        relatedPostId: 1
    },
    {
        title: "FrodoKEM on Versal AI Edge",
        description: `
        Bachelor's thesis (in progress). Hardware acceleration of FrodoKEM, a lattice-based (LWE) post-quantum key encapsulation mechanism, on the Alinx VD100 (AMD Versal AI Edge) using HLS.
        `,
        stack: ["FrodoKEM", "Alinx VD100", "Vivado", "Vitis", "HLS"],
        github: "", // Repo link (icon hidden while empty)
        relatedPostId: 5 // Linked to FrodoKEM research log
    },
    {
        title: "Project Accountability",
        description: `
        End-to-end encrypted group messaging with accountable, threshold key escrow. Chats are private by default, but a quorum of t-of-n independent escrow authorities (never the server, never a single party) can jointly recover a flagged group's key. Built with Itamar Fink as the final project for the Cryptography practical course at LMU.
        `,
        stack: ["C++20", "Crypto++", "Shamir / DKG", "ElGamal", "SQLite", "FTXUI"],
        github: "https://github.com/Promete04/project-accountability" // Repo link
    },
    {
        title: "Ubiquitous Computing",
        description: `
        University course project on ubiquitous computing. We have specified ForestGuard, an early-warning wildfire detection system: solar-powered ESP32 sensor nodes on the trees that watch fuel dryness and combustion gases, reporting over ESP-NOW Long Range to a base station that fuses the readings with wind data and raises local and central alarms.`,
        stack: ["ESP32", "ESP-NOW LR", "BME680", "MQTT", "Node-RED"],
        github: "placeholder", // Repo link
        relatedPostId: 4
    },
];

const experience = [
    {
        role: "Erasmus Student",
        company: "Ludwig Maximilian University of Munich (LMU)",
        period: "2025 - 2026",
        details: `
            Completed an academic year abroad, focusing on advanced computer science topics such as Cryptography and Security Bug Bounty, and on cultural exchange.
        `,
        relatedPostId: 3
    },
    {
        role: "Computer Science and Engineering Student",
        company: "Universidad de Alcalá (UAH)",
        period: "2023 - 2027 (Expected)",
        details: `
            Final year of a Bachelor's degree in Computer Science and Engineering, currently working on my thesis on hardware acceleration of FrodoKEM, a post-quantum key encapsulation mechanism, on AMD Versal AI Edge. <a href="https://www.uah.es/es/estudios/Grado-en-Ingenieria-Informatica/" target="_blank" class="text-brand-600 hover:underline">Program Details</a>.
        `
    }
];

const blogPosts = [
    // --- COPY FROM HERE TO ADD A NEW POST ---
    {
        id: 1,
        title: "HomeLab",
        date: "Oct 23, 2026",
        excerpt: "Building and maintaining a comprehensive HomeLab for network segmentation, service deployment, and security configuration simulations.",

        content: `
    <p class="mb-4">Building and maintaining a comprehensive HomeLab for network segmentation, service deployment, and security configuration simulations.</p>
        <div>
            <!-- ENTRY 5 -->
            <div class="group mb-12">
                <div class="flex flex-wrap items-baseline gap-3 mb-4">
                    <h2 class="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                        An FPGA Joins the Lab
                    </h2>
                    <span class="font-mono text-sm text-gray-500 dark:text-slate-500">-> 2026-10-23</span>
                </div>
                <div class="pl-4 border-l-2 border-gray-200 dark:border-slate-700 group-hover:border-brand-500 dark:group-hover:border-brand-500 transition-colors">
                    <p class="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
                        The biggest addition is an <strong>ALINX AX7035B</strong> (Artix-7) board, plugged into Entrypoint so I can learn VHDL from anywhere. A new <strong>Node-RED LXC</strong> runs the whole FPGA lab:
                    </p>
                    <ul class="list-disc list-inside text-gray-600 dark:text-slate-400 leading-relaxed mb-4 space-y-1">
                        <li><strong>Power</strong>: the 5V adapter goes through a USB relay, so a token-protected flow on Node-RED switches the board on, off or resets it.</li>
                        <li><strong>Serial</strong>: the board's UART is bridged to raw TCP, replacing my old <code>fpga-power</code> script and ser2net.</li>
                        <li><strong>Camera</strong>: an old Android phone pointed at the board streams through scrcpy, so I can see the LEDs and the 7-segment display remotely.</li>
                    </ul>
                    <p class="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
                        From any machine on the LAN or over Tailscale it all comes down to three shell commands: <code>fpga_pwr</code>, <code>fpga_uart</code> and <code>fpga_cam</code>. A udev rule gives the relay and UART adapters stable names so they survive reboots and replugs.
                    </p>
                    <p class="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
                        Other changes since the last entry:
                    </p>
                    <ul class="list-disc list-inside text-gray-600 dark:text-slate-400 leading-relaxed mb-4 space-y-1">
                        <li>The Docker VM on asus is now a Docker LXC, and Entrypoint got its own Docker LXC as well.</li>
                        <li>New services: <strong>BookOrbit</strong> (replacing Booklore) on Entrypoint, and <strong>Crafty Controller</strong> on asus. Open WebUI got reshuffled on Entrypoint, and Home Assistant OS is on 17.1.</li>
                        <li>The dead drive is finally gone from the docs, and the cloudflared typo is fixed.</li>
                    </ul>
                    <p class="text-gray-600 dark:text-slate-400 leading-relaxed">
                        The draw.io diagram is now exported to SVG automatically by a GitHub Actions workflow, so the picture in the README can no longer drift from the source file.
                    </p>
                </div>
            </div>

            <div class="py-12">
                <div class="border-t border-gray-200 dark:border-slate-800 border-dashed"></div>
            </div>

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
        id: 5,
        title: "Hardware Acceleration of FrodoKEM",
        date: "Oct 14, 2026",
        excerpt: "Research log for my Bachelor's thesis: accelerating the FrodoKEM post-quantum KEM in hardware on AMD Versal AI Edge.",
        content: `
    <p class="mb-10 text-lg text-gray-600 dark:text-slate-300">
        This research log documents my Bachelor's thesis: accelerating FrodoKEM, a conservative lattice-based (LWE) post-quantum key encapsulation mechanism, in hardware on AMD Versal AI Edge.
    </p>

        <div>

            <!-- ENTRY 1 -->
            <div class="group">
                <div class="flex flex-wrap items-baseline gap-3 mb-4">
                    <h2 class="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                        Thesis Scope, Platform, and Plan
                    </h2>
                    <span class="font-mono text-sm text-gray-500 dark:text-slate-500">2026-10-14</span>
                </div>
                <div class="pl-4 border-l-2 border-gray-200 dark:border-slate-700 group-hover:border-brand-500 dark:group-hover:border-brand-500 transition-colors">
                    <p class="text-gray-600 dark:text-slate-400 leading-relaxed">
                        The target is the <strong>Alinx VD100</strong> board with an <strong>AMD Versal AI Edge</strong> device, using <strong>Vivado</strong> for hardware integration, <strong>Vitis</strong> for software development, and <strong>HLS</strong> to describe the accelerators.
                    </p>
                    <p class="text-gray-600 dark:text-slate-400 leading-relaxed mt-4">
                        <strong>FrodoKEM</strong> is a deliberately conservative post-quantum KEM: its security rests on the plain Learning With Errors (LWE) problem, with no extra ring or module structure. The price is large matrices and heavy arithmetic, which makes it a good candidate for hardware acceleration.
                    </p>
                    <p class="text-gray-600 dark:text-slate-400 leading-relaxed mt-4">
                        The plan: first profile the software implementation to find where the time actually goes, then offload that bottleneck to the FPGA fabric. If matrix generation turns out to limit throughput, it will be accelerated as well.
                    </p>
                    <p class="text-gray-600 dark:text-slate-400 leading-relaxed mt-4">
                        The evaluation compares the accelerated design against a software baseline in terms of <strong>latency</strong>, <strong>throughput</strong>, and <strong>energy consumption</strong>.
                    </p>
                    <p class="text-gray-600 dark:text-slate-400 leading-relaxed mt-4">
                        Strategically, this thesis aligns with my goal of pursuing the <a href="https://www.tum.de/en/studies/degree-programs/detail/communications-engineering-master-of-science-msc" target="_blank" class="text-brand-600 hover:underline">MSc in Communications Engineering at TUM</a>, by showing measurable, security-focused hardware/software co-design work.
                    </p>
                </div>
            </div>

        </div>
`
    },

    {
        id: 3,
        title: "Year Abroad at LMU Munich",
        date: "Oct 14, 2026",
        excerpt: "Documenting my experiences and academic journey during my year abroad at Ludwig Maximilian University of Munich.",
        content: `
    <p class="mb-4">This log captures my experiences, challenges, and learnings during my year abroad at LMU Munich.</p>
    
    <div>
        <!-- ENTRY 3 -->
        <div class="group mb-12">
            <div class="flex flex-wrap items-baseline gap-3 mb-4">
                <h2 class="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                    Closing the Chapter
                </h2>
                <span class="font-mono text-sm text-gray-500 dark:text-slate-500">2026-10-14</span>
            </div>
            <div class="pl-4 border-l-2 border-gray-200 dark:border-slate-700 group-hover:border-brand-500 dark:group-hover:border-brand-500 transition-colors">
                <p class="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
                    The year abroad is over, and I am back at UAH for my final year. Writing this from Alcalá, Munich feels both very recent and strangely far away.
                </p>
                <p class="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
                    The academic side is what I came for. Courses like <strong>Cryptography</strong> and <strong>Security Bug Bounty</strong> pushed me further into security and gave a clearer direction to what I want to do next. But it is not what I will remember most. What stays with me are the people: the internationals who changed how I see things, and the friends I made in Munich, whom I fully intend to keep.
                </p>
                <p class="text-gray-600 dark:text-slate-400 leading-relaxed">
                    If anything, this year made one thing clear: I want to come back. The plan now is to finish my degree and thesis here, and then return to Munich for the Master's at TUM. Bis bald.
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
        title: "Ubiquitous Computing",
        date: "Oct 23, 2026",
        excerpt: "Course project log on ubiquitous computing: ForestGuard, an early-warning wildfire detection system for forests, plus the earlier Mobile Compute Node.",
        content: `
    <p class="mb-4">This log follows my Ubiquitous Computing course project. The main deliverable is ForestGuard, an early-warning wildfire detection system for forests; the log also keeps the earlier notes on the Mobile Compute Node.</p>
    <div>
        <!-- ENTRY 2 -->
        <div class="group mb-12">
            <div class="flex flex-wrap items-baseline gap-3 mb-4">
                <h2 class="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                    ForestGuard: System Specified
                </h2>
                <span class="font-mono text-sm text-gray-500 dark:text-slate-500">2026-10-23</span>
            </div>
            <div class="pl-4 border-l-2 border-gray-200 dark:border-slate-700 group-hover:border-brand-500 dark:group-hover:border-brand-500 transition-colors">
                <p class="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
                    As a team of four, we have finished the specification of <strong>ForestGuard</strong>, an early-warning system for forest fires. Towers, patrols and satellites only see a fire once the smoke clears the canopy; the idea here is to catch it under the trees, in its first minutes, and to flag dangerous conditions before there is a fire at all.
                </p>
                <ul class="list-disc list-inside text-gray-600 dark:text-slate-400 leading-relaxed mb-4 space-y-1">
                    <li><strong>Sensor node</strong>: an ESP32 in an IP65 box on a tree trunk, with a BME680 (temperature, humidity, combustion gases), a capacitive soil moisture probe for fuel dryness, and a vibration sensor that wakes it if someone tampers with it or the tree falls. It spends almost all its time in Deep Sleep, runs on an 18650 cell and a small solar panel, and covers a 60 m radius (about 1.13 ha).</li>
                    <li><strong>Link</strong>: ESP-NOW in Long Range mode, encrypted, straight to the base station. No router, no LoRa module, no mobile coverage needed.</li>
                    <li><strong>Base station</strong>: an ESP32 receiver over USB to a small PC running the MQTT broker, Node-RED context rules and a map dashboard, plus a 24 V industrial signal tower (green, red, buzzer) driven through relays.</li>
                </ul>
                <p class="text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
                    The server fuses node readings with wind data from the AEMET API into a risk index based on the "30-30-30" rule, and the nodes adapt to it: a reading every 5 minutes normally, every minute under high risk, every 30 seconds on suspicion of fire. A fire is confirmed after two consecutive suspicious readings (gas resistance dropping well below its baseline together with a temperature spike), and if a node loses its link it will sound its own buzzer anyway.
                </p>
                <p class="text-gray-600 dark:text-slate-400 leading-relaxed">
                    Each detector node comes in under 60 € at retail prices. Next up: building the two-node prototype.
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
                    Mobile Compute Node: Setting Objectives
                </h2>
                <span class="font-mono text-sm text-gray-500 dark:text-slate-500">2026-01-11</span>
            </div>
            <div class="pl-4 border-l-2 border-gray-200 dark:border-slate-700 group-hover:border-brand-500 dark:group-hover:border-brand-500 transition-colors">
                <p class="text-gray-600 dark:text-slate-400 leading-relaxed">
                    The primary goal of this project is to design and implement a portable computing platform that can be easily deployed in field operations and remote locations. This node should be capable of handling various computational tasks while being resilient to environmental challenges. 
                    The compute node consists of a gutted all-in-one (more info to come). It has a battery pack, a SATA SSD and the on/off and reset buttons. The board itself has a 32GB eMMC module, a WiFi card, 4GB of RAM and a Gigabit RJ45 daughter board.
                    Right now I have configured it so it is SSH accessible via WiFi (the wifi card functions as an AP) and Ethernet. The Ethernet can be set to client or server mode, in the latter it becomes the DHCP server, more functionality to come.
                </p>
            </div>
        </div>
    </div>
`
    },
];
