const routes = ["/home", "/about", "/skills", "/projects", "/contact"];
const pages = document.querySelectorAll("[data-page]");
const navLinks = document.querySelectorAll("[data-route]");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

function currentRoute() {
  const route = window.location.hash.replace("#", "") || "/home";
  return routes.includes(route) ? route : "/home";
}

function renderRoute() {
  const route = currentRoute();

  pages.forEach((page) => {
    page.hidden = page.dataset.page !== route;
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.route === route);
  });

  siteNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

window.addEventListener("hashchange", renderRoute);
renderRoute();
