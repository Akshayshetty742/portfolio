"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowUpRight,
  Download,
  Mail,
  Menu,
  X,
  Code2,
  Cpu,
  Layers,
  Terminal,
  Copy,
  Check,
  Calendar,
  GraduationCap,
  Briefcase,
  ChevronRight,
  FolderGit2,
  Network,
  ShieldCheck,
  Wrench,
  Cloud,
  Database,
  Phone,
  MapPin,
  BookOpen,
} from "lucide-react";

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = "shettyakshay742@gmail.com";
  const phone = "+91 9019844494";
  const githubUrl = "https://github.com/Akshayshetty742";
  const linkedinUrl = "https://linkedin.com/in/akshaya-b-618b63269";
  const resumeUrl = "/resume.pdf";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      borderColor: "border-slate-800 hover:border-cyan-500/40",
      skills: ["C", "C++", "Python", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend Development",
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      borderColor: "border-slate-800 hover:border-blue-500/40",
      skills: ["HTML", "CSS", "React.js", "Responsive Web Design"],
    },
    {
      title: "Backend & APIs",
      icon: <Terminal className="w-5 h-5 text-violet-400" />,
      borderColor: "border-slate-800 hover:border-violet-500/40",
      skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
    },
    {
      title: "AI / ML",
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      borderColor: "border-slate-800 hover:border-emerald-500/40",
      skills: ["Gemini AI", "AI Agents", "Multi-Agent Systems"],
    },
    {
      title: "Databases & Cloud",
      icon: <Cloud className="w-5 h-5 text-sky-400" />,
      borderColor: "border-slate-800 hover:border-sky-500/40",
      skills: ["MongoDB", "Firebase", "Google Cloud Run", "Netlify", "Vercel"],
    },
    {
      title: "Networking & Security",
      icon: <Network className="w-5 h-5 text-pink-400" />,
      borderColor: "border-slate-800 hover:border-pink-500/40",
      skills: [
        "TCP/IP",
        "Socket Programming",
        "SSL/TLS",
        "OpenFlow",
        "Mininet",
      ],
    },
    {
      title: "Tools & Environments",
      icon: <Wrench className="w-5 h-5 text-amber-400" />,
      borderColor: "border-slate-800 hover:border-amber-500/40",
      skills: ["Git", "GitHub", "VS Code", "Linux"],
    },
  ];

  const projects = [
    {
      id: "nexus-ai",
      title: "Nexus AI – Student Life OS",
      type: "Team Project • Feb 2026 – Mar 2026",
      category: "Generative AI • Student OS",
      description:
        "Built an AI-powered student productivity platform with task scheduling, smart calendar, auto-rescheduling, habit tracking, and study planning.",
      bullets: [
        "Developed backend APIs using Node.js and Express and integrated Gemini AI to generate personalized study plans from syllabus input.",
        "Collaborated in a team using Git and a structured branching workflow.",
      ],
      tags: ["TypeScript", "React", "Node.js", "Express", "Gemini AI", "Firebase"],
      github: "https://github.com/Akshayshetty742/nexus-ai-os",
      gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
      badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      glowColor: "group-hover:border-cyan-500/40",
    },
    {
      id: "multi-agent-assistant",
      title: "Multi-Agent AI Assistant",
      type: "Personal Project",
      category: "Multi-Agent Systems • Conversational AI",
      description:
        "Developed a full-stack conversational assistant for managing tasks, notes, and events through natural-language commands.",
      bullets: [
        "Implemented specialized Task, Notes, and Event agents with a React frontend and FastAPI backend; built REST APIs and deployed on Google Cloud Run.",
        "Implemented interactive UI with dark/light mode and real-time response handling.",
      ],
      tags: ["React", "FastAPI", "REST APIs", "Google Cloud Run", "Python"],
      github: "https://github.com/Akshayshetty742/multi-agent-assistant",
      gradient: "from-purple-500/10 via-indigo-500/5 to-transparent",
      badgeColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
      glowColor: "group-hover:border-purple-500/40",
    },
    {
      id: "leaderboard-system",
      title: "Secure Multi-Threaded Leaderboard System",
      type: "Computer Networks Project",
      category: "Systems & Security • High Concurrency",
      description:
        "Built a secure client-server leaderboard system using Python socket programming with SSL/TLS encryption.",
      bullets: [
        "Implemented multithreaded request handling and thread synchronization using locks to ensure data integrity.",
        "Load-tested with 100 concurrent clients, achieving approximately 6,500 requests/second after optimization.",
      ],
      tags: ["Python", "Socket Programming", "SSL/TLS", "Multithreading"],
      github: "https://github.com/Akshayshetty742/CN-Jackfruit-Project-distributed-leaderboard-system",
      gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
      badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      glowColor: "group-hover:border-amber-500/40",
    },
    {
      id: "sdn-firewall",
      title: "SDN Firewall using Ryu & Mininet",
      type: "Computer Networks Project",
      category: "Networking • Software Defined Networks",
      description:
        "Implemented a Software Defined Networking firewall using Python, Ryu Controller, Mininet, and OpenFlow.",
      bullets: [
        "Developed dynamic flow rules to allow or block communication between network hosts.",
        "Configured and tested virtual network topologies with centralized traffic control and firewall policies.",
      ],
      tags: ["Python", "Ryu Controller", "Mininet", "OpenFlow"],
      github: "https://github.com/Akshayshetty742/sdn-firewall-ryu",
      gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
      badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      glowColor: "group-hover:border-emerald-500/40",
    },
    {
      id: "journeyhub",
      title: "JourneyHub – Travel Booking Web Application",
      type: "Personal Project • May 2025 – Aug 2025",
      category: "Full Stack • Travel Platform",
      description:
        "Developed a responsive travel booking platform with interactive UI for browsing travel packages and pricing.",
      bullets: [
        "Built backend services using Node.js and Express and integrated third-party APIs for booking and payments.",
        "Deployed the application using Netlify and managed development using Git and GitHub.",
      ],
      tags: ["React", "Node.js", "Express", "Netlify", "HTML/CSS"],
      github: "https://github.com/Akshayshetty742/TravelVista_React_Project",
      gradient: "from-pink-500/10 via-rose-500/5 to-transparent",
      badgeColor: "text-pink-400 border-pink-500/30 bg-pink-500/10",
      glowColor: "group-hover:border-pink-500/40",
    },
    {
      id: "pes-vcs",
      title: "PES Version Control System (VCS)",
      type: "Systems Programming Project",
      category: "Systems Programming • Custom VCS",
      description:
        "Implemented a lightweight version control system in C, inspired by Git.",
      bullets: [
        "Developed features for repository initialization, staging, committing, branching, log history, and checkout.",
        "Used custom data structures, file handling, and object storage for efficient version management.",
      ],
      tags: ["C", "File Systems", "Custom Data Structures"],
      github: "https://github.com/Akshayshetty742/PES1UG24AAM026pes-vcs",
      gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
      badgeColor: "text-blue-400 border-blue-500/30 bg-blue-500/10",
      glowColor: "group-hover:border-blue-500/40",
    },
  ];

  const education = [
    {
      degree: "B.Tech, Artificial Intelligence and Machine Learning",
      institution: "PES University",
      period: "Sep 2024 – Sep 2028",
      details: "Specializing in AI & Machine Learning, Full-Stack Development, Distributed Systems, and Networking.",
    },
    {
      degree: "PUC 1st and 2nd Year (Grade: 11–12)",
      institution: "KLE Prerana PU Residential College, Hubli",
      period: "Mar 2022 – Mar 2024",
      details: "Pre-University Science curriculum with focus on Physics, Chemistry, and Mathematics.",
    },
    {
      degree: "6th–10th, CBSE (Grade: 10)",
      institution: "Jawahar Navodaya Vidyalaya (JNV)",
      period: "Secondary Education",
      details: "CBSE curriculum with strong foundational problem solving and academic excellence.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300 relative overflow-x-hidden font-sans">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[500px] bg-cyan-500/15 blur-[160px] rounded-full" />
        <div className="absolute top-[25%] -left-32 w-[500px] h-[500px] bg-purple-600/10 blur-[180px] rounded-full" />
        <div className="absolute top-[55%] -right-32 w-[550px] h-[550px] bg-blue-600/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-600/10 blur-[170px] rounded-full" />
      </div>

      {/* Sticky Header Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/75 border-b border-slate-800/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
          <Link
            href="#"
            className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-white hover:text-cyan-400 transition"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-black font-extrabold shadow-[0_0_20px_rgba(34,211,238,0.35)] group-hover:scale-105 transition">
              A
            </div>
            <span>
              Akshaya <span className="text-cyan-400">B</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-cyan-400 transition-colors duration-200 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Akshaya_B_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 border border-slate-800 hover:border-cyan-400/50 hover:bg-white/10 transition duration-200"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition duration-200"
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-slate-800 text-slate-300 hover:text-white hover:bg-white/10 transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-800 bg-black/95 backdrop-blur-2xl px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5 hover:text-cyan-400 text-base font-medium transition"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Akshaya_B_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-white/5 border border-slate-800 text-white hover:border-cyan-400/50 transition"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative z-10 min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 sm:px-8 py-16 sm:py-24">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Title / Role Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              <Sparkles className="w-4 h-4" />
              <span>AI • FRONTEND • CREATOR</span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
                Akshaya B
              </span>
            </h1>

            {/* Headline Subtitle */}
            <h2 className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-slate-200">
              CSE (AI &amp; ML) Student at PES University
            </h2>

            {/* Location & Summary from Resume */}
            <p className="mt-2 text-xs sm:text-sm text-cyan-400/90 font-mono flex items-center justify-center lg:justify-start gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Bangalore Urban, Karnataka, India</span>
            </p>

            <p className="mt-6 text-slate-300 sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Aspiring Front-End Developer and CSE (AI &amp; ML) student at PES University with hands-on experience building full-stack web applications, AI-powered productivity tools, networking systems, and software projects. Experienced with React.js, JavaScript, Python, Node.js, FastAPI, databases, Git/GitHub, and cloud deployment.
            </p>

            {/* Hero CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 bg-cyan-400 hover:bg-cyan-300 text-black px-7 py-4 rounded-2xl font-bold text-sm sm:text-base transition duration-300 shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Akshaya_B_Resume.pdf"
                className="inline-flex items-center gap-2.5 bg-white/5 hover:bg-white/10 text-white border border-slate-800 hover:border-cyan-400/50 px-7 py-4 rounded-2xl font-semibold text-sm sm:text-base backdrop-blur-md transition duration-300 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social & Contact Badges */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-sm text-slate-400">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-cyan-400 transition group"
              >
                <GithubIcon className="w-4 h-4 text-slate-300 group-hover:text-cyan-400 transition" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-cyan-400 transition group"
              >
                <LinkedinIcon className="w-4 h-4 text-slate-300 group-hover:text-cyan-400 transition" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 hover:text-cyan-400 transition group"
              >
                <Mail className="w-4 h-4 text-slate-300 group-hover:text-cyan-400 transition" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Hero Image Card (No caption below) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-[320px] sm:max-w-[380px]">
              {/* Glowing Aura Ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/25 via-blue-500/20 to-purple-600/25 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-500" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 group-hover:border-cyan-500/40 bg-black/60 backdrop-blur-sm p-3 shadow-2xl transition duration-500">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="/akshay.jpeg"
                    alt="Akshaya B"
                    fill
                    priority
                    sizes="(max-width: 768px) 320px, 380px"
                    className="object-cover object-center group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 sm:py-32 px-6 sm:px-8 relative border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>About Me</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
                Engineering modern web apps, intelligent AI workflows &amp; robust networking systems.
              </h2>
              <p className="mt-6 text-slate-300 leading-relaxed text-base sm:text-lg">
                I am a Computer Science Engineering student specializing in AI &amp; ML at PES University. My technical journey spans building responsive front-end applications with React.js, designing autonomous AI assistants with Gemini and FastAPI, and developing performant network systems using multithreaded socket programming and SDN flow controllers.
              </p>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Whether creating intelligent student operating systems like Nexus AI or implementing low-level version control systems in C, I am driven by creating high-impact, performant, and reliable software.
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800 hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-white text-lg">Front-End Focus</h3>
                <p className="text-cyan-400 text-sm mt-1">React &amp; Responsive UI</p>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  Crafting clean, accessible, and high-performance component architectures.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800 hover:border-purple-500/40 transition">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-white text-lg">AI &amp; Multi-Agent</h3>
                <p className="text-purple-400 text-sm mt-1">LLMs &amp; Gemini AI</p>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  Integrating intelligent workflows and multi-agent coordination systems.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800 hover:border-emerald-500/40 transition">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-white text-lg">Systems &amp; Security</h3>
                <p className="text-emerald-400 text-sm mt-1">SSL/TLS &amp; Sockets</p>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  Building concurrent client-server systems handling ~6,500 req/sec.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-slate-800 hover:border-amber-500/40 transition">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                  <Network className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-white text-lg">Networking &amp; SDN</h3>
                <p className="text-amber-400 text-sm mt-1">Ryu &amp; OpenFlow</p>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  Implementing dynamic firewall filtering on simulated network topologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 sm:py-32 px-6 sm:px-8 relative bg-black/40 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
              <Briefcase className="w-4 h-4" />
              <span>Career Journey</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Experience
            </h2>
            <p className="mt-4 text-slate-400 text-base">
              Hands-on engineering experience, intensive bootcamps, and real-world project deliveries.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 py-2">
              <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />

              <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-slate-800 hover:border-cyan-500/40 transition duration-300 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800/80">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Front-End Development Bootcamp Student
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm mt-1">
                      PESU I/O — Bangalore, India
                    </p>
                  </div>
                  <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 w-fit">
                    4 Weeks
                  </span>
                </div>

                <ul className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1.5 font-bold">•</span>
                    <span>
                      Completed an intensive Front-End Development Bootcamp focused on <strong className="text-white">HTML, CSS, JavaScript, and React.js</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1.5 font-bold">•</span>
                    <span>
                      Built responsive web applications and implemented interactive UI components; gained hands-on experience with <strong className="text-white">Git and GitHub</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1.5 font-bold">•</span>
                    <span>
                      Engineered a portfolio project using React.js, HTML, and CSS, achieving <strong className="text-white">full functionality across 100% of tested devices and browsers</strong> within a 4-week sprint cycle.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-lg text-xs bg-white/5 text-slate-300 border border-slate-800">React.js</span>
                  <span className="px-3 py-1 rounded-lg text-xs bg-white/5 text-slate-300 border border-slate-800">HTML5 / CSS3</span>
                  <span className="px-3 py-1 rounded-lg text-xs bg-white/5 text-slate-300 border border-slate-800">JavaScript</span>
                  <span className="px-3 py-1 rounded-lg text-xs bg-white/5 text-slate-300 border border-slate-800">Responsive Design</span>
                  <span className="px-3 py-1 rounded-lg text-xs bg-white/5 text-slate-300 border border-slate-800">Git &amp; GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 sm:py-32 px-6 sm:px-8 relative border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
              <FolderGit2 className="w-4 h-4" />
              <span>Engineered Works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Featured Projects
            </h2>
            <p className="mt-4 text-slate-400 text-base">
              Showcasing software systems across AI agents, high-concurrency socket programming, SDN security, and modern web applications.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`group relative rounded-3xl bg-gradient-to-b ${project.gradient} border border-slate-800 ${project.glowColor} p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${project.badgeColor}`}
                    >
                      {project.category}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-slate-800 hover:border-cyan-400/50 transition shrink-0"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-[11px] font-medium text-slate-400 mb-2">
                    {project.type}
                  </p>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-3 mb-4">
                    {project.description}
                  </p>

                  {/* Bullet points from resume */}
                  <ul className="space-y-2 mb-4 text-xs text-slate-400 leading-relaxed">
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-black/50 border border-slate-800 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Action Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition group/link"
                  >
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 sm:py-32 px-6 sm:px-8 relative bg-black/40 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
              <Code2 className="w-4 h-4" />
              <span>Technical Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Skills &amp; Technologies
            </h2>
            <p className="mt-4 text-slate-400 text-base">
              A categorized summary of programming languages, frameworks, systems, databases, and development tooling.
            </p>
          </div>

          {/* Categorized Skill Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className={`p-6 sm:p-7 rounded-3xl bg-white/[0.02] border ${category.borderColor} backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800/80">
                    <div className="p-2 rounded-xl bg-white/5 border border-slate-800">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  </div>

                  {/* Skill Badges / Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-xl text-xs font-medium bg-white/[0.04] border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10 transition duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 sm:py-32 px-6 sm:px-8 relative border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
              <BookOpen className="w-4 h-4" />
              <span>Academic Background</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Education
            </h2>
            <p className="mt-4 text-slate-400 text-base">
              Formal academic credentials and engineering specialization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white/[0.02] border border-slate-800 hover:border-cyan-500/40 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                      {edu.period}
                    </span>
                    <GraduationCap className="w-4 h-4 text-slate-400" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-slate-300 mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Hackathons Showcase */}
      <section id="events" className="py-24 sm:py-32 px-6 sm:px-8 relative bg-black/40 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
              <Calendar className="w-4 h-4" />
              <span>Real-World Impact</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Hackathons &amp; Activities
            </h2>
            <p className="mt-4 text-slate-400 text-base">
              National hackathons, generative AI academies, and project buildathons.
            </p>
          </div>

          <div className="space-y-12">
            {/* Event 1 - Dreamflow */}
            <div className="rounded-3xl bg-white/[0.02] border border-slate-800 overflow-hidden hover:border-cyan-500/40 transition">
              <div className="relative w-full h-[240px] sm:h-[380px] md:h-[460px]">
                <Image
                  src="/dreamflow-event.png"
                  alt="Dreamflow Buildathon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-10">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    Buildathon 2025
                  </span>
                  <span className="text-xs text-slate-400">Shipped MVP</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Dreamflow Buildathon
                </h3>
                <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  Collaborated intensively to design, architect, and ship a fully functional web application prototype during Dreamflow Buildathon 2025.
                </p>
              </div>
            </div>

            {/* Event 2 - Google Cloud Gen AI Academy */}
            <div className="rounded-3xl bg-white/[0.02] border border-slate-800 overflow-hidden hover:border-purple-500/40 transition">
              <div className="relative w-full h-[240px] sm:h-[380px] md:h-[460px]">
                <Image
                  src="/event2.png"
                  alt="Google Cloud Gen AI Academy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-10">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-purple-400 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                    APAC 2026 Cohort
                  </span>
                  <span className="text-xs text-slate-400">Google Cloud</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Google Cloud Gen AI Academy APAC 2026
                </h3>
                <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  Engineered multi-agent AI workflows and scaled Nexus AI using Google Cloud generative AI infrastructure, prompt orchestration, and intelligent agent pipelines.
                </p>
              </div>
            </div>

            {/* Event 3 - Nexus AI Presentation */}
            <div className="rounded-3xl bg-white/[0.02] border border-slate-800 overflow-hidden hover:border-cyan-500/40 transition">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-black/80 p-2">
                <div className="relative h-[220px] sm:h-[280px] rounded-xl overflow-hidden">
                  <Image src="/event3-1.png" alt="Nexus AI Showcase 1" fill className="object-cover" />
                </div>
                <div className="relative h-[220px] sm:h-[280px] rounded-xl overflow-hidden">
                  <Image src="/event3-2.png" alt="Nexus AI Showcase 2" fill className="object-cover" />
                </div>
                <div className="relative h-[220px] sm:h-[280px] rounded-xl overflow-hidden">
                  <Image src="/event3-3.png" alt="Nexus AI Showcase 3" fill className="object-cover" />
                </div>
              </div>
              <div className="p-6 sm:p-10">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    Academic Cohort 1
                  </span>
                  <span className="text-xs text-slate-400">Agentic Hackathon</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Nexus AI – Digital Senior Presentation
                </h3>
                <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  Presented our autonomous student assistant to panels and peers, demonstrating automated academic workload distribution, deadline parsing, and Gemini AI query workflows.
                </p>
                <a
                  href="https://medium.com/@manasviagarkar/beyond-chatbots-building-an-autonomous-student-os-with-the-senior-top-protocol-077bff7f3d68"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-purple-400 hover:text-purple-300 transition"
                >
                  <span>Read Medium Architecture Breakdown</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Event 4 - LaunchED Internship */}
            <div className="rounded-3xl bg-white/[0.02] border border-slate-800 overflow-hidden hover:border-amber-500/40 transition">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-black/80 p-2">
                <div className="relative h-[220px] sm:h-[280px] rounded-xl overflow-hidden">
                  <Image src="/event4-1.png" alt="LaunchED 1" fill className="object-cover" />
                </div>
                <div className="relative h-[220px] sm:h-[280px] rounded-xl overflow-hidden">
                  <Image src="/event4-2.png" alt="LaunchED 2" fill className="object-cover" />
                </div>
                <div className="relative h-[220px] sm:h-[280px] rounded-xl overflow-hidden">
                  <Image src="/event4-3.png" alt="LaunchED 3" fill className="object-cover" />
                </div>
              </div>
              <div className="p-6 sm:p-10">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                    Mentorship &amp; Internship
                  </span>
                  <span className="text-xs text-slate-400">LaunchED Global</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Web Development Mentorship Program
                </h3>
                <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  Successfully completed comprehensive frontend training covering responsive web architectures, React.js ecosystem patterns, component lifecycle management, and production workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 sm:py-32 px-6 sm:px-8 relative border-t border-slate-800/60">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4">
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            Let&apos;s Build Something <span className="text-cyan-400">Extraordinary</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            I am always open to discussing new engineering opportunities, internships, open-source collaborations, or exciting software projects.
          </p>

          {/* Quick Contact Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-slate-800 backdrop-blur-xl max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-black/60 border border-slate-800 mb-8">
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Direct Email</p>
                  <p className="text-sm sm:text-base font-mono font-medium text-white select-all">
                    {email}
                  </p>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/15 border border-slate-800 text-slate-200 hover:text-white transition cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Connection Buttons with Explicit Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href={`mailto:${email}`}
                className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-sm transition shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-slate-800 hover:border-cyan-500/40 text-white text-sm font-semibold transition hover:-translate-y-0.5 active:translate-y-0"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-slate-800 hover:border-cyan-500/40 text-white text-sm font-semibold transition hover:-translate-y-0.5 active:translate-y-0"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-10 px-6 sm:px-8 bg-black/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">Akshaya B</span>
            <span>•</span>
            <span>AI • Frontend • Creator</span>
          </div>

          <p>© {new Date().getFullYear()} Akshaya B. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#education" className="hover:text-cyan-400 transition">Education</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}