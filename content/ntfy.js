async function sendNotification(message) {
    const ntfyUrl = `https://ntfy.catgirl.cloud/j1DWGC7lLVYermdM`; // Replace with your NTFY server URL if self-hosted

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

// Add event listener to handle form submission
document.getElementById('ntfy-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    const message = document.getElementById('message').value.trim();

    if (message) {
        sendNotification(message);
    } else {
        alert('Please enter a message.');
    }
});

