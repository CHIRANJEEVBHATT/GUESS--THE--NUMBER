document.addEventListener("DOMContentLoaded", function () {
    const minnum = 1;
    const maxnum = 50;
    let answer = Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;
    let attempts = 0;

    const guessInput = document.getElementById("guessInput");
    const submitGuess = document.getElementById("submitGuess");
    const message = document.getElementById("message");
    const restartGame = document.getElementById("restartGame");

    submitGuess.addEventListener("click", function () {
        let guess = Number(guessInput.value);

        if (isNaN(guess) || guess < minnum || guess > maxnum) {
            message.textContent = "Enter a valid number between 1 and 100.";
            message.style.color = "red";
        } else {
            attempts++;
            if (guess < answer) {
                message.textContent = "Too low! Try again.";
                message.style.color = "blue";
            } else if (guess > answer) {
                message.textContent = "Too high! Try again.";
                message.style.color = "blue";
            } else {
                message.textContent = `Correct! The answer is ${answer}. It took you ${attempts} attempts.`;
                message.style.color = "green";
                submitGuess.disabled = true;
                guessInput.disabled = true;
            }
        }
        guessInput.value = ""; // Clears input field after each guess
    });

    restartGame.addEventListener("click", function () {
        answer = Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;
        attempts = 0;
        message.textContent = "";
        guessInput.value = "";
        guessInput.disabled = false;
        submitGuess.disabled = false;
    });
});
