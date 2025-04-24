// Portfolio Items Data
const portfolioItems = [
    {
        id: 1,
        title: 'Chess Game',
        category: 'web',
        image: 'images/chess.JPG',
        description: 'An interactive chess game built with HTML, CSS, and JavaScript. Features include move validation, piece highlighting, and game state tracking.',
        link: 'https://atillavatankhah.github.io/chess-game/'
    },
    {
        id: 2,
        title: 'Weather App',
        category: 'app',
        image: 'images/weather.jpg',
        description: 'A real-time weather application that provides current weather conditions, forecasts, and location-based updates.',
        link: 'https://github.com/yourusername/weather-app'
    },
    {
        id: 3,
        title: 'E-commerce Website',
        category: 'web',
        image: 'images/ecommerce.jpg',
        description: 'A fully responsive e-commerce platform with product catalog, shopping cart, and checkout functionality.',
        link: 'https://github.com/yourusername/ecommerce-site'
    },
    {
        id: 4,
        title: 'Task Manager',
        category: 'app',
        image: 'images/task-manager.jpg',
        description: 'A productivity app for managing daily tasks, setting reminders, and tracking progress.',
        link: 'https://atillavatankhah.github.io/chess-game/'
    }
];

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Portfolio Filtering
const portfolioGrid = document.querySelector('.portfolio-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Create portfolio items
function createPortfolioItems(items) {
    portfolioGrid.innerHTML = '';
    items.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="portfolio-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="${item.link}" class="btn primary" target="_blank">View Project</a>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Initial portfolio items
createPortfolioItems(portfolioItems);

// Filter portfolio items
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');
        const filteredItems = filterValue === 'all' 
            ? portfolioItems 
            : portfolioItems.filter(item => item.category === filterValue);
        
        createPortfolioItems(filteredItems);
    });
});

// Contact Form
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the form data to a server
    // For now, we'll just log it to the console
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Skill bars animation
function animateSkillBars() {
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(level => {
        const width = level.style.width;
        level.style.width = '0';
        setTimeout(() => {
            level.style.width = width;
        }, 200);
    });
}

// Animate skill bars when they come into view
const skillsSection = document.querySelector('.skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(skillsSection);

// Add active class to navigation links based on scroll position
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
}); 