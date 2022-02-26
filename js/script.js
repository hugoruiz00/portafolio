/* Open-close menu*/
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", navToggle);

function navToggle() {

    const navList = document.querySelector(".nav__links");
    navList.classList.toggle("open");
}

/** Close menu when click */
const links = document.querySelectorAll(".link_menu");
links.forEach(menu_link => {
    menu_link.addEventListener("click", closeMenu);
});

function closeMenu() {
    const navList = document.querySelector(".nav__links");
    navList.classList.remove("open");
}

/* Change active link*/
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", changeActiveLink);

function changeActiveLink() {
    let scrollPosition = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (
            scrollPosition > sectionTop &&
            scrollPosition <= sectionTop + sectionHeight
        ) {
            document.querySelector(".nav__links a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".nav__links a[href*=" + sectionId + "]").classList.remove("active");
        }
    });
}

/**Execute popup */
function executePopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}