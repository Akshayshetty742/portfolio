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

      {/* Hero */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">

        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-20 items-center">

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

          {/* Image */}
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

            <img
              src="/nexus.png"
              alt="Nexus AI"
              className="h-60 w-full object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold">
                Nexus AI – Student Life OS
              </h3>

              <p className="text-cyan-400 mt-3">
                Team Project • Feb 2026 - Mar 2026
              </p>

              <p className="text-gray-400 mt-6 leading-8">
                Built backend APIs using Node.js and Express for task scheduling
                and automation. Integrated Gemini AI to generate personalized
                study plans from syllabus input.
              </p>

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

            <img
              src="/journeyhub.png"
              alt="JourneyHub"
              className="h-60 w-full object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold">
                JourneyHub – Travel Booking Web App
              </h3>

              <p className="text-pink-400 mt-3">
                Personal Project • May 2025 - Aug 2025
              </p>

              <p className="text-gray-400 mt-6 leading-8">
                Developed responsive travel website using HTML, CSS, and JavaScript
                with smooth UI and mobile responsiveness.
              </p>

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

        <div className="grid md:grid-cols-2 gap-8">

          {[
            "Machine Learning with Python",
            "Getting Started with Artificial Intelligence",
            "Introduction to Generative AI",
            "Web Development",
            "Frontend Developer Bootcamp",
            "Python (Basic)"
          ].map((cert, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-cyan-400 transition"
            >
              <h3 className="text-2xl font-bold">
                {cert}
              </h3>

              <p className="text-gray-400 mt-4">
                Professional Certification
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* Events */}
      <section
        id="events"
        className="max-w-6xl mx-auto px-6 py-32"
      >

        <div className="text-center mb-20">

          <p className="text-cyan-400 tracking-[0.2em] mb-4">
            EVENTS & EXPERIENCES
          </p>

          <h2 className="text-5xl font-bold">
            Hackathons & Tech Events
          </h2>

        </div>

        <div className="space-y-16">

          {/* Event 1 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400 transition">

            <img
              src="/dreamflow-event.png"
              alt="Dreamflow Buildathon"
              className="w-full h-[550px] object-cover"
            />

            <div className="p-10">

              <p className="text-cyan-400 tracking-[0.2em] text-sm mb-3">
                BUILDATHON 2025
              </p>

              <h3 className="text-4xl font-bold">
                Dreamflow Buildathon
              </h3>

              <p className="text-gray-400 mt-8 text-lg leading-9">
                Successfully completed and shipped a functional application during
                Dreamflow Buildathon 2025. Improved rapid development,
                debugging, deployment, and UI/UX workflows.
              </p>

            </div>

          </div>

          {/* Event 2 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-green-400 transition">

            <img
              src="/event2.png"
              alt="Google Cloud Gen AI Academy"
              className="w-full h-[550px] object-cover"
            />

            <div className="p-10">

              <p className="text-green-400 tracking-[0.2em] text-sm mb-3">
                GOOGLE CLOUD • GEN AI ACADEMY
              </p>

              <h3 className="text-4xl font-bold">
                Google Cloud Gen AI Academy APAC 2026
              </h3>

              <p className="text-gray-400 mt-8 text-lg leading-9">
                Completed Google Cloud Gen AI Academy APAC 2026 powered by Hack2skill.
                Worked on scaling Nexus AI, a multi-agent AI system for students,
                focusing on backend architecture and intelligent workflows.
              </p>

              <a
                href="https://lnkd.in/gZiiT2ii"
                target="_blank"
                className="inline-block mt-8 text-green-400 hover:text-green-300 transition"
              >
                View Build Breakdown →
              </a>

            </div>

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