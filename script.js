
    document.addEventListener('DOMContentLoaded', function() {
        // Auto-update the current year in the footer
        document.getElementById('currentYear').textContent = new Date().getFullYear();
        
        // Mobile Menu Toggle
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('show-menu');
        });

        // Close mobile menu on link click
        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('show-menu');
            });
        });

        // Smooth Scroll
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

        // Animation on Scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('animate-slide-left')) {
                        entry.target.style.animationPlayState = 'running';
                    } else if (entry.target.classList.contains('animate-slide-right')) {
                        entry.target.style.animationPlayState = 'running';
                    } else if (entry.target.classList.contains('animate-slide-up')) {
                        entry.target.style.animationPlayState = 'running';
                    } else {
                        entry.target.classList.add('animate-fade-in');
                    }
                }
            });
        }, { threshold: 0.1 });

        // Apply animations on scroll to sections
        document.querySelectorAll('section').forEach((section) => {
            observer.observe(section);
        });
        
        // Add scroll animations to cards
        document.querySelectorAll('.card-hover').forEach((card, index) => {
            if (index % 2 === 0) {
                card.classList.add('animate-slide-left');
                card.style.animationPlayState = 'paused';
            } else {
                card.classList.add('animate-slide-right');
                card.style.animationPlayState = 'paused';
            }
            observer.observe(card);
        });
        
        // Animate progress circles
        const circles = document.querySelectorAll('.progress');
        circles.forEach(circle => {
            const target = circle.getAttribute('data-target');
            const percentage = parseFloat(target);
            const circumference = 282.743; // Circumference for r = 45
            const offset = circumference * (1 - percentage / 100);
            // Trigger animation with a slight delay for a smoother effect
            setTimeout(() => {
                circle.style.strokeDashoffset = offset;
            }, 300);
        });
        
        // Initialize particles.js for background effect
        if (typeof particlesJS !== 'undefined') {
            particlesJS("particles-js", {
                "particles": {
                    "number": {
                        "value": 60,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 3,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
        }
        
        
        function setVH() {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
        
        setVH();
        window.addEventListener('resize', setVH);
    });