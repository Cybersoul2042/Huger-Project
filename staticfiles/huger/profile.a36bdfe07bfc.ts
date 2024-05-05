document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".new-plan-btn")?.addEventListener('click', NewPlanForm);
    document.querySelector('#search-input')?.addEventListener('input', SearchFor);
    document.querySelector('.account-name')?.addEventListener('click', Options);



})

function NewPlanForm()
{
    let modal = document.querySelector<HTMLElement>('.modal');
    let close_btn = document.querySelector<HTMLElement>('.close-btn');

    modal!.style.display = 'block';
    close_btn!.onclick = () => {
        modal!.style.display = 'none';
    }

}

function Options(){
    const modal = document.querySelector('.account-modal') as HTMLElement;

    if(modal!.style.display === 'none')
    {
        modal!.style.display = 'block';
    }
    else
    {
        modal!.style.display = 'none';
    }
}

function SearchFor(){
    const searchInput = document.getElementById('search-input') as HTMLInputElement;

    const searchValue = searchInput!.value.toLowerCase();
    const plans = document.querySelectorAll('.plan-page');


    plans.forEach((plan:HTMLElement) => {
        console.log(searchValue)
        let planName = plan.querySelector('.plan-name')!.innerHTML;
        console.log(planName)
        if(planName?.toLowerCase().includes(searchValue))
        {
            plan!.style.display = "";
        }
        else{
            plan!.style.display = "none";
        }
    });
}

function CopyLink(){
    let link = document.getElementById('url');
    navigator.clipboard.writeText(link?.innerHTML!);
    let message = document.querySelector('.copy-text') as HTMLElement;

    message.style.transform = "translateX(0)";
    setTimeout(onTimerComplete, 3000);
}

function onTimerComplete(){
    console.log('panir')
    let message = document.querySelector('.copy-text') as HTMLElement;

    message.style.transform = "translateX(-100%)";
}