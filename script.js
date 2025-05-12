// Select the button and the list of fruits
const button = document.getElementById('colorChangeButton');
const fruitList = document.querySelectorAll('#fruitList li');

// Function to change the color of each list item
function changeColors() {
    fruitList.forEach((item, index) => {
        // Add different background colors for each item
        item.style.backgroundColor = getRandomColor();
        item.style.color = 'white';
    });
}

// Helper function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add an event listener to the button to trigger color change
button.addEventListener('click', changeColors);
