# 🌐 Hasbellaoui Mehdi — Personal Portfolio

A modern, responsive personal portfolio website built with **React + Vite**, showcasing my experience, projects, and skills as a Full-Stack Developer.

---

## 👤 About Me

I'm **Hasbellaoui Mehdi**, a Full-Stack Developer with hands-on experience across the entire software development lifecycle — from designing interactive frontends and building RESTful APIs, to containerizing applications and monitoring infrastructure in production-like environments.

Currently pursuing a **Master's in Distributed Networks and Computer Systems** at USTO-MB, Oran, Algeria.

📧 hasbellaouimehdi@gmail.com
📞 +213-561724242
📍 Algeria
🔗 [LinkedIn](https://www.linkedin.com/in/mehdi-hasbellaoui/) · [GitHub](https://github.com/Mehdi-MI)
📄 [Download CV](https://drive.google.com/file/d/1cbKIjRSlYOT2x6K8C7ITnxsvNmiTcUji/view?usp=sharing)

---

## 💼 Experience

### DevOps Intern — Inovask *(Remote, Algeria)*
**October 2025 – April 2026**

- Configured and deployed **Nginx** in Docker containers to serve a React frontend and act as a reverse proxy for backend services
- Implemented production-like environments with upstream services, API routing, and proxy settings
- Configured rate limiting, gzip compression, CORS handling, and security headers
- Deployed **Prometheus** to monitor CPU, RAM, and container-level health metrics
- Built **Grafana** dashboards for real-time infrastructure visualization
- Implemented **Redis** in Docker as a session storage system with persistence and caching

`Docker` `Nginx` `Prometheus` `Grafana` `Redis` `Docker Compose` `Linux`

---

### Frontend Developer — SwiftSage *(PFE Project, Algeria)*
**September 2024 – June 2025**

- Designed and built a full **crisis management frontend** with React, Vite, Tailwind CSS, and React Router
- Secured the app with **JWT authentication** and role-based access control (user/admin)
- Developed an interactive dashboard featuring map visualization, image upload, and real-time crisis reporting
- Implemented a **crowdsourced data collection system** and emergency alert broadcast feature

`React` `Vite` `Tailwind CSS` `React Router` `JWT` `JavaScript`

---

### Full-Stack Developer — MHD Store *(Personal Project, Algeria)*
**January 2026**

- Developed full-stack features including **RESTful API design** with Node.js and Express
- Managed both frontend and backend with deployment on **Render**
- Designed and maintained **PostgreSQL** and **MongoDB** schemas for product and user data

`Node.js` `Express.js` `PostgreSQL` `MongoDB` `React` `Vite` `Tailwind CSS` `Render`

---

## 🚀 Projects

### [SwiftSage](https://github.com/Mehdi-MI) — Crisis Management Platform

A full-featured crisis management platform with real-time reporting and monitoring capabilities.

**Key Features:**
- JWT-based authentication with user/admin role-based access control
- Interactive map for visualizing crisis locations and severity levels
- Crowdsourced data collection from multiple users
- Emergency alert broadcast system
- Image upload and crisis report submission dashboard
- Contact form with integrated messaging system

**Stack:** React · JavaScript · Vite · Tailwind CSS · React Router · JWT

---

### [MHD Store](https://github.com/Mehdi-MI) — E-commerce Platform

A full-stack e-commerce platform with admin panel and payment integration.

**Key Features:**
- Multi-vendor marketplace with individual product management per seller
- JWT-based auth with RBAC for buyers, sellers, and admins
- Shopping cart with real-time total calculation
- RESTful API with clean endpoint organization
- Responsive, mobile-first design

**Stack:** Node.js · Express.js · React · Vite · Tailwind CSS · PostgreSQL · MongoDB · JWT

---

## 🛠️ Technical Skills

| Category   | Technologies |
|------------|-------------|
| **Languages** | JavaScript, HTML5, CSS, C, Java |
| **Frontend** | React.js, Vite, Tailwind CSS, Chakra UI, Shadcn UI, React Router |
| **Backend** | Node.js, Express.js |
| **Databases** | PostgreSQL, MongoDB, MySQL, Redis |
| **DevOps** | Docker, Docker Compose, GitHub Actions (CI/CD), Linux, Nginx, Render, Prometheus, Grafana |
| **Tools** | Git, GitHub, Postman |

---

## 🎓 Education

**Master of Distributed Networks and Computer Systems**
Sciences and Technology University of Oran - Mohamed Boudiaf (USTO-MB)
*September 2025 – June 2027 (expected)*

**Bachelor of Computer Science and Information Systems**
Hassiba Benbouali University, Chlef
*September 2022 – June 2025*

---

## 🌍 Languages

| Language | Level |
|----------|-------|
| Arabic | Native |
| French | B2 |
| English | B1 |

---

## 🗂️ Project Structure

```
portfolio/
├── client/                     # React frontend (Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header/         # Fixed navigation bar
│   │   │   │   ├── Header.jsx
│   │   │   │   └── Header.css
│   │   │   ├── Hero/           # Landing section
│   │   │   │   ├── Hero.jsx
│   │   │   │   └── Hero.css
│   │   │   ├── About/          # Skills, experience & education
│   │   │   │   ├── About.jsx
│   │   │   │   └── About.css
│   │   │   └── Contact/        # Contact form (Web3Forms)
│   │   │       ├── Contact.jsx
│   │   │       └── Contact.css
│   │   ├── data/
│   │   │   └── portfolioData.js  # ← All personal data lives here
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build tool | Vite 7 |
| Styling | Custom CSS with CSS variables |
| Icons | react-icons |
| Contact form | Web3Forms API |
| Deployment | Render / Vercel / Netlify |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 20.19.0` (required by Vite 7)
- npm `>= 8`

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/Mehdi-MI/<your-portfolio-repo>.git
cd <your-portfolio-repo>

# Install dependencies
cd client
npm install

# Start the development server
npm run dev
```

Then open **http://localhost:5173** in your browser.

### Build for Production

```bash
cd client
npm run build
```

Output is generated in `client/dist/`. Deploy the contents of `dist/` to any static hosting provider.

### Preview Production Build Locally

```bash
npm run preview
```

---

## 🔧 Customization

All personal information is centralized in one file:

```
client/src/data/portfolioData.js
```

Edit the exported constants there to update your name, contact details, skills, experience, projects, education, and social links — the entire site updates automatically.

To replace the Web3Forms key (contact form), open `client/src/components/Contact/Contact.jsx` and swap the `access_key` value.

---

## 📬 Contact

Feel free to reach out for collaboration, freelance work, or just to connect:

- **Email:** hasbellaouimehdi@gmail.com
- **LinkedIn:** [mehdi-hasbellaoui](https://www.linkedin.com/in/mehdi-hasbellaoui/)
- **GitHub:** [Mehdi-MI](https://github.com/Mehdi-MI)

---

*Built with React + Vite · © 2026 Hasbellaoui Mehdi*