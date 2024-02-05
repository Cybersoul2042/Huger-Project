document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#plan-btn')?.addEventListener('click', () => ScrollToReach("plan", "plan-btn"));
    document.querySelector('#project-btn')?.addEventListener('click', () => ScrollToReach("projects", "project-btn"));
    document.querySelector('#about-btn')?.addEventListener('click', () => ScrollToReach("about", "about-btn"));
    document.querySelector('#contact-btn')?.addEventListener('click', () => ScrollToReach("contact", "contact-btn"));
    document.querySelector('.drop-btn')?.addEventListener('click', () => Dropdown());
    
});

function ScrollToReach(pagetype: string, pageButton: string)
{
    let pageBtns = document.querySelectorAll<HTMLElement>('.navbar-page');
    
    pageBtns.forEach(btn => {
        if(btn.id === `${pageButton}`)
        {
            
            btn!.style.borderBottom = "1px solid #a594fd";
            
        }
        else
        {
            btn!.style.borderBottom = "none";
        }
    });
    
    let page = document.getElementById(`${pagetype}`)
    if(pagetype === "home")
    {
        page?.scrollIntoView({
            behavior: "smooth",
            block: "end"
        });
    }
    else
    {
        page?.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}

function Dropdown()
{
    let dropdown = document.getElementById("account-opts")

    if(dropdown!.style.display == 'none')
    {
        dropdown!.style.display = 'block';
        
    }
    else
    {
        dropdown!.style.display = 'none';
    }

    window.onclick = (event) => {
        if (event.target == dropdown) {
            dropdown!.style.display = 'none';
         }
    }
    
}