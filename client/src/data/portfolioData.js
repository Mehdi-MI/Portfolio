// Portfolio data - updated from resume

export const personalInfo = {
  name: "Hasbellaoui Mehdi",
  title: "Full-Stack Developer",
  email: "hasbellaouimehdi@gmail.com",
  phone: "+213-561724242",
  location: "Algeria"
}

export const socialLinks = {
  github: "https://github.com/Mehdi-MI",
  linkedin: "https://www.linkedin.com/in/mehdi-hasbellaoui/",
  email: "hasbellaouimehdi@gmail.com"
}

export const resumeConfig = {
  fileName: "hasbellaoui-mehdi-cv.pdf",
  filePath: "https://drive.google.com/file/d/1cbKIjRSlYOT2x6K8C7ITnxsvNmiTcUji/view?usp=sharing",
}

export const aboutMe = {
  description: "Full-Stack Developer with hands-on experience in frontend, backend, databases, DevOps, networking, and system design. I enjoy designing, building, and deploying reliable software solutions while continuously expanding my technical expertise.",
  highlights: [
    "Experience in frontend & backend development",
    "Proficient in React, Node.js, and modern JavaScript",
    "DevOps skills: Docker, Nginx, CI/CD, Prometheus, Grafana",
    "Strong problem-solving and self-learning mindset"
  ]
}

export const skills = {
  languages: ["JavaScript", "HTML5", "CSS", "C", "Java"],
  frontend: ["React.js", "Vite", "Tailwind CSS", "Chakra UI", "Shadcn UI", "React Router"],
  backend: ["Node.js", "Express.js"],
  database: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  devops: ["Docker", "Docker Compose", "CI/CD (GitHub Actions)", "Linux", "Nginx", "Render", "Prometheus", "Grafana"],
  tools: ["Git", "GitHub", "Postman"]
}

export const experience = [
  {
    id: 1,
    company: "Inovask",
    position: "DevOps Intern",
    duration: "October 2025 – April 2026",
    type: "Remote, Algeria",
    description: "Configured and deployed Nginx in Docker containers to serve a React frontend and act as a reverse proxy. Implemented production-like environments with upstream services, API routing, and rate limiting. Deployed Prometheus and built Grafana dashboards for real-time infrastructure monitoring. Implemented Redis for session storage and caching in Docker environments.",
    technologies: ["Docker", "Nginx", "Prometheus", "Grafana", "Redis", "Docker Compose"]
  },
  {
    id: 2,
    company: "SwiftSage (PFE Project)",
    position: "Frontend Developer",
    duration: "Sep 2024 – Jun 2025",
    type: "Algeria",
    description: "Designed and built a full crisis management frontend with React, Vite, Tailwind CSS, and React Router. Secured the app with JWT authentication and role-based access control. Developed an interactive dashboard with map visualization, image upload, and real-time crisis reporting.",
    technologies: ["React", "Vite", "Tailwind CSS", "React Router", "JWT"]
  },
  {
    id: 3,
    company: "Personal Project",
    position: "Full-Stack Developer",
    duration: "Jan 2026",
    type: "Algeria",
    description: "Developed full-stack features for MHD Store including RESTful API design with Node.js and Express. Managed frontend and backend with deployment on Render. Designed and maintained PostgreSQL and MongoDB schemas.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Render"]
  }
]

export const projects = [
  {
    id: 1,
    title: "SwiftSage",
    description: "Crisis management platform with real-time reporting, map visualization, emergency alert broadcasting, and crowdsourced data collection. Features JWT-based auth with user/admin RBAC.",
    technologies: ["React", "JavaScript", "Vite", "Tailwind CSS", "React Router", "JWT"],
    githubUrl: "https://github.com/Mehdi-MI",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "MHD Store",
    description: "Full-stack e-commerce platform with multi-vendor marketplace, shopping cart, Stripe payment integration, admin panel, and role-based access for buyers, sellers, and admins.",
    technologies: ["Node.js", "Express.js", "React", "Vite", "Tailwind CSS", "PostgreSQL", "MongoDB", "JWT"],
    githubUrl: "https://github.com/Mehdi-MI",
    liveUrl: "#",
  }
]

export const education = [
  {
    id: 1,
    degree: "Master of Distributed Networks and Computer Systems",
    school: "Sciences and Technology University of Oran - Mohamed Boudiaf (USTO-MB)",
    duration: "Sep 2025 – Jun 2027 (expected)",
  },
  {
    id: 2,
    degree: "Bachelor of Computer Science and Information Systems",
    school: "Hassiba Benbouali University, Chlef",
    duration: "Sep 2022 – Jun 2025",
  }
]

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "B2" },
  { name: "English", level: "B1" },
]