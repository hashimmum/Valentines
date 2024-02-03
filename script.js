const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesbtn = document.querySelector(".yes-button");
const nobtn = document.querySelector(".no-button");

let yesClickedOnce = false;

yesbtn.addEventListener("click", () => {
    if (!yesClickedOnce) {
        question.innerHTML = "Do you want to be my Valentines?";
        gif.src = "second.gif"; // Corrected from 'scr' to 'src'
        yesClickedOnce = true;
    } else {
        question.innerHTML = "I LOVE YOU!! made with love by hashim!";
        gif.src = "third.gif"; // Corrected from 'scr' to 'src'
    }
});

nobtn.addEventListener("mouseover", () => {
    const nobtnRect = nobtn.getBoundingClientRect();
    const maxX = window.innerWidth - nobtnRect.width;
    const maxY = window.innerHeight - nobtnRect.height; // Corrected from 'innderHeight'

    const randomX = Math.floor(Math.random() * maxX); // Corrected method call
    const randomY = Math.floor(Math.random() * maxY); // Corrected method call

    nobtn.style.left = randomX + 'px';
    nobtn.style.top = randomY + 'px';
    nobtn.style.position = 'absolute'; // Ensure your CSS accommodates this.
});
