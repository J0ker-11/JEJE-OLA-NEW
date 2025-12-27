/* 
const navbar = document.querySelector("#navbar");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");

menu.addEventListener("click", function() {
    navbar.classList.add("active");
})

close.addEventListener("click", function() {
    navbar.classList.remove("active");
})

 */


document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("navbar");
    const closeBtn = nav.querySelector(".close");
    const logo = document.querySelector(".logo");
  
    // create hamburger button
    const menuBtn = document.createElement("button");
    menuBtn.className = "menu-toggle";
    menuBtn.setAttribute("aria-label", "Open menu");
    menuBtn.innerHTML = `<span></span><span></span><span></span>`;
  
    // insert hamburger next to logo
    logo.after(menuBtn);
  
    // open menu
    menuBtn.addEventListener("click", () => {
      nav.classList.add("active");
    });
  
    // close menu
    closeBtn.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
  