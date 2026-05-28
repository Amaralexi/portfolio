




// Effet de soulèvement des images au hover
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner toutes les images
    const images = document.querySelectorAll('img');
    
    images.forEach(image => {
        // Ajouter les styles de base
        image.style.transition = 'transform 0.3s ease';
        image.style.cursor = 'pointer';
        
        // Événement au survol (mouseenter)
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        // Événement au départ de la souris (mouseleave)
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
