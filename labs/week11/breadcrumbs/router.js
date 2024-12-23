// Define the base path for the router
const basePath = "/labs/week11/breadcrumbs";

// Define routes and their titles
const routes = {
  "/": "Home",
  "/searching": "Searching",
  "/searching/linear": "Linear Search",
  "/searching/binary": "Binary Search",
  "/sorting": "Sorting",
  "/sorting/bubble": "Bubble Sort",
  "/sorting/merge": "Merge Sort",
  "/sorting/merge/recursive": "Recursive Merge Sort",
  "/sorting/merge/iterative": "Iterative Merge Sort",
  "/sorting/selection": "Selection Sort",
  "/sorting/insertion": "Insertion Sort",
  "/tree": "Tree",
  "/tree/binary": "Binary Tree",
  "/tree/binary-search": "Binary Search Tree",
};

// Function to navigate to a route
function navigateTo(path) {
  history.pushState({}, "", `${basePath}${path}`);
  updateView();
}

// Update the main view based on the current route
function updateView() {
  const path = window.location.pathname.replace(basePath, "");
  const appDiv = document.getElementById("app");

  // Update page content
  appDiv.innerHTML = `<h1 class="text-2xl font-bold">${routes[path] || "Page Not Found"}</h1>`;

  // Update breadcrumbs
  updateBreadcrumbs(path);
}

// Generate breadcrumbs dynamically
function updateBreadcrumbs(path) {
  const breadcrumbsDiv = document.getElementById("breadcrumbs");
  const parts = path.split("/").filter(Boolean);

  let currentPath = "";
  const breadcrumbLinks = parts.map((part, index) => {
    currentPath += `/${part}`;
    return `<a href="${basePath}${currentPath}" class="hover:text-blue-500" data-link>${routes[currentPath]}</a>`;
  });

  // Render breadcrumbs
  breadcrumbsDiv.innerHTML = `
    <a href="${basePath}/" class="hover:text-blue-500" data-link>Home</a>
    ${breadcrumbLinks.length > 0 ? ` / ${breadcrumbLinks.join(" / ")}` : ""}
  `;
}

// Event delegation for internal navigation
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.getAttribute("href").replace(basePath, ""));
    }
  });

  // Handle browser back/forward navigation
  window.onpopstate = updateView;

  // Initial load
  updateView();
});
