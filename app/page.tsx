"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  MapPin,
  BookOpen,
} from "lucide-react";

function GithubIcon({ className = "w-5 h-5 shrink-0", size = 20 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
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

function LinkedinIcon({ className = "w-5 h-5 shrink-0", size = 20 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
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
      icon: <Code2 size={20} className="w-5 h-5 shrink-0 text-cyan-400" />,
      borderColor: "border-slate-800/80 hover:border-cyan-500/50",
      skills: ["C", "C++", "Python", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend Development",
      icon: <Layers size={20} className="w-5 h-5 shrink-0 text-blue-400" />,
      borderColor: "border-slate-800/80 hover:border-blue-500/50",
      skills: ["HTML", "CSS", "React.js", "Responsive Web Design"],
    },
    {
      title: "Backend & APIs",
      icon: <Terminal size={20} className="w-5 h-5 shrink-0 text-violet-400" />,
      borderColor: "border-slate-800/80 hover:border-violet-500/50",
      skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
    },
    {
      title: "AI / ML & Cloud",
      icon: <Cpu size={20} className="w-5 h-5 shrink-0 text-emerald-400" />,
      borderColor: "border-slate-800/80 hover:border-emerald-500/50",
      skills: [
        "Gemini AI",
        "Multi-Agent Systems",
        "Google Cloud Run",
        "Netlify",
        "Vercel",
      ],
    },
    {
      title: "Databases & Networking",
      icon: <Network size={20} className="w-5 h-5 shrink-0 text-pink-400" />,
      borderColor: "border-slate-800/80 hover:border-pink-500/50",
      skills: [
        "MongoDB",
        "Firebase",
        "TCP/IP",
        "Socket Programming",
        "SSL/TLS",
        "OpenFlow",
        "Mininet",
      ],
    },
    {
      title: "Tools & Environments",
      icon: <Wrench size={20} className="w-5 h-5 shrink-0 text-amber-400" />,
      borderColor: "border-slate-800/80 hover:border-amber-500/50",
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
        "AI-powered student productivity platform with task scheduling, smart calendar, auto-rescheduling, habit tracking, and study planning.",
      bullets: [
        "Developed backend APIs using Node.js and Express and integrated Gemini AI to generate personalized study plans from syllabus input.",
        "Collaborated in a team using Git and a structured branching workflow.",
      ],
      tags: ["TypeScript", "React", "Node.js", "Express", "Gemini AI", "Firebase"],
      github: "https://github.com/Akshayshetty742/nexus-ai-os",
      badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      glowColor: "group-hover:border-cyan-500/50",
    },
    {
      id: "multi-agent-assistant",
      title: "Multi-Agent AI Assistant",
      type: "Personal Project",
      category: "Multi-Agent Systems • Conversational AI",
      description:
        "Full-stack conversational assistant managing tasks, notes, and events via natural-language commands using specialized agents.",
      bullets: [
        "Implemented specialized Task, Notes, and Event agents with a React frontend and FastAPI backend; built REST APIs and deployed on Google Cloud Run.",
        "Implemented interactive UI with dark/light mode and real-time response handling.",
      ],
      tags: ["React", "FastAPI", "REST APIs", "Google Cloud Run", "Python"],
      github: "https://github.com/Akshayshetty742/multi-agent-assistant",
      badgeColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
      glowColor: "group-hover:border-purple-500/50",
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
      badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      glowColor: "group-hover:border-amber-500/50",
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
      badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      glowColor: "group-hover:border-emerald-500/50",
    },
    {
      id: "journeyhub",
      title: "JourneyHub – Travel Booking Web Application",
      type: "Personal Project • May 2025 – Aug 2025",
      category: "Full Stack • Travel Platform",
      description:
        "Responsive travel booking platform featuring interactive UI components, backend APIs, and integrated booking services.",
      bullets: [
        "Built backend services using Node.js and Express and integrated third-party APIs for booking and payments.",
        "Deployed the application using Netlify and managed development using Git and GitHub.",
      ],
      tags: ["React", "Node.js", "Express", "Netlify", "HTML/CSS"],
      github: "https://github.com/Akshayshetty742/TravelVista",
      badgeColor: "text-pink-400 border-pink-500/30 bg-pink-500/10",
      glowColor: "group-hover:border-pink-500/50",
    },
    {
      id: "pes-vcs",
      title: "PES Version Control System in C",
      type: "Systems Programming Project",
      category: "Systems Programming • Custom VCS",
      description:
        "Lightweight version control system built in C, featuring staging, committing, branching, log history, and checkout using custom data structures.",
      bullets: [
        "Developed features for repository initialization, staging, committing, branching, log history, and checkout.",
        "Used custom data structures, file handling, and object storage for efficient version management.",
      ],
      tags: ["C", "File Systems", "Custom Data Structures"],
      github: "https://github.com/Akshayshetty742/PES1UG24AAM026pes-vcs",
      badgeColor: "text-blue-400 border-blue-500/30 bg-blue-500/10",
      glowColor: "group-hover:border-blue-500/50",
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
    <main className="min-h-screen w-full bg-[#050505] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300 relative overflow-x-hidden font-sans">
      {/* Dynamic Background Radial Glows & Orbs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] lg:w-[900px] h-[340px] sm:h-[500px] bg-cyan-500/15 blur-[120px] sm:blur-[160px] rounded-full" />
        <div className="absolute top-[25%] -left-32 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-600/10 blur-[140px] sm:blur-[180px] rounded-full" />
        <div className="absolute top-[55%] -right-32 w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] bg-blue-600/10 blur-[140px] sm:blur-[180px] rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[700px] h-[250px] sm:h-[400px] bg-cyan-600/10 blur-[130px] sm:blur-[170px] rounded-full" />
      </div>

      {/* Sticky Header Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-slate-800/80 transition-all duration-300 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link
            href="#"
            className="group flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight text-white hover:text-cyan-400 transition"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-black font-extrabold shadow-[0_0_20px_rgba(34,211,238,0.35)] transition shrink-0 text-sm sm:text-base"
            >
              A
            </motion.div>
            <span>
              Akshaya <span className="text-cyan-400">B</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-cyan-400 transition-colors duration-200 py-1.5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Akshaya_B_Resume.pdf"
              className="inline-flex items-center justify-center min-h-[44px] gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-cyan-400/50 hover:bg-slate-800/60 transition duration-200"
            >
              <Download size={14} className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
              <span>Resume</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="inline-flex items-center justify-center min-h-[44px] gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition duration-200"
            >
              Let&apos;s Connect
            </motion.a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex md:hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800/60 transition active:scale-95"
          >
            {mobileMenuOpen ? (
              <X size={22} className="w-5.5 h-5.5 shrink-0" />
            ) : (
              <Menu size={22} className="w-5.5 h-5.5 shrink-0" />
            )}
          </button>
        </div>

        {/* Framer Motion Animated Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden border-b border-slate-800 bg-black/95 backdrop-blur-2xl px-4 py-5 space-y-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between min-h-[44px] px-3.5 py-2.5 rounded-xl text-slate-200 hover:bg-white/5 hover:text-cyan-400 text-sm font-medium transition"
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={14} className="text-slate-500" />
                  </a>
                ))}
              </div>
              <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Akshaya_B_Resume.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full min-h-[46px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-slate-900/60 border border-slate-800 text-white hover:border-cyan-400/50 transition active:scale-[0.98]"
                >
                  <Download size={16} className="w-4 h-4 shrink-0 text-cyan-400" />
                  <span>Download Resume</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full min-h-[46px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition active:scale-[0.98]"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-12 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex items-center justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Title / Role Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-5 shadow-[0_0_15px_rgba(34,211,238,0.15)] max-w-full backdrop-blur-md"
            >
              <Sparkles size={14} className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">AI • FRONTEND • CREATOR</span>
            </motion.div>

            {/* Main Name Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] sm:leading-[1.1]">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
                Akshaya B
              </span>
            </h1>

            {/* Headline Subtitle */}
            <h2 className="mt-3 text-base sm:text-xl md:text-2xl font-semibold text-slate-200">
              CSE (AI &amp; ML) Student at PES University
            </h2>

            {/* Location */}
            <p className="mt-2 text-xs sm:text-sm text-cyan-400/90 font-mono flex items-center justify-center lg:justify-start gap-1.5">
              <MapPin size={14} className="w-3.5 h-3.5 shrink-0" />
              <span>Bangalore Urban, Karnataka, India</span>
            </p>

            {/* Exact Resume Bio */}
            <p className="mt-5 sm:mt-6 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              CSE (AI &amp; ML) Student at PES University | Aspiring Front-End Developer with hands-on experience building full-stack web applications, AI-powered productivity tools, networking systems, and software projects. Experienced with React.js, JavaScript, Python, Node.js, FastAPI, databases, Git/GitHub, and cloud deployment.
            </p>

            {/* Hero CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 sm:gap-5 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="#projects"
                className="inline-flex items-center justify-center min-h-[48px] gap-2.5 bg-cyan-400 hover:bg-cyan-300 text-black px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base transition duration-300 shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] text-center"
              >
                <span>View Projects</span>
                <ChevronRight size={16} className="w-4 h-4 shrink-0" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Akshaya_B_Resume.pdf"
                className="inline-flex items-center justify-center min-h-[48px] gap-2.5 bg-slate-900/60 hover:bg-slate-800/80 text-white border border-slate-800 hover:border-cyan-400/50 px-7 py-3.5 rounded-2xl font-semibold text-sm sm:text-base backdrop-blur-md transition duration-300 text-center"
              >
                <Download size={16} className="w-4 h-4 shrink-0 text-cyan-400" />
                <span>Download Resume</span>
              </motion.a>
            </div>

            {/* Social Badges with Explicit 20px / w-5 h-5 Icons */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5 text-sm text-slate-400 w-full">
              <motion.a
                whileHover={{ y: -2 }}
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center min-h-[44px] px-3 py-2 gap-2 hover:text-cyan-400 transition group rounded-lg hover:bg-white/5"
              >
                <GithubIcon size={20} className="w-5 h-5 shrink-0 text-slate-300 group-hover:text-cyan-400 transition" />
                <span>GitHub</span>
              </motion.a>
              <span className="text-slate-700 hidden sm:inline">•</span>
              <motion.a
                whileHover={{ y: -2 }}
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center min-h-[44px] px-3 py-2 gap-2 hover:text-cyan-400 transition group rounded-lg hover:bg-white/5"
              >
                <LinkedinIcon size={20} className="w-5 h-5 shrink-0 text-slate-300 group-hover:text-cyan-400 transition" />
                <span>LinkedIn</span>
              </motion.a>
              <span className="text-slate-700 hidden sm:inline">•</span>
              <motion.a
                whileHover={{ y: -2 }}
                href={`mailto:${email}`}
                className="inline-flex items-center min-h-[44px] px-3 py-2 gap-2 hover:text-cyan-400 transition group rounded-lg hover:bg-white/5"
              >
                <Mail size={20} className="w-5 h-5 shrink-0 text-slate-300 group-hover:text-cyan-400 transition" />
                <span>Email</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Hero Image Card (No caption below) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="relative group w-full max-w-[260px] sm:max-w-[320px] md:max-w-[360px]">
              {/* Glowing Aura Ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/25 via-blue-500/20 to-purple-600/25 rounded-3xl blur-xl sm:blur-2xl opacity-75 group-hover:opacity-100 transition duration-500" />

              {/* Glassmorphic Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-800/80 group-hover:border-cyan-500/40 bg-slate-900/60 backdrop-blur-md p-2.5 sm:p-3 shadow-2xl transition duration-500">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-950">
                  <Image
                    src="/akshay.jpeg"
                    alt="Akshaya B"
                    fill
                    priority
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 360px"
                    className="object-cover object-center group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative border-t border-slate-800/60 max-w-6xl mx-auto w-full"
      >
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            <GraduationCap size={16} className="w-4 h-4 shrink-0" />
            <span>About Me</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
                Engineering modern web apps, intelligent AI workflows &amp; robust networking systems.
              </h2>
              <p className="mt-4 sm:mt-6 text-slate-300 leading-relaxed text-sm sm:text-base md:text-lg">
                I am a Computer Science Engineering student specializing in AI &amp; ML at PES University. My technical journey spans building responsive front-end applications with React.js, designing autonomous AI assistants with Gemini and FastAPI, and developing performant network systems using multithreaded socket programming and SDN flow controllers.
              </p>
              <p className="mt-3 sm:mt-4 text-slate-400 leading-relaxed text-sm sm:text-base">
                Whether creating intelligent student operating systems like Nexus AI or implementing low-level version control systems in C, I am driven by creating high-impact, performant, and reliable software.
              </p>
            </div>

            {/* Glassmorphic Pillars Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                className="p-5 sm:p-6 rounded-2xl backdrop-blur-md bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3.5">
                  <Layers size={20} className="w-5 h-5 shrink-0" />
                </div>
                <h3 className="font-semibold text-white text-base sm:text-lg">Front-End Focus</h3>
                <p className="text-cyan-400 text-xs sm:text-sm mt-1">React &amp; Responsive UI</p>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  Crafting clean, accessible, and high-performance component architectures.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                className="p-5 sm:p-6 rounded-2xl backdrop-blur-md bg-slate-900/50 border border-slate-800/80 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3.5">
                  <Cpu size={20} className="w-5 h-5 shrink-0" />
                </div>
                <h3 className="font-semibold text-white text-base sm:text-lg">AI &amp; Multi-Agent</h3>
                <p className="text-purple-400 text-xs sm:text-sm mt-1">LLMs &amp; Gemini AI</p>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  Integrating intelligent workflows and multi-agent coordination systems.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                className="p-5 sm:p-6 rounded-2xl backdrop-blur-md bg-slate-900/50 border border-slate-800/80 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3.5">
                  <ShieldCheck size={20} className="w-5 h-5 shrink-0" />
                </div>
                <h3 className="font-semibold text-white text-base sm:text-lg">Systems &amp; Security</h3>
                <p className="text-emerald-400 text-xs sm:text-sm mt-1">SSL/TLS &amp; Sockets</p>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  Building concurrent client-server systems handling ~6,500 req/sec.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                className="p-5 sm:p-6 rounded-2xl backdrop-blur-md bg-slate-900/50 border border-slate-800/80 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3.5">
                  <Network size={20} className="w-5 h-5 shrink-0" />
                </div>
                <h3 className="font-semibold text-white text-base sm:text-lg">Networking &amp; SDN</h3>
                <p className="text-amber-400 text-xs sm:text-sm mt-1">Ryu &amp; OpenFlow</p>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  Implementing dynamic firewall filtering on simulated network topologies.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative bg-black/40 border-t border-slate-800/60 w-full"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
              <Briefcase size={16} className="w-4 h-4 shrink-0" />
              <span>Career Journey</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Experience
            </h2>
            <p className="mt-3 sm:mt-4 text-slate-400 text-sm sm:text-base">
              Hands-on engineering experience, intensive bootcamps, and real-world project deliveries.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative pl-5 sm:pl-8 border-l-2 border-cyan-500/30 py-1">
              <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />

              <motion.div
                whileHover={{ y: -3 }}
                className="p-5 sm:p-8 rounded-3xl backdrop-blur-md bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/50 transition duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800/80">
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-white leading-snug">
                      Front-End Development Bootcamp Student
                    </h3>
                    <p className="text-cyan-400 font-medium text-xs sm:text-sm mt-1">
                      PESU I/O — Bangalore, India
                    </p>
                  </div>
                  <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 w-fit">
                    4 Weeks
                  </span>
                </div>

                <ul className="space-y-3 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 mt-1 font-bold">•</span>
                    <span>
                      Completed an intensive Front-End Development Bootcamp focused on <strong className="text-white">HTML, CSS, JavaScript, and React.js</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 mt-1 font-bold">•</span>
                    <span>
                      Built responsive web applications and implemented interactive UI components; gained hands-on experience with <strong className="text-white">Git and GitHub</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 mt-1 font-bold">•</span>
                    <span>
                      Engineered a portfolio project using React.js, HTML, and CSS, achieving <strong className="text-white">full functionality across 100% of tested devices and browsers</strong> within a 4-week sprint cycle.
                    </span>
                  </li>
                </ul>

                <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-lg text-xs bg-slate-800/50 text-slate-300 border border-slate-700/60">React.js</span>
                  <span className="px-2.5 py-1 rounded-lg text-xs bg-slate-800/50 text-slate-300 border border-slate-700/60">HTML5 / CSS3</span>
                  <span className="px-2.5 py-1 rounded-lg text-xs bg-slate-800/50 text-slate-300 border border-slate-700/60">JavaScript</span>
                  <span className="px-2.5 py-1 rounded-lg text-xs bg-slate-800/50 text-slate-300 border border-slate-700/60">Responsive Design</span>
                  <span className="px-2.5 py-1 rounded-lg text-xs bg-slate-800/50 text-slate-300 border border-slate-700/60">Git &amp; GitHub</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative border-t border-slate-800/60 w-full"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
              <FolderGit2 size={16} className="w-4 h-4 shrink-0" />
              <span>Engineered Works</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Featured Projects
            </h2>
            <p className="mt-3 sm:mt-4 text-slate-400 text-sm sm:text-base">
              Showcasing software systems across AI agents, high-concurrency socket programming, SDN security, and modern web applications.
            </p>
          </div>

          {/* Glassmorphic Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -5, scale: 1.01 }}
                className={`group relative rounded-3xl backdrop-blur-md bg-slate-900/50 border border-slate-800/80 ${project.glowColor} p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${project.badgeColor}`}
                    >
                      {project.category}
                    </span>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="min-h-[38px] min-w-[38px] flex items-center justify-center p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-slate-800 hover:border-cyan-400/50 transition shrink-0"
                    >
                      <GithubIcon size={16} className="w-4 h-4 shrink-0" />
                    </motion.a>
                  </div>

                  <p className="text-[11px] font-medium text-slate-400 mb-1.5">
                    {project.type}
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2.5 mb-3.5">
                    {project.description}
                  </p>

                  {/* Bullet points from resume */}
                  <ul className="space-y-1.5 mb-4 text-xs text-slate-400 leading-relaxed">
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-slate-800/80 mb-3.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-black/60 border border-slate-800 text-slate-300"
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
                    className="inline-flex items-center min-h-[44px] gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition group/link"
                  >
                    <span>View Repository</span>
                    <ArrowUpRight size={14} className="w-3.5 h-3.5 shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative bg-black/40 border-t border-slate-800/60 w-full"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
              <Code2 size={16} className="w-4 h-4 shrink-0" />
              <span>Technical Arsenal</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Skills &amp; Technologies
            </h2>
            <p className="mt-3 sm:mt-4 text-slate-400 text-sm sm:text-base">
              A categorized summary of programming languages, frameworks, systems, databases, and development tooling.
            </p>
          </div>

          {/* Categorized Glassmorphic Skill Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                whileHover={{ y: -5, scale: 1.01 }}
                className={`p-5 sm:p-7 rounded-3xl backdrop-blur-md bg-slate-900/50 border ${category.borderColor} transition-all duration-300 flex flex-col justify-between shadow-lg`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800/80">
                    <div className="p-2 rounded-xl bg-white/5 border border-slate-800">
                      {category.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">{category.title}</h3>
                  </div>

                  {/* Skill Badges / Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-800/50 border border-slate-700/60 text-slate-300 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10 transition duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        id="education"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative border-t border-slate-800/60 w-full"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
              <BookOpen size={16} className="w-4 h-4 shrink-0" />
              <span>Academic Background</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Education
            </h2>
            <p className="mt-3 sm:mt-4 text-slate-400 text-sm sm:text-base">
              Formal academic credentials and engineering specialization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.01 }}
                className="p-5 sm:p-7 rounded-3xl backdrop-blur-md bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/50 transition duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className="text-xs font-semibold text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                      {edu.period}
                    </span>
                    <GraduationCap size={16} className="w-4 h-4 shrink-0 text-slate-400" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-300 mb-2.5">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Events & Hackathons Showcase */}
      <motion.section
        id="events"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative bg-black/40 border-t border-slate-800/60 w-full"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
              <Calendar size={16} className="w-4 h-4 shrink-0" />
              <span>Real-World Impact</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Hackathons &amp; Activities
            </h2>
            <p className="mt-3 sm:mt-4 text-slate-400 text-sm sm:text-base">
              National hackathons, generative AI academies, and project buildathons.
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {/* Event 1 - Dreamflow */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-3xl backdrop-blur-md bg-slate-900/50 border border-slate-800/80 overflow-hidden hover:border-cyan-500/50 transition shadow-xl"
            >
              <div className="relative w-full h-[200px] sm:h-[320px] md:h-[420px]">
                <Image
                  src="/dreamflow-event.png"
                  alt="Dreamflow Buildathon"
                  fill
                  sizes="(max-width: 768px) 100vw, 1100px"
                  className="object-cover"
                />
              </div>
              <div className="p-5 sm:p-8 md:p-10">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <span className="text-xs font-semibold text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    Buildathon 2025
                  </span>
                  <span className="text-xs text-slate-400">Shipped MVP</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  Dreamflow Buildathon
                </h3>
                <p className="mt-3 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                  Collaborated intensively to design, architect, and ship a fully functional web application prototype during Dreamflow Buildathon 2025.
                </p>
              </div>
            </motion.div>

            {/* Event 2 - Google Cloud Gen AI Academy */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-3xl backdrop-blur-md bg-slate-900/50 border border-slate-800/80 overflow-hidden hover:border-purple-500/50 transition shadow-xl"
            >
              <div className="relative w-full h-[200px] sm:h-[320px] md:h-[420px]">
                <Image
                  src="/event2.png"
                  alt="Google Cloud Gen AI Academy"
                  fill
                  sizes="(max-width: 768px) 100vw, 1100px"
                  className="object-cover"
                />
              </div>
              <div className="p-5 sm:p-8 md:p-10">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <span className="text-xs font-semibold text-purple-400 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                    APAC 2026 Cohort
                  </span>
                  <span className="text-xs text-slate-400">Google Cloud</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  Google Cloud Gen AI Academy APAC 2026
                </h3>
                <p className="mt-3 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                  Engineered multi-agent AI workflows and scaled Nexus AI using Google Cloud generative AI infrastructure, prompt orchestration, and intelligent agent pipelines.
                </p>
              </div>
            </motion.div>

            {/* Event 3 - Nexus AI Presentation */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-3xl backdrop-blur-md bg-slate-900/50 border border-slate-800/80 overflow-hidden hover:border-cyan-500/50 transition shadow-xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-black/80 p-2">
                <div className="relative h-[180px] sm:h-[240px] md:h-[280px] rounded-xl overflow-hidden">
                  <Image src="/event3-1.png" alt="Nexus AI Showcase 1" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="relative h-[180px] sm:h-[240px] md:h-[280px] rounded-xl overflow-hidden">
                  <Image src="/event3-2.png" alt="Nexus AI Showcase 2" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="relative h-[180px] sm:h-[240px] md:h-[280px] rounded-xl overflow-hidden">
                  <Image src="/event3-3.png" alt="Nexus AI Showcase 3" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
                </div>
              </div>
              <div className="p-5 sm:p-8 md:p-10">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <span className="text-xs font-semibold text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    Academic Cohort 1
                  </span>
                  <span className="text-xs text-slate-400">Agentic Hackathon</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  Nexus AI – Digital Senior Presentation
                </h3>
                <p className="mt-3 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                  Presented our autonomous student assistant to panels and peers, demonstrating automated academic workload distribution, deadline parsing, and Gemini AI query workflows.
                </p>
                <a
                  href="https://medium.com/@manasviagarkar/beyond-chatbots-building-an-autonomous-student-os-with-the-senior-top-protocol-077bff7f3d68"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center min-h-[44px] gap-2 mt-4 text-xs sm:text-sm font-semibold text-purple-400 hover:text-purple-300 transition"
                >
                  <span>Read Medium Architecture Breakdown</span>
                  <ArrowUpRight size={16} className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </motion.div>

            {/* Event 4 - LaunchED Internship */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-3xl backdrop-blur-md bg-slate-900/50 border border-slate-800/80 overflow-hidden hover:border-amber-500/50 transition shadow-xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-black/80 p-2">
                <div className="relative h-[180px] sm:h-[240px] md:h-[280px] rounded-xl overflow-hidden">
                  <Image src="/event4-1.png" alt="LaunchED 1" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="relative h-[180px] sm:h-[240px] md:h-[280px] rounded-xl overflow-hidden">
                  <Image src="/event4-2.png" alt="LaunchED 2" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="relative h-[180px] sm:h-[240px] md:h-[280px] rounded-xl overflow-hidden">
                  <Image src="/event4-3.png" alt="LaunchED 3" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
                </div>
              </div>
              <div className="p-5 sm:p-8 md:p-10">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <span className="text-xs font-semibold text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                    Mentorship &amp; Internship
                  </span>
                  <span className="text-xs text-slate-400">LaunchED Global</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  Web Development Mentorship Program
                </h3>
                <p className="mt-3 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                  Successfully completed comprehensive frontend training covering responsive web architectures, React.js ecosystem patterns, component lifecycle management, and production workflows.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative border-t border-slate-800/60 w-full"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4">
            <Mail size={16} className="w-4 h-4 shrink-0" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 sm:mb-6">
            Let&apos;s Build Something <span className="text-cyan-400">Extraordinary</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-12">
            I am always open to discussing new engineering opportunities, internships, open-source collaborations, or exciting software projects.
          </p>

          {/* Quick Contact Card */}
          <div className="p-5 sm:p-8 md:p-10 rounded-3xl backdrop-blur-xl bg-slate-900/50 border border-slate-800/80 max-w-2xl mx-auto w-full shadow-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-black/60 border border-slate-800 mb-6 sm:mb-8 w-full">
              <div className="flex items-center gap-3 text-left w-full sm:w-auto">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail size={20} className="w-5 h-5 shrink-0" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] text-slate-400">Direct Email</p>
                  <p className="text-xs sm:text-sm md:text-base font-mono font-medium text-white truncate select-all">
                    {email}
                  </p>
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleCopyEmail}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/15 border border-slate-800 text-slate-200 hover:text-white transition cursor-pointer shrink-0"
              >
                {copiedEmail ? (
                  <>
                    <Check size={16} className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} className="w-4 h-4 shrink-0" />
                    <span>Copy Email</span>
                  </>
                )}
              </motion.button>
            </div>

            {/* Social Connection Buttons with Explicit Links and 20px Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href={`mailto:${email}`}
                className="flex items-center justify-center min-h-[48px] gap-2.5 px-5 py-3.5 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-sm transition shadow-[0_0_25px_rgba(34,211,238,0.3)]"
              >
                <Mail size={18} className="w-4.5 h-4.5 shrink-0" />
                <span>Send Email</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center min-h-[48px] gap-2.5 px-5 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-white text-sm font-semibold transition"
              >
                <LinkedinIcon size={18} className="w-4.5 h-4.5 shrink-0 text-cyan-400" />
                <span>LinkedIn</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center min-h-[48px] gap-2.5 px-5 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-white text-sm font-semibold transition"
              >
                <GithubIcon size={18} className="w-4.5 h-4.5 shrink-0 text-cyan-400" />
                <span>GitHub</span>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-black/80 w-full">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-xs text-slate-400 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">Akshaya B</span>
            <span>•</span>
            <span>AI • Frontend • Creator</span>
          </div>

          <p>© {new Date().getFullYear()} Akshaya B. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#about" className="hover:text-cyan-400 transition py-1">About</a>
            <a href="#experience" className="hover:text-cyan-400 transition py-1">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition py-1">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition py-1">Skills</a>
            <a href="#education" className="hover:text-cyan-400 transition py-1">Education</a>
            <a href="#contact" className="hover:text-cyan-400 transition py-1">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}