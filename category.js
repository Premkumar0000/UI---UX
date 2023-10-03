window.addEventListener("load", function() {
    const logoIntro = document.querySelector(".logo-intro");
    const content = document.querySelector(".content");

    setTimeout(function() {
        logoIntro.style.display = "none";
        content.style.opacity = "1";
        content.style.transform = "translateY(0)";
    }, 4000);
});