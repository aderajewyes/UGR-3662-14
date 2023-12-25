document.addEventListener("DOMContentLoaded", function() {
    
    document.querySelector(".navbar-toggler").addEventListener("click", function() {
        document.querySelector(".navbar-collapse").classList.toggle("show");
    });

    
    document.querySelectorAll(".navbar-nav a").forEach(function(item) {
        item.addEventListener("click", function() {
            document.querySelector(".navbar-collapse").classList.remove("show");
        });
    });

    
    document.querySelectorAll(".dropdown-toggle").forEach(function(item) {
        item.addEventListener("click", function() {
            this.nextElementSibling.classList.toggle("show");
        });
    });

    document.querySelectorAll(".dropdown-menu a").forEach(function(item) {
        item.addEventListener("click", function() {
            this.closest(".dropdown-menu").classList.remove("show");
        });
    });
});
