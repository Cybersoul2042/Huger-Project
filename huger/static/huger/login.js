document.addEventListener("DOMContentLoaded", () => {
    var _a;
    (_a = document.querySelector('.icon')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => ShowPassword());
});
function ShowPassword() {
    let password = document.getElementById("password");
    if ((password === null || password === void 0 ? void 0 : password.getAttribute("type")) === 'password') {
        password === null || password === void 0 ? void 0 : password.setAttribute("type", 'text');
    }
    else {
        password === null || password === void 0 ? void 0 : password.setAttribute("type", 'password');
    }
}
//# sourceMappingURL=login.js.map