const socket = io();

// Message form
const form = document.getElementById('chat-form');
const input = document.getElementById('message');
const messages = document.getElementById('messages');

// Send message on form submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.trim() !== '') {
        socket.emit('chat message', input.value); // Send message to server
        input.value = ''; // Clear input field
    }
});

// Listen for messages from the server
socket.on('chat message', (msg) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    messages.appendChild(messageElement);
    messages.scrollTop = messages.scrollHeight; // Scroll to latest message
});
