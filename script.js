// Menu functionality for the travel blog
document.addEventListener('DOMContentLoaded', function() {
    // Get the menu button and create the dropdown container
    const menuButton = document.getElementById('nav-part1');
    const menuContainer = document.createElement('div');
    menuContainer.className = 'dropdown-menu';
    menuContainer.style.display = 'none';
    
    // Create menu content
    menuContainer.innerHTML = `
        <div class="menu-section">
            <a href="index.html" class="menu-item">Home</a>
            <a href="aboutus.html" class="menu-item">About Us</a>
            <div class="menu-item has-submenu">
               <span onclick="toggleSubmenu(this)">Trips</span>
                <div class="submenu" style="display: none;">
                    
                    <a href="trips.html" class="submenu-item">USA</a>
                    <a href="trips.html" class="submenu-item">London</a>
                    <a href="trips.html" class="submenu-item">France</a>
                    <a href="trips.html" class="submenu-item">Azores</a>
                </div>
            </div>
            <a href="book.html" class="menu-item">Book a Demo</a>
            <a href="contactus.html" class="menu-item">Contact Us</a>
        </div>
    `;
    
    // Insert dropdown menu after the navigation
    const nav = document.querySelector('nav');
    nav.parentNode.insertBefore(menuContainer, nav.nextSibling);
    
    // Add toggle functionality to the menu button
    menuButton.addEventListener('click', function(event) {
        event.stopPropagation();
        if (menuContainer.style.display === 'none') {
            menuContainer.style.display = 'block';
        } else {
            menuContainer.style.display = 'none';
        }
    });
    
    // Toggle submenu on click for mobile
    const tripMenu = document.querySelector('.has-submenu');
    if (tripMenu) {
        // For mobile: click to toggle submenu
        tripMenu.addEventListener('click', function(event) {
            event.stopPropagation();
            const submenu = this.querySelector('.submenu');
            if (submenu.style.display === 'none' || submenu.style.display === '') {
                submenu.style.display = 'block';
            } else {
                submenu.style.display = 'none';
            }
        });
        
        // For desktop: hover effect
        if (window.innerWidth > 768) {
            tripMenu.addEventListener('mouseenter', function() {
                this.querySelector('.submenu').style.display = 'block';
            });
            
            tripMenu.addEventListener('mouseleave', function() {
                this.querySelector('.submenu').style.display = 'none';
            });
        }
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!menuButton.contains(event.target) && !menuContainer.contains(event.target)) {
            menuContainer.style.display = 'none';
            
            // Also close any open submenus
            const submenus = document.querySelectorAll('.submenu');
            submenus.forEach(submenu => {
                submenu.style.display = 'none';
            });
        }
    });
    
    // Note: Theme toggle functionality is now handled by theme-handler.js
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            const navPart3 = document.getElementById('nav-part3');
            if (navPart3) {
                navPart3.style.display = 'flex';
            }
        }
    });
});