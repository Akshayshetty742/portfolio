export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative scroll-smooth">

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/20 blur-[150px] rounded-full"></div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">

        <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">

          <h1 className="text-3xl font-bold">
            Akshay
          </h1>

          <div className="hidden md:flex gap-10 text-sm text-gray-300">

            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#certificates" className="hover:text-cyan-400 transition">
              Certificates
            </a>

            <a href="#events" className="hover:text-cyan-400 transition">
              Events
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">

        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <div>

            <p className="text-cyan-400 tracking-[0.3em] mb-6 text-sm">
              AI • FRONTEND • CREATOR
            </p>

            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              Hi, I'm
              <br />

              <span className="text-cyan-400">
                Akshay
              </span>
            </h1>

            <p className="mt-8 text-gray-400 text-lg leading-9 max-w-2xl">
              Computer Science student specializing in AI & ML at PES University.
              Passionate about frontend development, AI tools, hackathons,
              and building futuristic digital experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-6">

              <a
                href="#projects"
                className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 hover:shadow-[0_0_40px_#22d3ee] transition duration-300"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download
                className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition duration-300"
              >
                Download Resume
              </a>

            </div>

            <div className="mt-12 flex gap-8 text-gray-400">

              <a
                href="https://github.com/Akshayshetty742"
                target="_blank"
                className="hover:text-cyan-400 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/akshay-shetty-618b63269"
                target="_blank"
                className="hover:text-cyan-400 transition"
              >
                LinkedIn
              </a>

              <a
                href="mailto:shettyakshay742@gmail.com"
                className="hover:text-cyan-400 transition"
              >
                Email
              </a>

            </div>

          </div>

          {/* Right */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 bg-cyan-400/20 blur-[100px] rounded-full"></div>

              <img
                src="/akshay.jpeg"
                alt="Akshay"
                className="relative z-10 w-[350px] h-[350px] object-cover rounded-full border-4 border-cyan-400/30 shadow-[0_0_60px_rgba(34,211,238,0.3)]"
              />

            </div>

          </div>

        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-32"
      >

        <div className="grid md:grid-cols-2 gap-20">

          <div>

            <p className="text-cyan-400 tracking-[0.2em] mb-4">
              ABOUT ME
            </p>

            <h2 className="text-5xl font-bold leading-tight">
              Passionate About Building Modern Digital Experiences
            </h2>

          </div>

          <div>

            <p className="text-gray-400 text-lg leading-9">
              I enjoy building modern web applications, experimenting
              with AI tools, participating in hackathons, and creating
              impactful user experiences.
            </p>

            <p className="text-gray-400 text-lg leading-9 mt-6">
              My focus is combining modern frontend development with
              AI-powered solutions to create futuristic digital products.
            </p>

          </div>

        </div>

      </section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-32"
      >

        <div className="text-center mb-20">

          <p className="text-cyan-400 tracking-[0.2em] mb-4">
            SKILLS
          </p>

          <h2 className="text-5xl font-bold">
            Technologies I Work With
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-6">
              Frontend
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>React.js</p>
              <p>Next.js</p>
              <p>Tailwind CSS</p>
              <p>JavaScript</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-6">
              AI & Tools
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>Python</p>
              <p>Machine Learning</p>
              <p>OpenAI APIs</p>
              <p>Firebase</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-6">
              Other Skills
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>Git & GitHub</p>
              <p>Responsive Design</p>
              <p>UI/UX Design</p>
              <p>Vercel</p>
            </div>
          </div>

        </div>

      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-32"
      >

        <div className="text-center mb-20">

          <p className="text-cyan-400 tracking-[0.2em] mb-4">
            PROJECTS
          </p>

          <h2 className="text-5xl font-bold">
            Featured Projects
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Nexus AI */}
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400 hover:-translate-y-3 transition duration-300">

            <div className="h-60 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 flex items-center justify-center">

              <h3 className="text-4xl font-bold text-cyan-400">
                Nexus AI
              </h3>

            </div>

            <div className="p-8">

              <div className="flex items-center justify-between flex-wrap gap-4">

                <h3 className="text-3xl font-bold">
                  Nexus AI – Student Life OS
                </h3>

                <span className="text-sm text-gray-400">
                  Feb 2026 - Mar 2026
                </span>

              </div>

              <p className="text-cyan-400 mt-3">
                Team Project
              </p>

              <p className="text-gray-400 mt-6 leading-8">
                Built backend APIs using Node.js and Express for task scheduling
                and automation. Integrated Gemini AI to generate personalized
                study plans from syllabus input.
              </p>

              <ul className="mt-6 text-gray-400 space-y-3 leading-8">

                <li>
                  • Developed smart calendar, auto-rescheduler, and habit tracking
                </li>

                <li>
                  • Collaborated using Git and structured branching workflows
                </li>

                <li>
                  • Built centralized student productivity platform with AI integration
                </li>

              </ul>

              <a
                href="https://github.com/Akshayshetty742/nexus-ai-os"
                target="_blank"
                className="inline-block mt-8 text-cyan-400 hover:text-cyan-300 transition"
              >
                View Project →
              </a>

            </div>

          </div>

          {/* JourneyHub */}
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-pink-400 hover:-translate-y-3 transition duration-300">

            <div className="h-60 bg-gradient-to-br from-purple-500/20 to-pink-500/10 flex items-center justify-center">

              <h3 className="text-4xl font-bold text-pink-400">
                JourneyHub
              </h3>

            </div>

            <div className="p-8">

              <div className="flex items-center justify-between flex-wrap gap-4">

                <h3 className="text-3xl font-bold">
                  JourneyHub – Travel Booking Web App
                </h3>

                <span className="text-sm text-gray-400">
                  May 2025 - Aug 2025
                </span>

              </div>

              <p className="text-pink-400 mt-3">
                Personal Project
              </p>

              <p className="text-gray-400 mt-6 leading-8">
                Developed responsive travel website using HTML, CSS, and JavaScript
                with smooth UI and mobile responsiveness.
              </p>

              <ul className="mt-6 text-gray-400 space-y-3 leading-8">

                <li>
                  • Designed interactive travel packages and pricing UI
                </li>

                <li>
                  • Integrated booking and payment processing workflows
                </li>

                <li>
                  • Deployed using Netlify and managed code using GitHub
                </li>

              </ul>

              <a
                href="https://journeyhub-akshaya.netlify.app/"
                target="_blank"
                className="inline-block mt-8 text-pink-400 hover:text-pink-300 transition"
              >
                View Project →
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* Certificates */}
      <section
        id="certificates"
        className="max-w-6xl mx-auto px-6 py-32"
      >

        <div className="text-center mb-20">

          <p className="text-cyan-400 tracking-[0.2em] mb-4">
            CERTIFICATES
          </p>

          <h2 className="text-5xl font-bold">
            Certifications & Achievements
          </h2>

        </div>

        <div className="space-y-8">

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">

            <h3 className="text-2xl font-semibold">
              Frontend Developer Bootcamp
            </h3>

            <p className="text-gray-400 mt-3">
              Completed intensive frontend development bootcamp at PESU I/O.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">

            <h3 className="text-2xl font-semibold">
              AI & Machine Learning Certification
            </h3>

            <p className="text-gray-400 mt-3">
              Learned machine learning concepts and AI workflows.
            </p>

          </div>

        </div>

      </section>

      {/* Events */}
      <section
        id="events"
        className="max-w-6xl mx-auto px-6 py-32"
      >

        <div className="text-center mb-20">

          <p className="text-cyan-400 tracking-[0.2em] mb-4">
            EVENTS
          </p>

          <h2 className="text-5xl font-bold">
            Hackathons & Events
          </h2>

        </div>

        <div className="space-y-8">

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">

            <h3 className="text-2xl font-semibold">
              Hackathon Participant
            </h3>

            <p className="text-gray-400 mt-3">
              Participated in AI and web development hackathons focused
              on building innovative digital solutions.
            </p>

          </div>

        </div>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-32 text-center"
      >

        <p className="text-cyan-400 tracking-[0.2em] mb-4">
          CONTACT
        </p>

        <h2 className="text-5xl font-bold mb-8">
          Let’s Build Something Amazing
        </h2>

        <p className="text-gray-400 text-lg leading-9">
          Interested in collaborations, internships, or exciting projects?
          Let’s connect together.
        </p>

        <div className="mt-12 flex justify-center gap-6 flex-wrap">

          <a
            href="mailto:shettyakshay742@gmail.com"
            className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Akshayshetty742"
            target="_blank"
            className="border border-white/20 px-8 py-4 rounded-2xl"
          >
            GitHub
          </a>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        © 2026 Akshay. Built with Next.js & Tailwind CSS.
      </footer>

    </main>
  );
}