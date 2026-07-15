// All real content lives here. Update this file to update the site — no
// need to touch component markup for text/data changes.

export const profile = {
  name: "Chahak Porwal",
  role: "Backend Developer & AI/ML Engineer",
  email: "chahakporwal@gmail.com",
  phone: "+91 829-039-0488",
  resume: "/Chahak_Porwal_Resume.pdf",
  location: "Rajasthan, India",
  github: "https://github.com/Chahak1705", 
  linkedin: "https://www.linkedin.com/in/chahakporwal/",
  status: "Available for Software/Backend Roles",
  photo: "/cp.jpg",
  heroTagline: "Software & Backend Developer",
};

export const stats = [
  { count: 8.39, decimals: 2, label: "CGPA" },
  { count: 3, decimals: 0, label: "Major Projects" },
  { count: 770, decimals: 0, suffix: "+", label: "Disease classes trained on" },
];

export const infoCards = [
  { label: "Education", value: "B.Tech CSE (AI & DL)\nMody University, Sikar" },
  { label: "Current Role", value: "Backend Dev Intern\nDecodeLabs" },
  { label: "Location", value: "Rajasthan, India" },
  { label: "Focus", value: "APIs · ML systems\nBackend architecture" },
];
export const experience = [
  {
    role: "Backend Development Intern",
    org: "DecodeLabs",
    location: "Remote",
    date: "Jul 2026 – Present",
    color: "#5B6CFF",
    initials: "DL",
    bullets: [
      "Currently building a stateless RESTful API with Node.js (Express.js), implementing GET/POST routes and structured JSON data handling.",
    ],
    
  },
  
  {
  
    org: "IBM",
    location: "Remote",
    date: "Jun 2025 – Jul 2025",
    color: "#7CF7C4",
    initials: "IBM",
    bullets: [
      "Built and deployed an AutoAI model on IBM Watson Studio achieving 85% accuracy in heart disease risk prediction using 13 clinical features; served via REST API on IBM Cloud.",
      "Automated end-to-end ML pipeline including data preprocessing, feature engineering, and model selection, reducing manual experimentation time.",
      "Communicated model performance and clinical outcomes to IBM mentors via structured presentations.",
    ],
  },
];
export const education = [
  {
    degree: "B.Tech CSE (AI & DL)",
    org: "Mody University of Science and Technology",
    location: "Sikar, Rajasthan",
    date: "Aug 2023 – Present",
    detail: "CGPA: 8.39",
  },
  {
    degree: "Senior Secondary School",
    org: "Maharishi Arvind Public School",
    location: "Kota, Rajasthan",
    date: "2022",
    detail: "90%",
  },
];

export const projects = [
  {
    id: "college-discovery",
    title: "College Discovery Platform",
    color: "#283aac",
    logo: "/projects/college-discovery-logo.png",
    desc: "A college search & comparison platform with a rank-based JEE predictor, secure auth, and a normalized PostgreSQL schema.",
    techIcons: ["nextjs", "typescript", "postgresql", "prisma"],
    repo: "https://github.com/Chahak1705/College_Discovery_Platform",
    demo: "https://college-discovery-sooty.vercel.app/",
  },
  {
    id: "healthguard-ai",
    title: "HealthGuard AI",
    color: "#283aac",
    logo: "/projects/healthguard-logo.png",
    desc: "A privacy-preserving full-stack medical assistant: symptom prediction via fine-tuned BioBERT, RAG retrieval, OCR prescription parsing, and a local LLM.",
    techIcons: ["fastapi", "react", "python"],
    repo: "https://github.com/Chahak1705/HealthGuard-AI",
    demo: "#",
  },
  {
    id: "face-attendance",
    title: "Face Recognition Attendance System",
    color: "#283aac",
    logo: "/projects/face-attendance-logo.png",
    desc: "Real-time attendance tracking with facial embeddings, duplicate prevention, and automated daily reporting.",
    techIcons: ["python", "opencv", "sqlite"],
    repo: "https://github.com/Chahak1705/Face_Recognition_Attendance_System",
    demo: "#",
  },
];
export const skills = [
  { name: "Python", icon: "python" },
  { name: "Java", icon: "java" },
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "HTML / CSS", icon: "html" },
  { name: "Next.js", icon: "nextjs" },
  { name: "React.js", icon: "react" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express.js", icon: "express" },
  { name: "FastAPI", icon: "fastapi" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MySQL", icon: "mysql" },
  { name: "SQLite", icon: "sqlite" },
  { name: "Oracle", icon: "oracle" },
  { name: "Prisma ORM", icon: "prisma" },
  { name: "OpenCV", icon: "opencv" },
  { name: "Git / GitHub", icon: "github" },
  { name: "JWT / REST APIs", icon: "jwt" },
  { name: "Postman", icon: "postman" },
  { name: "VS Code", icon: "vscode" },
];
export const navLinks = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#education", label: "education" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];
