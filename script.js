// Navigation switching
const navLinks = document.querySelectorAll(".nav-links a");
const pages = document.querySelectorAll(".page");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));

    // Hide all pages
    pages.forEach(page => page.classList.remove("active"));
    navLinks.forEach(l => l.classList.remove("active"));

    // Show target page
    target.classList.add("active");
    link.classList.add("active");

    // Scroll to top
    window.scrollTo(0,0);
  });
});
