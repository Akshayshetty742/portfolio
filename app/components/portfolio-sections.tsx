import Image from "next/image";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import {
  additionalProjects,
  education,
  featuredProjects,
  milestones,
  profile,
  skillGroups,
} from "../portfolio-data";
import type { ProjectScreenshot, ProjectVisualKind } from "../portfolio-data";
import { CopyEmailButton } from "./copy-email-button";
import { NeuralField } from "./neural-field";

function SocialMark({ network }: { network: "github" | "linkedin" }) {
  if (network === "github") {
    return (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
        <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.77 2.25 3.18 1.6.1-.73.4-1.23.7-1.51-2.5-.29-5.12-1.25-5.12-5.57 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.43.1-2.98 0 0 .95-.3 3.08 1.16a10.7 10.7 0 0 1 5.61 0c2.14-1.46 3.08-1.16 3.08-1.16.61 1.55.23 2.69.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.33-2.63 5.28-5.14 5.56.4.35.75 1.03.75 2.08v3.1c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V8.99h3.56v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0Z" />
    </svg>
  );
}

function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-heading__eyebrow">
        <span>{index}</span>
        <span className="section-heading__rule" aria-hidden="true" />
        {eyebrow}
      </div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function RepositoryLink({ href }: { href: string }) {
  return (
    <a className="text-link" href={href} target="_blank" rel="noopener noreferrer">
      Explore repository <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}

export function HeroSection() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__grain" aria-hidden="true" />
      <div className="hero__coordinates" aria-hidden="true">
        <span>PORTFOLIO / 2026</span>
        <span>12°58&apos; N&nbsp; 77°34&apos; E</span>
      </div>
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__availability">
            <span className="status-dot" />
            CSE (AI &amp; ML) STUDENT · PES UNIVERSITY
          </p>
          <h1 id="hero-title">
            <span>Building</span>
            <span className="hero__title-accent">machine</span>
            <span>intelligence<span className="hero__period">.</span></span>
          </h1>
          <p className="hero__intro">
            I&apos;m <strong>Akshaya B</strong>, a CSE (AI &amp; ML) student at
            PES University, Bengaluru. I explore applied machine learning and
            build clear, responsive interfaces around useful ideas.
          </p>
          <p className="hero__location">
            <MapPin size={15} aria-hidden="true" />
            PES UNIVERSITY <span aria-hidden="true">/</span> CLASS OF 2028
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              Explore selected work <ArrowDownRight size={17} aria-hidden="true" />
            </a>
            <a
              className="button button--quiet"
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              download="Akshaya_B_Resume.pdf"
            >
              Download résumé <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="hero__socials" aria-label="Social links">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <SocialMark network="github" /> GitHub
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <SocialMark network="linkedin" /> LinkedIn
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <NeuralField />
          <div className="portrait-frame">
            <Image
              src="/akshay.jpeg"
              alt="Portrait of Akshaya B"
              width={1037}
              height={1600}
              sizes="(max-width: 760px) 78vw, (max-width: 1100px) 42vw, 430px"
              className="portrait-frame__image"
              fetchPriority="high"
            />
            <div className="portrait-frame__shade" aria-hidden="true" />
            <p className="portrait-frame__caption">
              <span>AKSHAYA B</span>
              <span>AI / ML · FRONTEND</span>
            </p>
          </div>
          <div className="hero__visual-index" aria-hidden="true">
            <span>01</span>
            <span className="hero__visual-line" />
            <span>LEARNING / BUILDING / REPEATING</span>
          </div>
        </div>
      </div>
      <div className="hero__baseline">
        <span>AKSHAYA B</span>
        <span>AI / ML&nbsp; · &nbsp;FRONTEND</span>
        <a href="#about">SCROLL TO EXPLORE <ArrowDown size={13} aria-hidden="true" /></a>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="section__inner">
        <SectionHeading
          index="01"
          eyebrow="A little about me"
          title="Curiosity, made practical."
        />
        <div className="about-layout">
          <p className="about-layout__lead">
            I&apos;m a <span>CSE (AI &amp; ML)</span> student at PES University,
            Bengaluru — interested in how intelligent systems become useful
            software.
          </p>
          <div className="about-layout__body">
            <p>
              I like understanding how things work, trying ideas in code, and
              turning what I learn into useful software. My projects range from
              payment-risk and garment-deformation experiments to command
              routing and network systems.
            </p>
            <p>
              Alongside AI/ML, I care about the frontend: making interfaces
              readable, responsive, and pleasant to use. I&apos;m still
              learning, building, and looking for the next problem worth
              exploring.
            </p>
            <a className="text-link" href="#milestones">
              Education &amp; milestones <ArrowDownRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="about-note">
          <Sparkles size={18} aria-hidden="true" />
          <div>
            <span>WORKING CURIOSITIES</span>
            <p>Machine learning <i /> interface craft <i /> systems thinking</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({
  screenshot,
  visual,
  compact = false,
}: {
  screenshot: ProjectScreenshot | null;
  visual?: ProjectVisualKind;
  compact?: boolean;
}) {
  if (!screenshot && !visual) return null;

  return (
    <figure
      className={[
        "project-media",
        compact ? "project-media--compact" : "",
        visual ? "project-media--concept" : "",
      ].filter(Boolean).join(" ")}
    >
      {screenshot ? (
        <Image
          className="project-media__image"
          src={screenshot.src}
          alt={screenshot.alt}
          width={screenshot.width}
          height={screenshot.height}
          sizes={compact ? "(max-width: 650px) 64px, 96px" : "(max-width: 900px) 100vw, 48vw"}
        />
      ) : visual ? (
        <ProjectIllustration kind={visual} />
      ) : null}
    </figure>
  );
}

function ProjectIllustration({ kind }: { kind: ProjectVisualKind }) {
  const labels: Record<ProjectVisualKind, string> = {
    "movie-booking":
      "Concept illustration, not a screenshot: a movie ticket beside a database for MovieBook.",
    assistant:
      "Concept illustration of a command router connecting task, note, and event handlers.",
    leaderboard:
      "Concept illustration of clients connected to a TLS-protected leaderboard server.",
  };

  return (
    <div className={`project-concept project-concept--${kind}`} role="img" aria-label={labels[kind]}>
      {kind === "movie-booking" && (
        <svg viewBox="0 0 520 220" aria-hidden="true">
          <path className="concept-line" d="M111 110h82m130 0h75" />
          <path className="concept-ticket" d="M94 62h218v31a17 17 0 0 0 0 34v31H94v-31a17 17 0 0 0 0-34V62Z" />
          <path className="concept-ticket__perforation" d="M251 72v76" />
          <circle className="concept-ticket__hole" cx="119" cy="83" r="4" />
          <circle className="concept-ticket__hole" cx="119" cy="137" r="4" />
          <path className="concept-film" d="M145 91h49l14 14v26h-63V91Zm49 0v15h14" />
          <path className="concept-film__line" d="M157 117h39m-39 8h27" />
          <text className="concept-label" x="266" y="105">MOVIE</text>
          <text className="concept-label concept-label--small" x="266" y="123">BOOKING</text>
          <path className="concept-database" d="M399 77c0-11 20-20 45-20s45 9 45 20v66c0 11-20 20-45 20s-45-9-45-20V77Z" />
          <ellipse className="concept-database__rim" cx="444" cy="77" rx="45" ry="20" />
          <path className="concept-database__line" d="M399 109c0 11 20 20 45 20s45-9 45-20" />
          <text className="concept-label concept-label--db" x="444" y="106">DATA</text>
        </svg>
      )}
      {kind === "assistant" && (
        <svg viewBox="0 0 160 100" aria-hidden="true">
          <path className="concept-line" d="M80 50 34 23m46 27 46-27M80 50v29" />
          <rect className="concept-node concept-node--core" x="57" y="37" width="46" height="26" rx="7" />
          <text className="concept-label concept-label--center" x="80" y="54">ROUTE</text>
          <rect className="concept-node" x="9" y="10" width="50" height="25" rx="6" />
          <text className="concept-label concept-label--center" x="34" y="26">TASK</text>
          <rect className="concept-node" x="101" y="10" width="50" height="25" rx="6" />
          <text className="concept-label concept-label--center" x="126" y="26">NOTE</text>
          <rect className="concept-node" x="55" y="69" width="50" height="25" rx="6" />
          <text className="concept-label concept-label--center" x="80" y="85">EVENT</text>
        </svg>
      )}
      {kind === "leaderboard" && (
        <svg viewBox="0 0 160 100" aria-hidden="true">
          <path className="concept-line" d="M38 29h37m-37 42h37m10-21h37" />
          <circle className="concept-node__dot" cx="27" cy="29" r="10" />
          <circle className="concept-node__dot" cx="27" cy="71" r="10" />
          <text className="concept-label concept-label--center" x="27" y="32">01</text>
          <text className="concept-label concept-label--center" x="27" y="74">02</text>
          <rect className="concept-node concept-node--core" x="76" y="37" width="72" height="26" rx="7" />
          <text className="concept-label concept-label--center" x="112" y="54">TLS SERVER</text>
          <path className="concept-line concept-line--secondary" d="M112 63v16" />
          <circle className="concept-node__dot" cx="112" cy="84" r="6" />
        </svg>
      )}
      <span>CONCEPT · NOT A SCREENSHOT</span>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section__inner">
        <SectionHeading
          index="02"
          eyebrow="Selected work"
          title="Built to solve, made to work."
          description="A closer look at projects where I explored AI workflows, systems, and the details between."
        />

        {featuredProjects.map((project) => (
          <article className={`featured-project featured-project--${project.number}`} key={project.number}>
            <ProjectVisual
              screenshot={project.screenshot}
              visual={"visual" in project ? project.visual : undefined}
            />
            <div className="featured-project__content">
              <div className="project-kicker">
                <span>{project.number}</span>
                <span>{project.category}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="featured-project__subtitle">{project.subtitle}</p>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <RepositoryLink href={project.repository} />
            </div>
          </article>
        ))}

        <div className="additional-heading" id="additional-projects">
          <div>
            <span className="section-heading__eyebrow">
              <span>02B</span><span className="section-heading__rule" aria-hidden="true" /> MORE FROM THE WORKBENCH
            </span>
            <h3>Additional projects</h3>
          </div>
          <p>Different problems, different tools — each one a chance to learn by doing.</p>
        </div>
        <div className="project-list">
          {additionalProjects.map((project) => (
            <article className={`project-row project-row--${project.number}`} key={project.number}>
              <span className="project-row__number">{project.number}</span>
              <div className="project-row__main">
                <p className="project-row__category">{project.category}</p>
                <h4>{project.title}</h4>
                <div className="project-row__details">
                  <ProjectVisual
                    screenshot={project.screenshot}
                    visual={"visual" in project ? project.visual : undefined}
                    compact
                  />
                  <div>
                    <p>{project.description}</p>
                    <div className="tag-list tag-list--small">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="project-row__link"
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} repository on GitHub`}
              >
                <ArrowUpRight size={19} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section__inner">
        <SectionHeading
          index="03"
          eyebrow="Tools & technologies"
          title="What I work with."
          description="A growing toolkit, organized around the work I enjoy doing most."
        />
        <div className="skills-layout">
          <p className="skills-layout__note">
            <span>PRIMARY LENS&nbsp; / &nbsp;01</span>
            Intelligence is the question.
            <small>AI and machine learning lead the work. Frontend is how I make ideas legible.</small>
          </p>
          <div className="skills-list">
            {skillGroups.map((group) => (
              <div className="skill-row" key={group.number}>
                <span className="skill-row__number">{group.number}</span>
                <div className="skill-row__details">
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
                <div className="tag-list tag-list--skills">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function MilestonesSection() {
  return (
    <section className="section milestones-section" id="milestones">
      <div className="section__inner">
        <SectionHeading
          index="04"
          eyebrow="Learning & recognition"
          title="The path so far."
          description="Academic foundations, hands-on programs, and certificates earned along the way."
        />

        <div className="milestone-grid">
          {milestones.map((milestone, index) => (
            <article className={`milestone milestone--${index + 1}`} key={milestone.title}>
              <span className="milestone__index" aria-hidden="true">0{index + 1}</span>
              <figure className="milestone__image">
                <Image
                  src={milestone.image.src}
                  alt={milestone.image.alt}
                  width={milestone.image.width}
                  height={milestone.image.height}
                  sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 380px"
                />
              </figure>
              {milestone.photos && (
                <div className="milestone__photos" aria-label="Additional program images">
                  {milestone.photos.map((photo) => (
                    <figure key={photo.src}>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={photo.width}
                        height={photo.height}
                        sizes="(max-width: 760px) 46vw, 190px"
                      />
                    </figure>
                  ))}
                </div>
              )}
              <div className="milestone__copy">
                <p className="milestone__subtitle">{milestone.subtitle}</p>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="education-block">
          <div className="education-block__heading">
            <span className="section-heading__eyebrow">
              <span>04B</span><span className="section-heading__rule" aria-hidden="true" /> EDUCATION
            </span>
            <h3>Building the foundation.</h3>
            <p>CSE (AI &amp; ML) student at PES University, Bengaluru.</p>
          </div>
          <div className="education-timeline">
            {education.map((item) => (
              <article className="education-entry" key={item.qualification}>
                <span className="education-entry__period">{item.period}</span>
                <div>
                  <h4>{item.qualification}</h4>
                  <p>{item.institution}</p>
                  <span>{item.focus}{item.note ? ` · ${item.note}` : ""}</span>
                </div>
              </article>
            ))}
            <article className="education-entry education-entry--bootcamp">
              <span className="education-entry__period">4 weeks</span>
              <div>
                <h4>Front-End Development Bootcamp</h4>
                <p>PESU I/O</p>
                <span>HTML, CSS, JavaScript, React, responsive applications, Git, and GitHub.</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__inner">
        <div className="contact-section__eyebrow">
          <span className="status-dot" /> OPEN TO GOOD CONVERSATIONS
        </div>
        <h2>
          Curious about
          <br />
          <span>what we can learn?</span>
        </h2>
        <p>
          I&apos;m glad to talk about machine learning, software, or a thoughtful
          problem worth exploring.
        </p>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          <Mail size={18} aria-hidden="true" />
          <span>{profile.email}</span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
        <CopyEmailButton email={profile.email} />
        <div className="contact-socials">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <SocialMark network="github" /> GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <SocialMark network="linkedin" /> LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="wordmark wordmark--footer" href="#top">
        <span className="wordmark__mark" aria-hidden="true">A<span>.</span></span>
        <span>Akshaya B</span>
      </a>
      <p>CSE (AI &amp; ML) student at PES University · Bengaluru.</p>
      <span>© {new Date().getFullYear()} Akshaya B</span>
    </footer>
  );
}
