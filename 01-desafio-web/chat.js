// Get the chat window and close button elements
const chatWindow = document.querySelector('.chat-window');
const closeButton = document.querySelector('.close-button');
const openButton = document.querySelector('.side-button');

// Show the chat window when the button is clicked
function showChat() {
  chatWindow.style.display = 'block';
}

// Hide the chat window when the close button is clicked
function hideChat() {
  chatWindow.style.display = 'none';
}

// Add event listeners to the button and close button
openButton.addEventListener('click', showChat);
//document.querySelector('button').addEventListener('click', showChat);
closeButton.addEventListener('click', hideChat);
