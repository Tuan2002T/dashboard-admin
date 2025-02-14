document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".sidebar ul li");
  const sidebarToggle = document.getElementById("sidebar-toggle");

  menuLinks.forEach(li => {
    li.addEventListener("click", function (event) {
      if (this.querySelector("form")) {
        return;
      }
  
      event.preventDefault(); 
      const link = this.querySelector("a");
      if (!link) return;
  
      menuLinks.forEach(i => {
        // i.classList.remove("active-border");
        const a = i.querySelector("a");
        if (a) a.classList.remove("active"); 
      });
  
      // this.classList.add("active-border");
      link.classList.add("active");
    });
  });
  

  sidebarToggle.addEventListener("click", function () {
    console.log("clicked");
  });
});
