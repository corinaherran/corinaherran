// Navegación móvil
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Animaciones al scroll (AOS simple implementation)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efecto parallax suave en hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * 0.4}px)`;
    }
});

// Botones de play en proyectos (simulación)
document.querySelectorAll('.btn-play').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const projectTitle = btn.closest('.project-card').querySelector('h3').textContent;
        
        // Crear modal de reproducción simulado
        const modal = document.createElement('div');
        modal.className = 'play-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="player-placeholder">
                    <div class="playing-animation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p>Reproduciendo: ${projectTitle}</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Animación de entrada
        setTimeout(() => modal.classList.add('active'), 10);
        
        // Cerrar modal
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                setTimeout(() => modal.remove(), 300);
            }
        });
    });
});

// Agregar estilos para el modal dinámicamente
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .play-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(26, 26, 46, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s;
        backdrop-filter: blur(10px);
    }
    
    .play-modal.active {
        opacity: 1;
    }
    
    .modal-content {
        background: var(--darker);
        padding: 3rem;
        border-radius: 20px;
        text-align: center;
        position: relative;
        border: 1px solid rgba(255,255,255,0.1);
        transform: scale(0.9);
        transition: transform 0.3s;
    }
    
    .play-modal.active .modal-content {
        transform: scale(1);
    }
    
    .close-modal {
        position: absolute;
        top: 1rem;
        right: 1.5rem;
        font-size: 2rem;
        cursor: pointer;
        color: var(--gray);
        transition: color 0.3s;
    }
    
    .close-modal:hover {
        color: var(--secondary);
    }
    
    .player-placeholder {
        padding: 2rem;
    }
    
    .playing-animation {
        display: flex;
        justify-content: center;
        gap: 5px;
        margin-bottom: 1.5rem;
    }
    
    .playing-animation span {
        width: 6px;
        height: 30px;
        background: var(--gradient-1);
        border-radius: 3px;
        animation: sound 1s infinite ease-in-out;
    }
    
    .playing-animation span:nth-child(2) {
        animation-delay: 0.2s;
    }
    
    .playing-animation span:nth-child(3) {
        animation-delay: 0.4s;
    }
    
    @keyframes sound {
        0%, 100% { height: 30px; }
        50% { height: 60px; }
    }
    
    .player-placeholder p {
        color: var(--light);
        font-size: 1.2rem;
    }
`;
document.head.appendChild(modalStyles);

// Efecto de typing para el subtítulo del hero (opcional)
const subtitle = document.querySelector('.subtitle');
if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Iniciar después de un pequeño delay
    setTimeout(typeWriter, 500);
}

// Lazy loading para imágenes
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
}

// Contador de estadísticas (opcional para CV)
const stats = document.querySelectorAll('.stat-number');
if (stats.length > 0) {
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateStat = () => {
            current += step;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateStat);
            } else {
                stat.textContent = target;
            }
        };
        
        const statObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateStat();
                    statObserver.unobserve(entry.target);
                }
            });
        });
        
        statObserver.observe(stat);
    });
}

console.log('🎵 Corina Web - Cargada exitosamente');
