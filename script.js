// Get references to elements
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const questionContainer = document.getElementById('questionContainer');
const resultContainer = document.getElementById('resultContainer');

// Handle "Yes" button click
yesButton.addEventListener('click', () => {
    questionContainer.classList.add('hidden'); // Hide the question container
    resultContainer.classList.remove('hidden'); // Show the result container with the message and image
});

// Handle "No" button hover (to make it move erratically across the entire screen)
noButton.addEventListener('mouseover', () => {
    const viewportWidth = window.innerWidth; // Full viewport width
    const viewportHeight = window.innerHeight; // Full viewport height

    // Generate random positions within the viewport bounds
    const randomX = Math.random() * (viewportWidth - noButton.offsetWidth);
    const randomY = Math.random() * (viewportHeight - noButton.offsetHeight);

    // Apply new position and rotation to the No button
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
    noButton.style.transform = `rotate(${randomRotation}deg)`; // Add rotation effect
});
