# Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript.

## Features

- Responsive design that works on all devices
- Modern and clean UI
- Smooth scrolling navigation
- Portfolio section with filtering capability
- Animated skill bars
- Contact form
- Social media integration
- Mobile-friendly navigation

## Setup

1. Clone this repository or download the files
2. Replace the placeholder content in `index.html` with your personal information
3. Add your own images to the `images` folder
4. Update the portfolio items in `js/main.js`
5. Customize the colors in `css/style.css` by modifying the CSS variables in the `:root` selector

## Customization

### Adding Portfolio Items

To add new portfolio items, edit the `portfolioItems` array in `js/main.js`:

```javascript
const portfolioItems = [
    {
        id: 1,
        title: 'Your Project Title',
        category: 'web', // or 'app' or any other category
        image: 'images/your-project-image.jpg',
        description: 'Your project description',
        link: 'https://your-project-link.com'
    },
    // Add more items...
];
```

### Changing Colors

To change the color scheme, modify the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --text-color: #your-color;
    --light-bg: #your-color;
    --white: #ffffff;
}
```

### Adding Skills

To add or modify skills, edit the skills section in `index.html`:

```html
<div class="skill">
    <span class="skill-name">Your Skill</span>
    <div class="skill-bar">
        <div class="skill-level" style="width: 85%"></div>
    </div>
</div>
```

## Contact Form

The contact form currently logs the submitted data to the console. To make it functional:

1. Create a server to handle form submissions
2. Update the form submission code in `js/main.js`
3. Add your server endpoint to the form action

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE). 