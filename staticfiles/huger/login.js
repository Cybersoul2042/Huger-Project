document.addEventListener("DOMContentLoaded", () => {
    var _a, _b;
    (_a = document.querySelector('#icon1')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => ShowPassword("password"));
    (_b = document.querySelector('#icon2')) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => ShowPassword("confirm-password"));
});
function ShowPassword(inputtype) {
    console.log("clicked");
    let password = document.getElementById(`${inputtype}`);
    if ((password === null || password === void 0 ? void 0 : password.getAttribute("type")) === 'password') {
        password === null || password === void 0 ? void 0 : password.setAttribute("type", 'text');
    }
    else {
        password === null || password === void 0 ? void 0 : password.setAttribute("type", 'password');
    }
}
//# sourceMappingURL=login.js.map