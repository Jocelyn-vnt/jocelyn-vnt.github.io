    document.addEventListener('DOMContentLoaded', () => {
    // Animation dynamique des gradients mesh
    function animateMeshGradients() {
        const meshElements = document.querySelectorAll('.mesh-gradient');
        
        meshElements.forEach((mesh, index) => {
            // Mouvement aléatoire seulement (pas de changement de couleur)
            setInterval(() => {
                const translateX = (Math.random() - 0.5) * 80;
                const translateY = (Math.random() - 0.5) * 80;
                const scale = 0.9 + Math.random() * 0.2;
                
                mesh.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
            }, 8000 + index * 2000);
        });
    }

    // Effet de parallaxe avec la souris - uniquement pour les formes
    function addParallaxEffect() {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            
            const meshElements = document.querySelectorAll('.mesh-gradient');
            
            meshElements.forEach((mesh, index) => {
                // Mouvement plus prononcé et différent pour chaque forme
                const speedX = (index + 1) * 2; // Vitesse horizontale différente
                const speedY = (index + 1) * 1.5; // Vitesse verticale différente
                
                const moveX = (x - 50) * speedX * 0.1; // Plus réactif au curseur
                const moveY = (y - 50) * speedY * 0.1;
                
                // Rotation basée sur la position de la souris
                const rotation = ((x - 50) * 0.2) + ((y - 50) * 0.1);
                
                // Scale basé sur la distance du centre
                const distanceFromCenter = Math.sqrt(Math.pow(x - 50, 2) + Math.pow(y - 50, 2));
                const scale = 1 + (distanceFromCenter * 0.003);
                
                mesh.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${rotation}deg) scale(${scale})`;
            });
        });
    }

    // Effet de clic pour créer des ondulations
    document.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.style.position = 'fixed';
        ripple.style.width = ripple.style.height = '100px';
        ripple.style.left = e.clientX - 50 + 'px';
        ripple.style.top = e.clientY - 50 + 'px';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'rippleEffect 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '1000';
        
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });

    // Initialisation
    animateMeshGradients();
    addParallaxEffect();
});

// Animation CSS pour l'effet ripple
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);