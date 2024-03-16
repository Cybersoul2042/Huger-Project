document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#icon1')?.addEventListener("click", () => ShowPassword("password"))
    document.querySelector('#icon2')?.addEventListener("click", () => ShowPassword("confirm-password"))
})

function ShowPassword(inputtype:string)
{
    console.log("clicked")
    let password = document.getElementById(`${inputtype}`)


    if(password?.getAttribute("type") === 'password')
    {
        password?.setAttribute("type", 'text');
    }
    else
    {
        password?.setAttribute("type", 'password');
    }
    
}