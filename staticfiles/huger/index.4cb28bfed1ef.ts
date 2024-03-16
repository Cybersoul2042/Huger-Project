document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#pricing-btn')?.addEventListener('click', () => ScrollToReach("pricing"));
    document.querySelector('#about-btn')?.addEventListener('click', () => ScrollToReach("about"));
    document.querySelector('#contact-btn')?.addEventListener('click', () => ScrollToReach("contact"));
    document.querySelector('.scroll-btn')?.addEventListener('click', () => ScrollToReach("navbar-container"));
    document.querySelector('.slider-btn')?.addEventListener('click', () => SlideBar());
    

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
    console.log("click")
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
            block: "start"
        });
    }
}

function SlideBar()
{
    let slider = document.getElementById("account-opts")

    console.log("slider")

    if(slider!.style.transform == 'translate(100%, 0px)')
    {
        slider!.style.transform = 'translate(0px, 0px)';
        
    }
    else
    {
        slider!.style.transform = 'translate(100%, 0px)';
    }

    window.onclick = (event) => {
        if (event.target == slider) {
            slider!.style.display = 'none';
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