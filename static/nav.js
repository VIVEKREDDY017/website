document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".links a");

    // Function to remove active class from all links
    function removeActiveClass() {
        navLinks.forEach(link => {
            link.classList.remove("active");
        });
    }

    // Function to set active class based on the current URL
    function setActiveLink() {
        const currentPage = window.location.pathname;

        navLinks.forEach(link => {
            if (link.href.includes(currentPage)) {
                removeActiveClass();
                link.classList.add("active");
            }
        });
    }

    // Add click event to each link
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            removeActiveClass();
            this.classList.add("active");
        });
    });

    // Call function to highlight active link on page load
    setActiveLink();
});
