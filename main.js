let menuButton = document.getElementById("menu-button");
let header = document.getElementById("my-header")
let menu  = document.getElementById("my-menu")

function handleClick() {
    menu.style.display = "inline-block";
}


menuButton.addEventListener("click",handleClick);



