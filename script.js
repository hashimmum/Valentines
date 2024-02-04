const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesbtn = document.querySelector(".yes-button");
const nobtn = document.querySelector(".no-button");

let yesClickedOnce = false;

yesbtn.addEventListener("click", () => {
    if (!yesClickedOnce) {
        question.innerHTML = "Do you want to be my Valentines?";
        gif.src = "second.gif";
        yesClickedOnce = true;
    } else {
        question.innerHTML = "I LOVE YOU!! made with love by hashim!";
        gif.src = "third.gif"; 
    }
});

nobtn.addEventListener("mouseover", () => {
    const nobtnRect = nobtn.getBoundingClientRect();
    const maxX = window.innerWidth - nobtnRect.width;
    const maxY = window.innerHeight - nobtnRect.height; 
    const randomX = Math.floor(Math.random() * maxX); 
    const randomY = Math.floor(Math.random() * maxY); 

    nobtn.style.left = randomX + 'px';
    nobtn.style.top = randomY + 'px';
    nobtn.style.position = 'absolute'; 
});
