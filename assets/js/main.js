/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*===== MENU SHOW ========*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click",() => {
        navMenu.classList.add("show-menu");
    });
}

/*====== MENU HIDDEN ======*/
/* Validate if contant exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
  });
}

/*============= REMOVE MENU MOBILE ================*/
const navlink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    //when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
}
navlink.forEach((n)  => n.addEventListener("click", linkAction));

/*============= ACCORDION SKILLS =================*/
const skillsContent = document.getElementsByClassName("skills__content");
const skills__header = document.querySelectorAll(".skills__header");

function toggleskills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i< skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close"; 
    }

    if (itemClass === "skills__content skills__close") {
        this.parentNode.className = "skills__content skills__open";
    }
}

skills__header.forEach((el) => {
    el.addEventListener("click", toggleskills);
});

/*================= QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
        const target = document.querySelector("qualification__active");
        });
        target.classList.remove("qualification__active");

        tabs.forEach((tab) => {
            tab.classList.add("qualification__active");
        });
        tab.classList.remove("qualification__active");
    });
});

/*==================== SERVICES MODAL ==================*/
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function(modalClick) {
    modalViews[modalClick].classList.add("active-modal");   
};

modalBtns.forEach((modalBtns, index) => {
    modalBtns.addEventListener("click", () => {
        modal(index);
    });
});

modalCloses.forEach((modalClose, index) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove("active-modal");
        });
    });
});    

/*====================== PORTFOLIO SWIPER =====================*/
var swiperPortfolio = new swiper(".portfolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/*================== SCROLL SECTION ACTIVE LINK =================*/
const section = document.querySelectorAll("section[id}");

function scrollactive() {
    constscrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            Document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.add("active-link"); 
    }else {
        document
            .querySelector(".nav__menu a[href*=" + sectionId + "]" )
            .classList.remove("active-link"); 
        }
    });
}
window.addEventListener("scroll", scrollActive);

/*===================== CHANGE BACKGROUND HEADER ==================*/
function scrollHeader() {
    const nav = document.getElementById("header");
    //When the scroll is greater than 200 viewport height, addthe scroll-header class to the header tag
    if (this.scrollY>= 80) nav.classList.add("show-scroll");
    else scrollup.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollHeader);

/*====================== SHOW SCROLL UP =================*/
function scrollup() {
    const scrollup = document.getElementById("scroll-up");
    //when thescroll is heghe than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollup.classList.add("show-scroll");
    else scrollup.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollup);

/*=================== DARK LIGHT THEME ===================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// previously selected topic(if user selected)
const selectedtTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// we obtain the current theme that the interface has bay vadating the dark-theme class
const getCurrentTheme = () =>
        document.body.classList.contains(darkTheme) ?"dark" : "light";
        const getCurrentIcon = () =>
        themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// we validate if the user previouly chose a topic
if(selectedtTheme) {
    // if the validation is fulfiled we ask what the issue was to know if we activated or deactived the dark
    document.body.classList[selectedtTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeButton.classList[selectedIcon ==="uil-moon" ? "add" : "remove"](
        iconTheme
    );
}        

// Active / deactive the theme manually with the button
themeButton.addEventListener("click", () => {
    //Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    //we save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme",getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});
