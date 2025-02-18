const adviceText = document.getElementById("advice-text");
const adviceId = document.getElementById("advice-id");
const button = document.getElementById("generate-advice");


async function fetchAdvice() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        adviceText.innerText = `"${data.slip.advice}"`;
        adviceId.innerText = `Advice #${data.slip.id}`;
    } catch (error) {
        adviceText.innerText = "Oops! Something went wrong. Try again!";
    }
}


fetchAdvice();


button.addEventListener("click", fetchAdvice);
