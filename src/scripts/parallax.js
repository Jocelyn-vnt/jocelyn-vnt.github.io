// src/scripts/parallax.js - VERSION AMÉLIORÉE
document.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    
    document.querySelectorAll(".parallax").forEach((element) => {
        const speed = parseFloat(element.getAttribute("data-speed"));
        
        // Calcul du déplacement parallax
        const yPos = scrolled * speed;
        
        // Application de la transformation
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Ajout d'un effet smooth scroll pour une meilleure expérience
document.addEventListener("DOMContentLoaded", () => {
    // S'assurer que les éléments parallax sont visibles
    const parallaxElements = document.querySelectorAll(".parallax");
    
    parallaxElements.forEach((element, index) => {
        // Ajouter une animation d'entrée décalée
        element.style.animationDelay = `${index * 0.2}s`;
        element.classList.add("animate-slideIn");
    });
    
    // Optimisation des performances avec throttle
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.scrollY;
        
        document.querySelectorAll(".parallax").forEach((element) => {
            const speed = parseFloat(element.getAttribute("data-speed"));
            const yPos = scrolled * speed;
            
            // Utilisation de transform3d pour de meilleures performances
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
        
        ticking = false;
    }
    
    // Remplace l'ancien event listener par une version optimisée
    document.removeEventListener("scroll", updateParallax);
    
    document.addEventListener("scroll", () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
});