async function sendNotification(message) {
    const topic = 'j1DWGC7lLVYermdM'; // Replace with your NTFY topic
    const ntfyUrl = `https://ntfy.catgirl.cloud/${topic}`; // Replace with your NTFY server URL if self-hosted

    try {
        const response = await fetch(ntfyUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: message
        });

        if (response.ok) {
            alert('Notification sent successfully!');
        } else {
            alert('Failed to send notification. Please check your configuration.');
        }
    } catch (error) {
        console.error('Error sending notification:', error);
        alert('An error occurred while sending the notification.');
    }
}

// Attach event listener to the button for click event
document.getElementById('send-button').addEventListener('click', function () {
    const message = document.getElementById('message').value.trim();

    if (message) {
        sendNotification(message);
    } else {
        alert('Please enter a message.');
    }
});
