function initSidebar() {
  const menuLinks = document.querySelectorAll(".sidebar ul li a");
  const sidebarToggle = document.getElementById("sidebar-toggle");

  menuLinks.forEach(link => {
    link.addEventListener("click", function () {
      menuLinks.forEach(a => a.classList.remove("active"));
      this.classList.add("active");
    });
  });

  const currentPath = window.location.pathname;
  menuLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", function () {
      console.log("clicked");
    });
  }
}

document.addEventListener("DOMContentLoaded", initSidebar);

document.addEventListener("turbo:load", initSidebar);
