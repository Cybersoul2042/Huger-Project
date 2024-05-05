document.addEventListener("DOMContentLoaded", () => {
    var _a, _b, _c;
    (_a = document.querySelector(".new-plan-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', NewPlanForm);
    (_b = document.querySelector('#search-input')) === null || _b === void 0 ? void 0 : _b.addEventListener('input', SearchFor);
    (_c = document.querySelector('.account-name')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', Options);
});
function NewPlanForm() {
    let modal = document.querySelector('.modal');
    let close_btn = document.querySelector('.close-btn');
    modal.style.display = 'block';
    close_btn.onclick = () => {
        modal.style.display = 'none';
    };
}
function Options() {
    const modal = document.querySelector('.account-modal');
    if (modal.style.display === 'none') {
        modal.style.display = 'block';
    }
    else {
        modal.style.display = 'none';
    }
}
function SearchFor() {
    const searchInput = document.getElementById('search-input');
    const searchValue = searchInput.value.toLowerCase();
    const plans = document.querySelectorAll('.plan-page');
    plans.forEach((plan) => {
        console.log(searchValue);
        let planName = plan.querySelector('.plan-name').innerHTML;
        console.log(planName);
        if (planName === null || planName === void 0 ? void 0 : planName.toLowerCase().includes(searchValue)) {
            plan.style.display = "";
        }
        else {
            plan.style.display = "none";
        }
    });
}
function CopyLink() {
    let link = document.getElementById('url');
    navigator.clipboard.writeText(link === null || link === void 0 ? void 0 : link.innerHTML);
    let message = document.querySelector('.copy-text');
    message.style.transform = "translateX(0)";
    setTimeout(onTimerComplete, 3000);
}
function onTimerComplete() {
    console.log('panir');
    let message = document.querySelector('.copy-text');
    message.style.transform = "translateX(-100%)";
}
//# sourceMappingURL=profile.js.map