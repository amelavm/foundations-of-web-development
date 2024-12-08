const routes = {
    '/': 'Welcome to the Home Page!',
    '/user/:id': id => `User Profile: Welcome, User ${id}!`,
    '/about': 'About Us: This is a simple SPA example.',
    '/contact': 'Contact Us: Send us an email at contact@example.com.',
  };
  
function navigateTo(url) {
    history.pushState(null, null, url); 
    renderPage(); 
}

function renderPage() {
    const path = window.location.pathname;
    if (path.startsWith('/user/')) {
        const userId = path.split('/')[2];
        document.getElementById('app').innerHTML = routes['/user/:id'](userId);
    } else {
        const content = routes[path] || '404: Page Not Found';
        document.getElementById('app').innerHTML = content;
    }
}

function updateActiveLink() {
    document.querySelectorAll('[data-link]').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === window.location.pathname);
    });
}

document.querySelectorAll('[data-link]').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); 
        navigateTo(event.target.getAttribute('href'));
        updateActiveLink();

    });
});

window.onpopstate = renderPage;

renderPage();
