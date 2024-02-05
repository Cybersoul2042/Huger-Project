document.addEventListener("DOMContentLoaded", () => {
    var _a, _b, _c, _d, _e;
    (_a = document.querySelector('#plan-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => ScrollToReach("plan", "plan-btn"));
    (_b = document.querySelector('#project-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => ScrollToReach("projects", "project-btn"));
    (_c = document.querySelector('#about-btn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => ScrollToReach("about", "about-btn"));
    (_d = document.querySelector('#contact-btn')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => ScrollToReach("contact", "contact-btn"));
    (_e = document.querySelector('.drop-btn')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', () => Dropdown());
});
function ScrollToReach(pagetype, pageButton) {
    let pageBtns = document.querySelectorAll('.navbar-page');
    pageBtns.forEach(btn => {
        if (btn.id === `${pageButton}`) {
            btn.style.borderBottom = "1px solid #a594fd";
        }
        else {
            btn.style.borderBottom = "none";
        }
    });
    let page = document.getElementById(`${pagetype}`);
    if (pagetype === "home") {
        page === null || page === void 0 ? void 0 : page.scrollIntoView({
            behavior: "smooth",
            block: "end"
        });
    }
    else {
        page === null || page === void 0 ? void 0 : page.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}
function Dropdown() {
    let dropdown = document.getElementById("account-opts");
    if (dropdown.style.display == 'none') {
        dropdown.style.display = 'block';
    }
    else {
        dropdown.style.display = 'none';
    }
    window.onclick = (event) => {
        if (event.target == dropdown) {
            dropdown.style.display = 'none';
        }
    };
}
//# sourceMappingURL=index.js.51df5c01d961.map