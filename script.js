function showSolution(exampleNumber) {
    const solutionElement = document.getElementById(`solution${exampleNumber}`);
    solutionElement.style.display = 'block';
}

function checkAnswer(problemNumber, correctAnswer) {
    const userAnswer = document.getElementById(`answer${problemNumber}`).value;
    const feedbackElement = document.getElementById(`feedback${problemNumber}`);

    if (parseFloat(userAnswer) === correctAnswer) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "Incorrect. Try again.";
        feedbackElement.style.color = "red";
    }
}

// Load the default lesson initially
window.onload = function() {
    showSolution(1);
};
