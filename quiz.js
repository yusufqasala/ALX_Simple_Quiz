// Function to check the user's answer
function checkAnswer() {
    // The correct answer is "4"
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if the user selected an answer
    if (userAnswer) {
        // Compare the user's answer to the correct answer
        if (userAnswer.value === correctAnswer) {
            // If the answer is correct, show a positive message
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            // If the answer is incorrect, show a failure message
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected, prompt the user to select an answer
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Retrieve the "submit-answer" button and add event listener
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
