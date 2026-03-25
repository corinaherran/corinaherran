/* Variables y Reset */
:root {
    --primary: #6B4EE6;
    --primary-dark: #553DBF;
    --secondary: #FF6B9D;
    --accent: #00D9C0;
    --dark: #1A1A2E;
    --darker: #16162A;
    --light: #F8F9FA;
    --gray: #6C757D;
    --gradient-1: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    --gradient-2: linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%);
    --shadow: 0 20px 40px rgba(0,0,0,0.1);
    --shadow-hover: 0 30px 60px rgba(0,0,0,0.15);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    background: var(--dark);
    color: var(--light);
    line-height: 1.6;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Navegación */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    background: rgba(26, 26, 46, 0.9);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255,255,255,0.1);
}

.logo {
    font-size: 1.5rem;
    font-weight: 800;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    color: var(--light);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-1);
    transition: width 0.3s;
}

.nav-links a:hover::after,
.nav-links a.active::after {
    width: 100%;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 5px;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: var(--light);
    transition: 0.3s;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 8rem 2rem 4rem;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 800px;
    height: 800px;
    background: var(--primary);
    border-radius: 50%;
    filter: blur(150px);
    opacity: 0.3;
    animation: float 20s infinite ease-in-out;
}

.hero::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 600px;
    height: 600px;
    background: var(--secondary);
    border-radius: 50%;
    filter: blur(150px);
    opacity: 0.2;
    animation: float 25s infinite ease-in-out reverse;
}

@keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(50px, -50px) scale(1.1); }
}

.hero-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 1;
}

.hero-text h1 {
    font-size: 5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.1;
}

.subtitle {
    font-size: 1.5rem;
    color: var(--secondary);
    margin-bottom: 1.5rem;
    font-weight: 300;
}

.description {
    font-size: 1.2rem;
    color: var(--gray);
    margin-bottom: 2rem;
    max-width: 500px;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.btn {
    padding: 1rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
    display: inline-block;
    border: none;
    cursor: pointer;
    font-size: 1rem;
}

.btn-primary {
    background: var(--gradient-1);
    color: white;
    box-shadow: 0 10px 30px rgba(107, 78, 230, 0.3);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(107, 78, 230, 0.4);
}

.btn-secondary {
    background: transparent;
    color: var(--light);
    border: 2px solid rgba(255,255,255,0.3);
}

.btn-secondary:hover {
    border-color: var(--secondary);
    color: var(--secondary);
    transform: translateY(-3px);
}

.btn-large {
    padding: 1.2rem 3rem;
    font-size: 1.1rem;
}

.hero-image {
    position: relative;
}

.hero-image img {
    width: 100%;
    max-width: 500px;
    border-radius: 30px;
    box-shadow: var(--shadow);
    animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    opacity: 0.6;
    animation: bounce 2s infinite;
}

.mouse {
    width: 25px;
    height: 40px;
    border: 2px solid var(--light);
    border-radius: 15px;
    position: relative;
}

.mouse::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 8px;
    background: var(--light);
    border-radius: 2px;
    animation: scroll 2s infinite;
}

@keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(-10px); }
}

@keyframes scroll {
    0% { opacity: 1; transform: translateX(-50%) translateY(0); }
    100% { opacity: 0; transform: translateX(-50%) translateY(15px); }
}

/* About Section */
.about {
    padding: 6rem 0;
    background: var(--darker);
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.about-image {
    position: relative;
}

.about-image img {
    width: 100%;
    border-radius: 20px;
    box-shadow: var(--shadow);
}

.image-frame {
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    border: 3px solid var(--primary);
    border-radius: 20px;
    z-index: -1;
}

.about-content h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--light);
}

.about-content p {
    font-size: 1.1rem;
    color: var(--gray);
    margin-bottom: 2rem;
    line-height: 1.8;
}

.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
}

.skill-tag {
    padding: 0.5rem 1rem;
    background: rgba(107, 78, 230, 0.2);
    border: 1px solid var(--primary);
    border-radius: 50px;
    color: var(--primary);
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s;
}

.skill-tag:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-2px);
}

/* Projects Section */
.projects {
    padding: 6rem 0;
}

.projects h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.project-card {
    background: var(--darker);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.4s;
    border: 1px solid rgba(255,255,255,0.05);
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
    border-color: var(--primary);
}

.project-image {
    position: relative;
    overflow: hidden;
    aspect-ratio: 4/3;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
}

.project-card:hover .project-image img {
    transform: scale(1.1);
}

.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(26, 26, 46, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
}

.project-card:hover .project-overlay {
    opacity: 1;
}

.btn-play {
    padding: 1rem 2rem;
    background: var(--gradient-1);
    color: white;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    transform: scale(0.8);
    transition: all 0.3s;
}

.project-card:hover .btn-play {
    transform: scale(1);
}

.project-info {
    padding: 1.5rem;
}

.project-info h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: var(--light);
}

.project-info p {
    color: var(--gray);
    font-size: 0.95rem;
    line-height: 1.5;
}

/* Contact Section */
.contact {
    padding: 6rem 0;
    text-align: center;
    background: var(--gradient-2);
    position: relative;
    overflow: hidden;
}

.contact::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.contact h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
}

.contact p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    position: relative;
    z-index: 1;
}

.contact .btn {
    background: white;
    color: var(--primary);
    position: relative;
    z-index: 1;
}

.contact .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

/* Footer */
footer {
    padding: 3rem 0;
    background: var(--darker);
    text-align: center;
    border-top: 1px solid rgba(255,255,255,0.05);
}

footer .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.social-links {
    display: flex;
    gap: 1.5rem;
}

.social-links a {
    color: var(--gray);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;
}

.social-links a:hover {
    color: var(--secondary);
}

/* CV Page Styles */
.cv-header {
    padding: 10rem 0 4rem;
    background: var(--gradient-1);
    position: relative;
    overflow: hidden;
}

.cv-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.cv-header-content {
    display: flex;
    align-items: center;
    gap: 3rem;
    position: relative;
    z-index: 1;
}

.cv-photo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid rgba(255,255,255,0.3);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.cv-title h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
}

.cv-subtitle {
    font-size: 1.3rem;
    opacity: 0.9;
    margin-bottom: 1rem;
}

.cv-contact {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    font-size: 0.95rem;
    opacity: 0.9;
}

.cv-main {
    padding: 4rem 0;
}

.cv-grid {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 4rem;
}

.cv-sidebar {
    position: sticky;
    top: 100px;
    height: fit-content;
}

.cv-section {
    background: var(--darker);
    padding: 2rem;
    border-radius: 15px;
    margin-bottom: 2rem;
    border: 1px solid rgba(255,255,255,0.05);
}

.cv-section h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: var(--secondary);
    border-bottom: 2px solid var(--primary);
    padding-bottom: 0.5rem;
}

.skills-list {
    list-style: none;
}

.skills-list li {
    margin-bottom: 1rem;
    position: relative;
    padding-left: 0;
}

.skill-bar {
    display: block;
    background: rgba(107, 78, 230, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-size: 0.9rem;
    position: relative;
    overflow: hidden;
}

.skill-bar::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: var(--width);
    background: var(--gradient-1);
    opacity: 0.3;
    z-index: 0;
}

.languages {
    list-style: none;
}

.languages li {
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.05);
}

.languages li:last-child {
    border-bottom: none;
}

.lang-level {
    color: var(--accent);
    font-weight: 600;
    font-size: 0.9rem;
}

.cv-content section {
    margin-bottom: 4rem;
}

.cv-content h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--light);
    position: relative;
    padding-left: 1.5rem;
}

.cv-content h2::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 5px;
    height: 30px;
    background: var(--gradient-1);
    border-radius: 3px;
}

.cv-timeline {
    position: relative;
}

.cv-timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(255,255,255,0.1);
}

.timeline-item {
    position: relative;
    padding-left: 3rem;
    padding-bottom: 3rem;
}

.timeline-marker {
    position: absolute;
    left: -6px;
    top: 0;
    width: 14px;
    height: 14px;
    background: var(--primary);
    border-radius: 50%;
    border: 3px solid var(--dark);
}

.timeline-content h3 {
    font-size: 1.3rem;
    color: var(--light);
    margin-bottom: 0.3rem;
}

.timeline-date {
    color: var(--secondary);
    font-size: 0.9rem;
    font-weight: 600;
    display: block;
    margin-bottom: 0.5rem;
}

.timeline-place {
    color: var(--gray);
    font-style: italic;
    margin-bottom: 1rem;
}

.timeline-content ul {
    list-style: none;
    padding-left: 0;
}

.timeline-content li {
    padding: 0.3rem 0;
    padding-left: 1.5rem;
    position: relative;
    color: var(--gray);
}

.timeline-content li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--accent);
}

.cv-publications h2 {
    margin-bottom: 1.5rem;
}

.publications-list {
    list-style: none;
}

.publications-list li {
    padding: 1.5rem;
    background: var(--darker);
    border-radius: 10px;
    margin-bottom: 1rem;
    border-left: 4px solid var(--accent);
    transition: all 0.3s;
}

.publications-list li:hover {
    transform: translateX(10px);
    border-left-color: var(--secondary);
}

.publications-list strong {
    display: block;
    color: var(--light);
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
}

.publications-list span {
    color: var(--gray);
    font-size: 0.9rem;
}

.btn-download {
    background: var(--gradient-1);
    color: white;
    margin-top: 1rem;
}

/* Responsive */
@media (max-width: 968px) {
    .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .hero-text h1 {
        font-size: 3rem;
    }

    .hero-image {
        order: -1;
    }

    .about-grid {
        grid-template-columns: 1fr;
    }

    .cv-grid {
        grid-template-columns: 1fr;
    }

    .cv-sidebar {
        position: static;
    }

    .cv-header-content {
        flex-direction: column;
        text-align: center;
    }

    .nav-links {
        position: fixed;
        top: 70px;
        right: -100%;
        width: 100%;
        height: calc(100vh - 70px);
        background: var(--dark);
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        transition: right 0.3s;
    }

    .nav-links.active {
        right: 0;
    }

    .hamburger {
        display: flex;
    }
}

@media (max-width: 480px) {
    .hero-text h1 {
        font-size: 2.5rem;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }

    .cv-photo {
        width: 150px;
        height: 150px;
    }
}

/* Animaciones de entrada */
[data-aos] {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s, transform 0.6s;
}

[data-aos].aos-animate {
    opacity: 1;
    transform: translateY(0);
}

/* Print styles */
@media print {
    .navbar, .scroll-indicator, .btn-download {
        display: none;
    }

    .cv-header {
        padding: 2rem 0;
        background: white !important;
        color: black !important;
    }

    body {
        background: white;
        color: black;
    }

    .cv-section, .timeline-content, .publications-list li {
        background: white;
        border: 1px solid #ddd;
    }
}
