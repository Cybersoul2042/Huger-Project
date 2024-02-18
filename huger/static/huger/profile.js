document.addEventListener("DOMContentLoaded", function () {
    var _a;
    (_a = document.querySelector(".new-plan-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', NewPlanForm);
});
function NewPlanForm() {
    let modal = document.querySelector('.modal');
    let close_btn = document.querySelector('.close-btn');
    modal.style.display = 'block';
    close_btn.onclick = () => {
        modal.style.display = 'none';
    };
}
//# sourceMappingURL=profile.js.map