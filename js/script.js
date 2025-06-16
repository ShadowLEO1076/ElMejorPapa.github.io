document.addEventListener('DOMContentLoaded', function() {
    // Cursor personalizado
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Efecto hover en enlaces y botones
        const hoverElements = document.querySelectorAll('a, button, .gallery-item, .timeline-content');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
            });
        });
    });

    // Menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navbar.classList.remove('active');
        });
    });

    // Scroll suave para enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Botón para volver arriba
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    // Efectos de aparición al hacer scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.timeline-item, .gallery-item, .thanks-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Inicializar elementos con opacidad 0 para la animación
    document.querySelectorAll('.timeline-item, .gallery-item, .thanks-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar una vez al cargar

    // Reproducir video al hacer scroll hasta él
    const video = document.querySelector('video');
    if (video) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.5 });
        
        videoObserver.observe(video);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // ======================
    // 1. CURSOR ELEGANTE (más simple)
    // ======================
    //const cursor = document.querySelector('.cursor');
    
  // document.addEventListener('mousemove', (e) => {
      //  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
   // });

    // Efecto hover sutil
    document.querySelectorAll('a, button, .interactivo').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });

    // ======================
    // 2. NAVEGACIÓN PROFESIONAL
    // ======================
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');
    
    // Cambio de color al hacer scroll
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        
        // Resaltado de sección activa
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // ======================
    // 3. ANIMACIONES SUTILES
    // ======================
    // Efecto de aparición suave
    const animateOnScroll = () => {
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            const elPosition = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elPosition < windowHeight - 100) {
                el.classList.add('animated');
            }
        });
    };
    
    // Configurar elementos animables
    document.querySelectorAll('.timeline-item, .gallery-item, .thanks-card').forEach(el => {
        el.classList.add('animate-on-scroll');
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // ======================
    // 4. EFECTOS HOVER ELEGANTES
    // ======================
    // Efecto hover en tarjetas (sin giro)
    document.querySelectorAll('.timeline-content, .thanks-card, .message-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });
    });

    // ======================
    // 5. SCROLL SUAVE MEJORADO
    // ======================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ======================
    // 6. EFECTO PARALLAX SUAVE
    // ======================
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrollValue = window.scrollY;
            hero.style.backgroundPositionY = `${scrollValue * 0.3}px`;
        });
    }

    // ======================
    // 7. INTERACTIVIDAD GALERÍA
    // ======================
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            // Remover activo de otros items
            document.querySelectorAll('.gallery-item').forEach(i => {
                i.classList.remove('active');
            });
            
            // Activar este item
            this.classList.add('active');
            
            // Efecto de zoom suave
            const img = this.querySelector('img');
            img.style.transform = 'scale(1.05)';
            setTimeout(() => {
                img.style.transform = 'scale(1)';
            }, 300);
        });
    });
});