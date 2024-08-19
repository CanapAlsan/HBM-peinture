
    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.getElementById('menu-toggle');
        const menuItems = document.querySelectorAll('.items a');

        menuItems.forEach(function(item) {
            item.addEventListener('click', function() {
                // Décocher la case à cocher pour fermer le menu
                menuToggle.checked = false;
            });
        });
    });
