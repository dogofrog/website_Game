export function initNavbar() {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("text-yellow-300"));
      link.classList.add("text-yellow-300");
    });
  });
}
