document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#plan-btn')?.addEventListener('click', () => ScrollToReach("plan"));
    document.querySelector('#about-btn')?.addEventListener('click', () => ScrollToReach("about"));
    document.querySelector('#contact-btn')?.addEventListener('click', () => ScrollToReach("contact"));
    document.querySelector('.scroll-btn')?.addEventListener('click', () => ScrollToReach("navbar-container"));
    document.querySelector('.drop-btn')?.addEventListener('click', () => Dropdown());
    

    window.onscroll = function(){
        let navbar = document.querySelector(".navbar-container");
        let scrollBtn = document.querySelector<HTMLElement>(".scroll-btn");

        if(isInViewport(navbar, true))
        {
            scrollBtn!.style.display = "none"
        }
        else{
            scrollBtn!.style.display = "block"
        }
    }
    
});

function ScrollToReach(pagetype: string)
{
    let page = document.querySelector(`.${pagetype}`)
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

function isInViewport(element:any, partiallyVisible:boolean = false) {
    const { top, left, bottom, right } = element.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
}