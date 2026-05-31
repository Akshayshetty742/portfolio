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

          <div className=" gap-10 text-sm text-gray-300">
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
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div>
            <p className="text-cyan-400 tracking-[0.3em] mb-6 text-sm">
              AI • FRONTEND • CREATOR
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold leading-tight">
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

          {/* Hero Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/20 blur-[100px] rounded-full"></div>
              <img
                src="/akshay.jpeg"
                alt="Akshay"
              className="relative z-10 w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px]"
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Passion+ate About Building Modern Digital Experiences
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
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400 transition">
           
            <div className="p-8">
              <h3 className="text-3xl font-bold">
                Nexus AI – Student Life OS
              </h3>
              <p className="text-cyan-400 mt-3">
                Team Project • Feb 2026 - Mar 2026
              </p>
              <p className="text-gray-400 mt-6 leading-8">
                Built backend APIs using Node.js and Express for task scheduling
                and automation with Gemini AI integrations.
              </p>
              <a
                href="https://medium.com/@manasviagarkar/beyond-chatbots-building-an-autonomous-student-os-with-the-senior-top-protocol-077bff7f3d68"
                target="_blank"
                rel="noopener noreferrer"
                
                className="inline-block mt-8 text-cyan-400"
              >
                View Project →
              </a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-pink-400 transition">
            
            
            <div className="p-8">
              <h3 className="text-3xl font-bold">
                JourneyHub – Travel Booking Web App
              </h3>
              <p className="text-pink-400 mt-3">
                Personal Project • May 2025 - Aug 2025
              </p>
              <p className="text-gray-400 mt-6 leading-8">
                Responsive travel booking platform using HTML, CSS,
                JavaScript and modern UI workflows.
              </p>
              <a
                href="https://journeyhub-akshaya.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                
                className="inline-block mt-8 text-pink-400"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              className="bg-white/5 border border-white/10 p-8 rounded-3xl"
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
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
            <img
              src="/dreamflow-event.png"
              alt="Dreamflow Buildathon"
              className="w-full h-[250px] sm:h-[400px] md:h-[550px] object-cover"
            />
            <div className="p-10">
              <h3 className="text-4xl font-bold">
                Dreamflow Buildathon
              </h3>
              <p className="text-gray-400 mt-8 text-lg leading-9">
                Successfully completed and shipped a functional application during
                Dreamflow Buildathon 2025.
              </p>
            </div>
          </div>

          {/* Event 2 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
            <img
              src="/event2.png"
              alt="Google Cloud Gen AI Academy"
              className="w-full h-[550px] object-cover"
            />
            <div className="p-10">
              <h3 className="text-4xl font-bold">
                Google Cloud Gen AI Academy APAC 2026
              </h3>
              <p className="text-gray-400 mt-8 text-lg leading-9">
                Worked on scaling Nexus AI and building multi-agent AI workflows
                during Google Cloud Gen AI Academy.
              </p>
            </div>
          </div>

          {/* Event 3 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-black">
              <img
                src="/event3-1.png"
                alt="Event 3"
                className="w-full h-[320px] object-cover"
              />
              <img
                src="/event3-2.png"
                alt="Event 3"
                className="w-full h-[320px] object-cover"
              />
              <img
                src="/event3-3.png"
                alt="Event 3"
                className="w-full h-[320px] object-cover"
              />
            </div>

            <div className="p-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Nexus AI – Digital Senior
              </h3>
              <p className="text-gray-400 mt-8 text-lg leading-9">
                Built during the Gen AI Academic Cohort 1 Hackathon,
                Nexus AI is a high-performance Agentic OS acting as a
                Digital Senior for students.
              </p>
              <a
                href="https://lnkd.in/dZkjcQtZ"
                target="_blank"
                className="inline-block mt-8 text-purple-400"
              >
                Read Full Medium Breakdown →
              </a>
            </div>
          </div>

          {/* Event 4 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-orange-400 transition duration-300">
            {/* Images */}
            <div className="grid md:grid-cols-3 gap-2 bg-black">
              <img
                src="/event4-1.png"
                alt="LaunchED Event"
                className="w-full h-[320px] object-cover"
              />
              <img
                src="/event4-2.png"
                alt="LaunchED Event"
                className="w-full h-[320px] object-cover"
               />
              <img
                src="/event4-3.png"
                alt="LaunchED Event"
                className="w-full h-[320px] object-cover"
              />
            </div>

            <div className="p-10"> 
              <p className="text-orange-400 tracking-[0.2em] text-sm mb-3">
                WEB DEVELOPMENT MENTORSHIP & INTERNSHIP
              </p>
              <h3 className="text-4xl font-bold">
                LaunchED Global Internship Program
              </h3>
              <p className="text-gray-400 mt-8 text-lg leading-9">
                Successfully completed the Web Development Mentorship &
                Internship Program by LaunchED Global.
                This hands-on experience helped strengthen frontend
                development skills through real-world projects,
                responsive UI development, React.js workflows,
                and problem-solving practices.
              </p>

              <div className="mt-10 grid md:grid-cols-2 gap-6">
                <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                  <h4 className="text-orange-400 font-semibold text-lg mb-4">
                    Skills Gained
                  </h4>
                  <ul className="space-y-3 text-gray-400 leading-7">
                    <li>💻 HTML, CSS & JavaScript</li>
                    <li>⚛️ React.js frontend development</li>
                    <li>📱 Responsive UI workflows</li>
                    <li>🚀 Real-world web development practices</li>
                  </ul>
                </div>

                <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                  <h4 className="text-orange-400 font-semibold text-lg mb-4">
                    Experience Highlights
                  </h4>
                  <ul className="space-y-3 text-gray-400 leading-7">
                    <li>🌍 Worked under expert mentorship</li>
                    <li>🧠 Improved technical foundation</li>
                    <li>🔥 Strengthened problem-solving abilities</li>
                    <li>🎯 Built interactive web applications</li>
                  </ul>
                </div>
              </div>
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