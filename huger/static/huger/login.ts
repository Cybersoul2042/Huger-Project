document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.icon')?.addEventListener("click", () => ShowPassword())
})

function ShowPassword()
{
    let password = document.getElementById("password")

    if(password?.getAttribute("type") === 'password')
    {
        password?.setAttribute("type", 'text');
    }
    else
    {
        password?.setAttribute("type", 'password');
    }
    
}