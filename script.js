// Array of fortune messages
const fortunes = [
    "Behind every great fortune lies a great crime",
    "Success is on the horizon.",
    "Fortune always favors the brave, and never helps a man who does not help himself",
    "Happiness is a choice, choose wisely.",
    "You will find what you seek.",
    "Life is what happens while you are busy making other plans.",
    "Your hard work will pay off soon.",
    "Everything has been figured out, except how to live.",
    "Life's most persistent and urgent question is, 'What are you doing for others?",
    "Life is really simple, but we insist on making it complicated."
];

// Function to get a random fortune
function getRandomFortune() {
    const randomidx = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomidx];
}

// Function to display the fortune when the page loads
function displayFortune() {
    const fortuneText = document.getElementById('fortune-text');
    fortuneText.innerText = getRandomFortune();
}

// font color 
function changeFontColor() {
    const colors = ['LightSkyBlue', 'blue', 'bisque', 'aqua', 'DarkSlateGray', 'MediumSpringGreen'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('fortune-text').style.color = randomColor;
}

// background color 
function changeBackgroundColor() {
    const colors = ['lightyellow', 'lightblue', 'lightgreen', 'lightcoral', 'lightpink'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('fortune-box').style.backgroundColor = randomColor;
}

// border color 
function changeBorderColor() {
    const colors = ['black', 'gray', 'navy', 'maroon', 'teal'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('fortune-box').style.borderColor = randomColor;
}

// font size
function changeFontSize() {
    const fontSize = Math.floor(Math.random() * 10) + 16; 
    document.getElementById('fortune-text').style.fontSize = fontSize + 'px';
}

// Display a random fortune when the page loads
window.onload = displayFortune;