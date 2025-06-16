document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const projectsGrid = document.getElementById('projects-grid');
    const noProjectsMessage = document.getElementById('no-projects');
    
    let currentFilter = 'all';
    
    // Fonction pour filtrer les projets
    function filterProjects(category) {
        let visibleCount = 0;
        
        // Phase 1: Masquer les cartes qui ne correspondent pas
        projectCards.forEach((card, index) => {
            const cardCategory = card.getAttribute('data-category');
            const shouldShow = category === 'all' || cardCategory === category;
            
            if (shouldShow) {
                visibleCount++;
                // Retarder l'affichage pour créer un effet en cascade
                setTimeout(() => {
                    card.classList.remove('filtering-out', 'hidden');
                    card.classList.add('filtering-in', 'cascade-enter');
                }, index * 50);
            } else {
                card.classList.remove('filtering-in', 'cascade-enter');
                card.classList.add('filtering-out');
                // Masquer complètement après l'animation
                setTimeout(() => {
                    card.classList.add('hidden');
                }, 400);
            }
        });
        
        // Afficher/masquer le message "aucun projet"
        setTimeout(() => {
            if (visibleCount === 0) {
                noProjectsMessage.classList.remove('hidden');
                projectsGrid.style.display = 'none';
            } else {
                noProjectsMessage.classList.add('hidden');
                projectsGrid.style.display = 'grid';
            }
        }, 200);
    }
    
    // Fonction pour mettre à jour l'état actif des boutons
    function updateActiveButton(activeButton) {
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        activeButton.classList.add('active');
    }
    
    // Ajouter les événements de clic aux boutons de filtre
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Ne rien faire si c'est déjà le filtre actuel
            if (filter === currentFilter) return;
            
            currentFilter = filter;
            updateActiveButton(this);
            filterProjects(filter);
            
            // Effet visuel sur le bouton cliqué
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Animation d'entrée initiale
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('cascade-enter');
        }, index * 100);
    });
    
    // Effet de parallaxe sur le titre
    const portfolioText = document.getElementById("portfolio-text");
    const designText = document.getElementById("design-text");
    const container = document.querySelector("main");

    if (container && portfolioText && designText) {
        container.addEventListener("mousemove", (e) => {
            const rect = container.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            portfolioText.style.transform = `translate(${x * 15}px, ${y * 15}px)`;
            designText.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
        });
    }
});