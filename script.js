// Add event listener to navigation toggle
document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
});

// Add event listener to hero section button
document.querySelector('.btn-cta').addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

// Add event listener to project list items
document.querySelectorAll('.project-list li').forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Add event listener to contact section buttons
document.querySelectorAll('.btn-email, .btn-linkedin, .btn-github').forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // Add your own functionality here, e.g. open a new tab or send an email
    });
});

// Add animation to hero section
document.querySelector('#hero').addEventListener('scroll', () => {
    const heroSection = document.querySelector('#hero');
    const heroHeight = heroSection.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > heroHeight / 2) {
        heroSection.classList.add('animate');
    } else {
        heroSection.classList.remove('animate');
    }
});

// Add animation to project list items
document.querySelectorAll('.project-list li').forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.classList.add('animate');
    });

    item.addEventListener('mouseout', () => {
        item.classList.remove('animate');
    });
});