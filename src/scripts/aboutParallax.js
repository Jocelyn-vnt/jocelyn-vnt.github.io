// src/scripts/aboutParallax.js - Script parallax optimisé pour la page about
document.addEventListener("DOMContentLoaded", () => {
    // Vérifier si on est sur la page about
    const isAboutPage = window.location.pathname.includes('/about');
    if (!isAboutPage) return;

    // Variables pour optimiser les performances
    let ticking = false;
    let scrollY = 0;
    
    // Cache des éléments parallax pour éviter les requêtes DOM répétées
    const parallaxElements = Array.from(document.querySelectorAll(".parallax"));
    
    console.log(`🚀 Parallax initialized with ${parallaxElements.length} elements`);

    // Fonction pour mettre à jour les éléments parallax
    function updateParallax() {
        scrollY = window.scrollY;
        
        parallaxElements.forEach((element) => {
            const speed = parseFloat(element.getAttribute("data-speed")) || -0.5;
            
            // Calculer le déplacement basé sur le scroll et la vitesse
            const yPos = scrollY * speed;
            
            // Appliquer la transformation avec translate3d pour de meilleures performances GPU
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
        
        ticking = false;
    }

    // Event listener optimisé pour le scroll avec throttling
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    // Ajouter l'event listener pour le scroll
    window.addEventListener('scroll', onScroll, { passive: true });

    // Animation d'entrée pour les éléments parallax
    function initParallaxElements() {
        parallaxElements.forEach((element, index) => {
            // Optimiser pour les performances
            element.style.willChange = 'transform';
            element.style.backfaceVisibility = 'hidden';
            element.style.perspective = '1000px';
            
            // Définir l'état initial
            element.style.opacity = '0';
            element.style.transition = 'opacity 1s ease-in-out';
            
            // Animation d'entrée décalée
            setTimeout(() => {
                element.style.opacity = '1';
            }, index * 200 + 500);
        });
    }

    // Effet de parallax amélioré avec interpolation
    let targetScrollY = 0;
    let currentScrollY = 0;
    
    function smoothParallax() {
        // Interpolation douce pour un effet plus fluide
        currentScrollY += (targetScrollY - currentScrollY) * 0.1;
        
        parallaxElements.forEach((element) => {
            const speed = parseFloat(element.getAttribute("data-speed")) || -0.5;
            const yPos = currentScrollY * speed;
            
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
        
        requestAnimationFrame(smoothParallax);
    }
    
    // Mise à jour de la position target lors du scroll
    window.addEventListener('scroll', () => {
        targetScrollY = window.scrollY;
    }, { passive: true });

    // Effet de "pulse" subtil basé sur la vitesse de scroll
    let lastScrollY = 0;
    let scrollSpeed = 0;
    
    function calculateScrollSpeed() {
        const currentScrollY = window.scrollY;
        scrollSpeed = Math.abs(currentScrollY - lastScrollY);
        lastScrollY = currentScrollY;
        
        // Appliquer un effet visuel basé sur la vitesse
        if (scrollSpeed > 3) {
            parallaxElements.forEach((element, index) => {
                const intensity = Math.min(scrollSpeed * 0.01, 0.1);
                element.style.filter = `brightness(${1 + intensity}) contrast(${1 + intensity * 0.5})`;
                
                setTimeout(() => {
                    element.style.filter = 'brightness(1) contrast(1)';
                }, 150);
            });
        }
        
        requestAnimationFrame(calculateScrollSpeed);
    }

    // Effet au redimensionnement de la fenêtre
    function handleResize() {
        // Recalculer les positions si nécessaire
        updateParallax();
    }
    
    window.addEventListener('resize', handleResize, { passive: true });

    // Fonction pour debug (à supprimer en production)
    function debugParallax() {
        if (window.location.search.includes('debug=true')) {
            setInterval(() => {
                console.log({
                    scrollY: window.scrollY,
                    elementsCount: parallaxElements.length,
                    scrollSpeed: scrollSpeed
                });
            }, 1000);
        }
    }

    // Initialisation
    initParallaxElements();
    smoothParallax(); // Démarrer l'animation fluide
    calculateScrollSpeed(); // Démarrer le calcul de vitesse
    debugParallax(); // Debug optionnel
    
    // Mettre à jour une première fois
    updateParallax();

    // Message de confirmation
    console.log("✨ About page parallax system fully loaded!");
    
    // Exposer une fonction globale pour contrôler le parallax (optionnel)
    window.aboutParallax = {
        update: updateParallax,
        elements: parallaxElements,
        disable: () => {
            window.removeEventListener('scroll', onScroll);
            parallaxElements.forEach(el => {
                el.style.transform = 'translate3d(0, 0, 0)';
            });
        },
        enable: () => {
            window.addEventListener('scroll', onScroll, { passive: true });
        }
    };
});