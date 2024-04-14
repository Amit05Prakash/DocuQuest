document.getElementById('chatForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userInput = document.getElementById('userInput').value;
    const docName = document.getElementById('docName').value;
    displayMessage(userInput, 'user');
    document.getElementById('userInput').value = '';

    if (!docName) {
        displayMessage('Please enter the documentation name above.', 'assistant');
        return;
    }

    // Simulating an API call with a delay
    setTimeout(() => {
        const simulatedResponse = `Information for ${docName}: [Simulated response]`;
        displayMessage(simulatedResponse, 'assistant');
    }, 1000);
});

function displayMessage(message, author) {
    const chatBox = document.getElementById('chatBox');
    const messageDiv = document.createElement('div');
    messageDiv.className = `${author}-message message`;
    messageDiv.innerHTML = `<div class="content">${message}</div>`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

document.querySelectorAll('input, button').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.border = '1px solid #4CAF50';
    });
    item.addEventListener('mouseout', () => {
        item.style.border = '';
    });
});

