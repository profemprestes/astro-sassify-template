// Enhanced page transitions
document.addEventListener('astro:page-load', () => {
  // Add smooth scrolling to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Reveal animations for elements with data-animate attribute
  const animateElements = document.querySelectorAll('[data-animate]');
  if (animateElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const animation = el.dataset.animate || 'fade-in';
          el.classList.add(animation);
          observer.unobserve(el);
        }
      });
    }, {
      threshold: 0.1
    });
    
    animateElements.forEach(el => observer.observe(el));
  }
});