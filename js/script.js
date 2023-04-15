// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar menu untuk menghilangkan navbar

const menu = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target)) !navbarNav.contains(e.target);

  if (navbarNav.classList.contains("active")) {
    navbarNav.classList.remove("active");
  }
  if (menu.contains(e.target)) {
    navbarNav.classList.add("active");
  }
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!menu.contains(e.target) && navbarNav.contains(e.target)) {
    navbarNav.classList.add("active");
  }
});
