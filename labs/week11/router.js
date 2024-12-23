// Define the routes and corresponding file paths
const routes = {
    '/home': '/labs/week11/pages/home.html',
    '/login': '/labs/week11/pages/login.html',
    '/register': '/labs/week11/pages/register.html',
    '/reset': '/labs/week11/pages/reset.html',
  };
  
  // Function to load content from an HTML file
  async function loadContent(filePath) {
    try {
      const response = await fetch(filePath);
      if (response.ok) {
        const content = await response.text();
        console.log("Content: ", content)
        document.getElementById('app').innerHTML = content;
      } else {
        document.getElementById('app').innerHTML = '<h1 class="text-2xl font-bold">404 - Page Not Found</h1>';
      }
    } catch (error) {
      console.error('Error loading page:', error);
      document.getElementById('app').innerHTML = '<h1 class="text-2xl font-bold">Error loading page</h1>';
    }
  }
  
  // Function to handle routing
  function router() {
    const path = window.location.pathname;
    const filePath = routes[path];
    if (filePath) {
      loadContent(filePath);
    } else {
      document.getElementById('app').innerHTML = '<h1 class="text-2xl font-bold">404 - Page Not Found</h1>';
    }
  }
  
  // Handle navigation clicks
  function handleNavigation(event) {
    if (event.target.matches('[data-link]')) {
      event.preventDefault();
      const targetPath = event.target.getAttribute('href');
      window.history.pushState({}, '', targetPath);
      router();
    }
  }
  
  // Listen for popstate and click events
  window.addEventListener('popstate', router);
  document.addEventListener('click', handleNavigation);
  
  // Initialize the router
  router();
  