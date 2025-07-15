// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenu.innerHTML = navMenu.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        if(this.getAttribute('href') === '#') return;
        
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if(navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});

// Hero background image upload functionality
const heroBg = document.getElementById('hero-bg');

// This function would be triggered by your actual file upload UI
function updateHeroBackground(imageUrl) {
    heroBg.src = imageUrl;
}

// Example of how to implement an image upload (you'd need to create the UI)
// document.getElementById('bg-upload').addEventListener('change', function(e) {
//     const file = e.target.files[0];
//     if(file) {
//         const reader = new FileReader();
//         reader.onload = function(event) {
//             updateHeroBackground(event.target.result);
//         }
//         reader.readAsDataURL(file);
//     }
// });

// Set active navigation link based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if(pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', { name, email, subject, message });
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// News Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.news-slider');
    const prevBtn = document.querySelector('.news-prev');
    const nextBtn = document.querySelector('.news-next');
    const newsCards = document.querySelectorAll('.news-card');
    const cardWidth = newsCards[0].offsetWidth + 32; // width + gap
    
    // Scroll to the left
    prevBtn.addEventListener('click', () => {
        slider.scrollBy({
            left: -cardWidth,
            behavior: 'smooth'
        });
    });
    
    // Scroll to the right
    nextBtn.addEventListener('click', () => {
        slider.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
        });
    });
    
    // Hide/show arrows based on scroll position
    slider.addEventListener('scroll', () => {
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        
        if (slider.scrollLeft <= 10) {
            prevBtn.style.opacity = '0.5';
            prevBtn.style.cursor = 'not-allowed';
        } else {
            prevBtn.style.opacity = '1';
            prevBtn.style.cursor = 'pointer';
        }
        
        if (slider.scrollLeft >= maxScroll - 10) {
            nextBtn.style.opacity = '0.5';
            nextBtn.style.cursor = 'not-allowed';
        } else {
            nextBtn.style.opacity = '1';
            nextBtn.style.cursor = 'pointer';
        }
    });
    
    // Initialize arrows
    prevBtn.style.opacity = '0.5';
    prevBtn.style.cursor = 'not-allowed';
});