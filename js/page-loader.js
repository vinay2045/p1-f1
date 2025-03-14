/**
 * Advanced page loader script
 * Completely prevents any flash of unstyled content (FOUC) and ensures smooth page transitions
 */

// Add loading class to HTML element immediately
document.documentElement.classList.add('loading');

// Apply the correct theme immediately
(function() {
  // Check if a theme is stored in localStorage
  const storedTheme = localStorage.getItem('theme');
  
  // If a theme is stored, apply it immediately
  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
  } else {
    // If no theme is stored, check for system preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDarkScheme.matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }
})();

// Create and insert the skeleton loader based on current page
function createSkeletonLoader() {
  // Determine which page we're on
  const currentPath = window.location.pathname;
  let skeletonHTML = '';
  
  // Common navigation skeleton for all pages
  const navSkeleton = `
    <div class="skeleton-nav">
      <div class="skeleton-nav-left">
        <div class="skeleton-menu-text"></div>
        <div class="skeleton-menu-icon"></div>
      </div>
      <div class="skeleton-logo"></div>
      <div class="skeleton-nav-right">
        <div class="skeleton-menu">
          <div class="skeleton-menu-item"></div>
          <div class="skeleton-menu-item"></div>
          <div class="skeleton-menu-item"></div>
          <div class="skeleton-menu-item"></div>
        </div>
        <div class="skeleton-theme-toggle"></div>
      </div>
    </div>
  `;
  
  // Common footer skeleton for all pages
  const footerSkeleton = `
    <div class="skeleton-footer">
      <div class="skeleton-footer-column">
        <div class="skeleton-footer-title"></div>
        <div class="skeleton-footer-text"></div>
        <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
          <div class="skeleton-theme-toggle"></div>
          <div class="skeleton-theme-toggle"></div>
          <div class="skeleton-theme-toggle"></div>
          <div class="skeleton-theme-toggle"></div>
          <div class="skeleton-theme-toggle"></div>
        </div>
      </div>
      <div class="skeleton-footer-column">
        <div class="skeleton-footer-title"></div>
        <div class="skeleton-footer-links">
          <div class="skeleton-footer-link"></div>
          <div class="skeleton-footer-link"></div>
          <div class="skeleton-footer-link"></div>
          <div class="skeleton-footer-link"></div>
          <div class="skeleton-footer-link"></div>
          <div class="skeleton-footer-link"></div>
        </div>
      </div>
      <div class="skeleton-footer-column">
        <div class="skeleton-footer-title"></div>
        <div class="skeleton-footer-text"></div>
        <div class="skeleton-footer-text"></div>
        <div class="skeleton-footer-text"></div>
      </div>
      <div class="skeleton-footer-column">
        <div class="skeleton-footer-title"></div>
        <div class="skeleton-footer-text"></div>
        <div class="skeleton-footer-form">
          <div class="skeleton-footer-input"></div>
          <div class="skeleton-footer-button"></div>
        </div>
      </div>
    </div>
    <div class="skeleton-footer-bottom">
      <div class="skeleton-footer-copyright"></div>
      <div class="skeleton-footer-copyright"></div>
    </div>
  `;
  
  // Home page skeleton
  if (currentPath.includes('index') || currentPath === '/' || currentPath.endsWith('/')) {
    skeletonHTML = `
      <div class="skeleton-loader">
        <div class="skeleton-container">
          ${navSkeleton}
          
          <div class="skeleton-hero">
            <div class="skeleton-hero-content">
              <div class="skeleton-hero-title"></div>
              <div class="skeleton-hero-subtitle"></div>
              <div class="skeleton-hero-text"></div>
              <div style="margin-top: 2rem; width: 80%; height: 100px; background: linear-gradient(90deg, var(--border-color) 0%, var(--card-bg) 50%, var(--border-color) 100%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 8px;"></div>
            </div>
            <div class="skeleton-hero-highlight">
              <div class="skeleton-hero-highlight-title"></div>
              <div class="skeleton-hero-highlight-button"></div>
            </div>
          </div>
          
          <div class="skeleton-blog-header">
            <div class="skeleton-blog-header-left">
              <div class="skeleton-blog-title"></div>
              <div class="skeleton-blog-subtitle"></div>
            </div>
            <div class="skeleton-blog-header-right">
              <div class="skeleton-blog-description"></div>
              <div class="skeleton-blog-button"></div>
            </div>
          </div>
          
          <div class="skeleton-blog-grid">
            <div class="skeleton-blog-card-large"></div>
            <div class="skeleton-blog-cards-right">
              <div class="skeleton-blog-card-sm"></div>
              <div class="skeleton-blog-card-sm"></div>
            </div>
          </div>
          
          <div class="skeleton-cta">
            <div class="skeleton-cta-title"></div>
            <div class="skeleton-cta-button"></div>
          </div>
          
          ${footerSkeleton}
        </div>
      </div>
    `;
  }
  // About Us page skeleton
  else if (currentPath.includes('aboutus')) {
    skeletonHTML = `
      <div class="skeleton-loader">
        <div class="skeleton-container">
          ${navSkeleton}
          
          <div class="skeleton-page-header">
            <div class="skeleton-page-title"></div>
            <div class="skeleton-page-subtitle"></div>
          </div>
          
          <div class="skeleton-content-card">
            <div class="skeleton-section-title"></div>
            <div class="skeleton-flex-row">
              <div class="skeleton-column">
                <div class="skeleton-paragraph"></div>
                <div class="skeleton-paragraph"></div>
                <div class="skeleton-paragraph"></div>
                <div class="skeleton-paragraph"></div>
              </div>
              <div class="skeleton-column">
                <div class="skeleton-image"></div>
              </div>
            </div>
          </div>
          
          <div class="skeleton-content-card">
            <div class="skeleton-section-title"></div>
            <div class="skeleton-flex-row">
              <div class="skeleton-column">
                <div style="height: 25px; margin-bottom: 1rem; background: linear-gradient(90deg, var(--border-color) 0%, var(--card-bg) 50%, var(--border-color) 100%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 4px;"></div>
                <div class="skeleton-paragraph"></div>
              </div>
              <div class="skeleton-column">
                <div style="height: 25px; margin-bottom: 1rem; background: linear-gradient(90deg, var(--border-color) 0%, var(--card-bg) 50%, var(--border-color) 100%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 4px;"></div>
                <div class="skeleton-paragraph"></div>
              </div>
              <div class="skeleton-column">
                <div style="height: 25px; margin-bottom: 1rem; background: linear-gradient(90deg, var(--border-color) 0%, var(--card-bg) 50%, var(--border-color) 100%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 4px;"></div>
                <div class="skeleton-paragraph"></div>
              </div>
            </div>
          </div>
          
          <div class="skeleton-section-title"></div>
          <div class="skeleton-team-grid">
            <div class="skeleton-team-member"></div>
            <div class="skeleton-team-member"></div>
            <div class="skeleton-team-member"></div>
            <div class="skeleton-team-member"></div>
          </div>
          
          <div class="skeleton-cta">
            <div class="skeleton-cta-title"></div>
            <div class="skeleton-cta-button"></div>
          </div>
          
          ${footerSkeleton}
        </div>
      </div>
    `;
  }
  // Trips page skeleton
  else if (currentPath.includes('trips')) {
    skeletonHTML = `
      <div class="skeleton-loader">
        <div class="skeleton-container">
          ${navSkeleton}
          
          <div class="skeleton-page-header">
            <div class="skeleton-page-title"></div>
            <div class="skeleton-page-subtitle"></div>
          </div>
          
          <div class="skeleton-trip-filter">
            <div class="skeleton-filter-select"></div>
            <div class="skeleton-filter-select"></div>
            <div class="skeleton-filter-select"></div>
          </div>
          
          <div class="skeleton-trip-grid">
            <div class="skeleton-trip-card"></div>
            <div class="skeleton-trip-card"></div>
            <div class="skeleton-trip-card"></div>
            <div class="skeleton-trip-card"></div>
            <div class="skeleton-trip-card"></div>
            <div class="skeleton-trip-card"></div>
          </div>
          
          <div class="skeleton-section-title"></div>
          <div class="skeleton-feature-row">
            <div class="skeleton-feature-item"></div>
            <div class="skeleton-feature-item"></div>
            <div class="skeleton-feature-item"></div>
            <div class="skeleton-feature-item"></div>
          </div>
          
          <div class="skeleton-section-title"></div>
          <div class="skeleton-reviews-container">
            <div class="skeleton-review-item"></div>
            <div class="skeleton-review-item"></div>
            <div class="skeleton-review-item"></div>
          </div>
          
          <div class="skeleton-cta">
            <div class="skeleton-cta-title"></div>
            <div class="skeleton-cta-button"></div>
          </div>
          
          ${footerSkeleton}
        </div>
      </div>
    `;
  }
  // Contact Us page skeleton
  else if (currentPath.includes('contactus')) {
    skeletonHTML = `
      <div class="skeleton-loader">
        <div class="skeleton-container">
          ${navSkeleton}
          
          <div class="skeleton-page-header">
            <div class="skeleton-page-title"></div>
            <div class="skeleton-page-subtitle"></div>
          </div>
          
          <div class="skeleton-content-card">
            <div class="skeleton-flex-row">
              <div class="skeleton-column">
                <div class="skeleton-section-title"></div>
                <div class="skeleton-contact-form">
                  <div class="skeleton-form-group"></div>
                  <div class="skeleton-form-group"></div>
                  <div class="skeleton-form-group"></div>
                  <div class="skeleton-form-textarea"></div>
                  <div class="skeleton-form-button"></div>
                </div>
              </div>
              <div class="skeleton-column">
                <div class="skeleton-section-title"></div>
                <div class="skeleton-contact-info">
                  <div class="skeleton-contact-item"></div>
                  <div class="skeleton-contact-item"></div>
                  <div class="skeleton-contact-item"></div>
                  <div class="skeleton-contact-item"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="skeleton-content-card">
            <div class="skeleton-section-title"></div>
            <div class="skeleton-faq-container">
              <div class="skeleton-faq-item"></div>
              <div class="skeleton-faq-item"></div>
              <div class="skeleton-faq-item"></div>
              <div class="skeleton-faq-item"></div>
            </div>
          </div>
          
          <div class="skeleton-cta">
            <div class="skeleton-cta-title"></div>
            <div class="skeleton-cta-button"></div>
          </div>
          
          ${footerSkeleton}
        </div>
      </div>
    `;
  }
  // Default skeleton for any other page
  else {
    skeletonHTML = `
      <div class="skeleton-loader">
        <div class="skeleton-container">
          ${navSkeleton}
          
          <div class="skeleton-page-header">
            <div class="skeleton-page-title"></div>
            <div class="skeleton-page-subtitle"></div>
          </div>
          
          <div class="skeleton-content-card">
            <div class="skeleton-section-title"></div>
            <div class="skeleton-flex-row">
              <div class="skeleton-column">
                <div class="skeleton-paragraph"></div>
                <div class="skeleton-paragraph"></div>
                <div class="skeleton-paragraph"></div>
              </div>
              <div class="skeleton-column">
                <div class="skeleton-image"></div>
              </div>
            </div>
          </div>
          
          ${footerSkeleton}
        </div>
      </div>
    `;
  }
  
  // Insert the skeleton loader at the beginning of the body
  document.addEventListener('DOMContentLoaded', function() {
    document.body.insertAdjacentHTML('afterbegin', skeletonHTML);
  });
  
  // For immediate insertion if DOM is already loaded
  if (document.readyState !== 'loading') {
    document.body.insertAdjacentHTML('afterbegin', skeletonHTML);
  }
}

// Function to show the page content
function showPage() {
  // Small delay to ensure everything is rendered properly
  setTimeout(function() {
    // Remove loading class to display the page
    document.documentElement.classList.remove('loading');
    // Add loaded class to body to hide the skeleton loader
    document.body.classList.add('loaded');
    
    // Remove the skeleton loader from the DOM after transition
    setTimeout(function() {
      const skeletonLoader = document.querySelector('.skeleton-loader');
      if (skeletonLoader) {
        skeletonLoader.remove();
      }
    }, 300);
  }, 50);
}

// Initialize the skeleton loader
createSkeletonLoader();

// Wait for everything to be fully loaded
window.addEventListener('load', function() {
  // Small delay to ensure everything is rendered properly
  setTimeout(function() {
    showPage();
  }, 50);
});

// Handle page transitions for navigation
document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners to all internal links
  document.querySelectorAll('a[href^="/"]:not([target]), a[href^="./"]:not([target]), a[href^="../"]:not([target]), a[href^="index.html"]:not([target]), a[href^="aboutus.html"]:not([target]), a[href^="contactus.html"]:not([target]), a[href^="trips.html"]:not([target])').forEach(link => {
    link.addEventListener('click', function(e) {
      // Only for internal links
      if (link.hostname === window.location.hostname) {
        // Add loading class back to HTML element before navigation
        document.documentElement.classList.add('loading');
        // Remove loaded class from body to show the skeleton loader
        document.body.classList.remove('loaded');
      }
    });
  });
});

// Handle browser back/forward navigation
window.addEventListener('pageshow', function(event) {
  // If navigated using back/forward buttons
  if (event.persisted) {
    // Show the page immediately
    showPage();
  }
});
