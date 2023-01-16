// Get the chat window and send button elements
const chatWindow = document.querySelector('.chat-messages');
const sendButton = document.querySelector('.send-button');

// Make a function that recieves the text in the input field and adds it to the chat window
function addMessage() {
    const message = document.querySelector('.chat-input').value;
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    chatWindow.appendChild(messageElement);

    // Clear the input field
    document.querySelector('.chat-input').value = '';

    // Scroll to the bottom of the chat window
    chatWindow.scrollTop = chatWindow.scrollHeight;

}


// Add an event listener to the send button
sendButton.addEventListener('click', addMessage);

