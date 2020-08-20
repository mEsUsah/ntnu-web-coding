const dots = document.querySelector("[data-blink]");
if (dots){
    function toggleDots(){
        dots.classList.toggle("is-active");
    }
    setInterval(toggleDots,450);
}