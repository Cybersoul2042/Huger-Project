var _a, _b, _c, _d;
(_a = document.querySelector('#pricing-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => ScrollToReach("pricing"));
(_b = document.querySelector('#about-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => ScrollToReach("about"));
(_c = document.querySelector('#contact-btn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => ScrollToReach("contact"));
(_d = document.querySelector('.scroll-btn')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => ScrollToReach("navbar-container"));
window.onscroll = function () {
    let navbar = document.querySelector(".navbar-container");
    let scrollBtn = document.querySelector(".scroll-btn");
    if (isInViewport(navbar, true)) {
        scrollBtn.style.display = "none";
    }
    else {
        scrollBtn.style.display = "block";
    }
};
function ScrollToReach(pagetype) {
    let page = document.querySelector(`.${pagetype}`);
    if (pagetype === "home") {
        page === null || page === void 0 ? void 0 : page.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        });
    }
    else {
        page === null || page === void 0 ? void 0 : page.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        });
    }
}
function isInViewport(element, partiallyVisible = false) {
    const { top, left, bottom, right } = element.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
        ? ((top > 0 && top < innerHeight) ||
            (bottom > 0 && bottom < innerHeight)) &&
            ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
        : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
}
//# sourceMappingURL=index.js.map