document.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".new-plan-btn")?.addEventListener('click', NewPlanForm)
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