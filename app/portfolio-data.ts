export const profile = {
  name: "Akshaya B",
  email: "shettyakshay742@gmail.com",
  github: "https://github.com/Akshayshetty742",
  linkedin: "https://www.linkedin.com/in/akshay-shetty-618b63269",
  resume: "/resume.pdf",
  productionUrl: "https://v0-personal-portfolio-website-puce-iota.vercel.app",
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Milestones", href: "#milestones" },
  { label: "Contact", href: "#contact" },
];

export type ProjectScreenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectVisualKind = "movie-booking" | "assistant" | "leaderboard";

export const featuredProjects = [
  {
    number: "01",
    title: "AI RiskGuard — Payment Fraud Detection",
    subtitle: "Transaction-risk scoring with a Random Forest classifier.",
    description:
      "A Streamlit app predicts whether a transaction matches the synthetic fraud labels and converts the Random Forest probability into a risk score. The generated data is for education only; this is not a real-world fraud detection service.",
    category: "AI / ML · Fraud-risk scoring",
    tags: ["Python", "Streamlit", "scikit-learn", "Random Forest", "Pandas"],
    repository: "https://github.com/Akshayshetty742/ai-riskguard",
    screenshot: {
      src: "/ai-riskguard-home.jpeg",
      alt: "AI RiskGuard Streamlit screen with transaction risk assessment inputs",
      width: 1600,
      height: 827,
    },
  },
  {
    number: "02",
    title: "ClothAI — Data-Driven Clothing Prediction",
    subtitle: "Predicting garment deformation from a human-pose vector.",
    description:
      "A trained PyTorch MLP maps a 56-value pose vector to garment-deformation values, with PCA compression and a Streamlit prediction view. Separate geometry utilities demonstrate forward kinematics, quaternion transforms, and garment-mesh visualization.",
    category: "Machine learning · 3D geometry",
    tags: ["Python", "PyTorch", "Streamlit", "PCA", "Plotly"],
    repository:
      "https://github.com/Akshayshetty742/ClothAI-Data-Driven-Clothing-Prediction",
    screenshot: {
      src: "/clothai-live-prediction.jpeg",
      alt: "ClothAI Streamlit live prediction screen with a predicted garment deformation profile",
      width: 1600,
      height: 927,
    },
  },
  {
    number: "03",
    title: "MovieBook — Movie Booking and Database System",
    subtitle: "A full-stack booking workflow built around relational and graph data.",
    description:
      "A Next.js application using normalized MySQL data for movies, showtimes, seats, and customer bookings, with Neo4j recommendations based on genres and confirmed bookings. Payment records are simulated; no real payment details are processed.",
    category: "DBMS · Full-stack web application",
    tags: ["Next.js", "React", "MySQL", "Neo4j", "SQL"],
    repository:
      "https://github.com/Akshayshetty742/MovieBook-DBMS-Project",
    screenshot: null,
    visual: "movie-booking",
  },
] as const;

export const additionalProjects = [
  {
    number: "04",
    title: "Multi-Agent AI Assistant",
    category: "Backend · Command routing",
    description:
      "A FastAPI service routes text commands to task, note, and event handlers. The inspected backend uses keyword matching and in-memory lists rather than model-backed reasoning.",
    tags: ["Python", "FastAPI", "REST APIs"],
    repository: "https://github.com/Akshayshetty742/multi-agent-assistant",
    screenshot: null,
    visual: "assistant",
  },
  {
    number: "05",
    title: "Secure Multi-Threaded Leaderboard",
    category: "Systems · Networking",
    description:
      "A Python socket client-server leaderboard with TLS-encrypted connections, threaded client handling, and a lock protecting shared leaderboard data.",
    tags: ["Python", "Sockets", "SSL/TLS", "Multithreading"],
    repository:
      "https://github.com/Akshayshetty742/CN-Jackfruit-Project-distributed-leaderboard-system-",
    screenshot: null,
    visual: "leaderboard",
  },
  {
    number: "06",
    title: "SDN Firewall with Ryu and Mininet",
    category: "Networks · Software-defined networking",
    description:
      "A Ryu learning switch using OpenFlow 1.3, with a fixed rule that blocks traffic between h1 and h3 while forwarding other learned hosts in a Mininet topology.",
    tags: ["Python", "Ryu", "Mininet", "OpenFlow"],
    repository: "https://github.com/Akshayshetty742/sdn-firewall-ryu",
    screenshot: {
      src: "/sdn-firewall-block.png",
      alt: "Mininet ping test showing traffic between firewall-blocked hosts",
      width: 1600,
      height: 788,
    },
  },
] as const;

export const skillGroups = [
  {
    number: "01",
    title: "AI & machine learning",
    description: "Applied AI systems and generative workflows",
    skills: [
      "Gemini AI",
      "LLM workflows",
      "Multi-agent systems",
      "Prompt orchestration",
      "Google Cloud Run",
    ],
  },
  {
    number: "02",
    title: "Programming",
    description: "Languages used across projects and coursework",
    skills: ["Python", "C", "C++", "JavaScript", "TypeScript"],
  },
  {
    number: "03",
    title: "Frontend development",
    description: "Interfaces built for clarity and different screen sizes",
    skills: ["React", "Next.js", "HTML", "CSS", "Responsive UI"],
  },
  {
    number: "04",
    title: "Backend & systems",
    description: "APIs, networking, and application infrastructure",
    skills: [
      "Node.js",
      "Express",
      "FastAPI",
      "REST APIs",
      "Socket programming",
      "SSL/TLS",
      "TCP/IP",
      "Ryu",
      "Mininet",
      "OpenFlow",
    ],
  },
  {
    number: "05",
    title: "Tools & platforms",
    description: "Tools used to build, collaborate, and ship",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Linux",
      "MongoDB",
      "Firebase",
      "Vercel",
      "Netlify",
    ],
  },
];

export const milestones = [
  {
    title: "Google Cloud Gen AI Academy",
    subtitle: "APAC 2026 · Cohort 1",
    description:
      "Completed the Gen AI Academy program, with hands-on learning around generative AI applications and cloud infrastructure.",
    image: {
      src: "/event2.png",
      alt: "Google Cloud Gen AI Academy certificate awarded to Akshaya B",
      width: 777,
      height: 588,
    },
  },
  {
    title: "Dreamflow Buildathon",
    subtitle: "Buildathon 2025",
    description:
      "Collaborated to design, architect, and ship a functional application prototype during the Dreamflow Buildathon.",
    image: {
      src: "/dreamflow-event.png",
      alt: "Dreamflow Buildathon certificate of participation",
      width: 581,
      height: 395,
    },
  },
  {
    title: "Web Development Mentorship",
    subtitle: "LaunchED Global · 2025",
    description:
      "Completed a mentorship program focused on web development. The certificate identifies the work as a Web Development Mentorship Program.",
    image: {
      src: "/event4-3.png",
      alt: "LaunchED Global Web Development Mentorship Program certificate",
      width: 1007,
      height: 632,
    },
    photos: [
      {
        src: "/event4-1.png",
        alt: "LaunchED Global web development training presentation shown on a laptop",
        width: 730,
        height: 516,
      },
      {
        src: "/event4-2.png",
        alt: "LaunchED Global mentorship presentation slide about program benefits",
        width: 938,
        height: 635,
      },
    ],
  },
];

export const education = [
  {
    period: "2024 — 2028",
    qualification: "B.Tech · Computer Science and Engineering (CSE)",
    focus: "Specialization: Artificial Intelligence and Machine Learning",
    institution: "PES University · Bengaluru",
    note: "Expected graduation 2028",
  },
  {
    period: "2022 — 2024",
    qualification: "Pre-University · Grades 11–12",
    focus: "Science",
    institution: "KLE Prerana PU Residential College · Hubli",
  },
  {
    period: "Secondary",
    qualification: "CBSE · Grades 6–10",
    focus: "School education",
    institution: "Jawahar Navodaya Vidyalaya",
  },
];
