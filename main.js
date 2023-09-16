let menuButton = document.getElementById("menu-button");
let header = document.getElementById("my-header")
let menu  = document.getElementById("my-menu")
let myBody = document.getElementsByTagName("body");
let cv = document.getElementById("cv-download")

function handleClick() {
    if(menu.style.display === "none"){
      menu.style.display = "inline-block"
    }else{
        menu.style.display = "none"
    }
}

function openLink() {
    window.open("https://drive.google.com/drive/folders/1NyCyxZoRyDtnG7lVNNauCqKAT2aQbFUK?usp=sharing","_blank");
}

cv.addEventListener("click", openLink);
menuButton.addEventListener("click",handleClick);



