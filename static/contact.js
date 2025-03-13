document.addEventListener("DOMContentLoaded", function () {
    let menu = document.querySelector(".dropdown");
    let openMenu = document.querySelector(".hamburg");
    let closeMenu = document.querySelector(".cancel");

    // ✅ Open the Mobile Menu
    openMenu.addEventListener("click", function () {
        menu.style.display = "block";
    });

    // ✅ Close the Mobile Menu
    closeMenu.addEventListener("click", function () {
        menu.style.display = "none";
    });
});
