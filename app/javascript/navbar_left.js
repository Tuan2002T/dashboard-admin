document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".sidebar ul li a");
  const sidebarToggle = document.getElementById("sidebar-toggle");

  menuLinks.forEach(link => {
    link.addEventListener("click", function () {
      menuLinks.forEach(a => a.classList.remove("active"));

      this.classList.add("active");

    });
  });

  document.addEventListener("turbo:load", function () {
    const currentPath = window.location.pathname;
    
    menuLinks.forEach(link => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", function () {
      console.log("clicked");
    });
  }
});
