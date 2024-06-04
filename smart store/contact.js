// scripts.js
document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (username && email && message) {
        document.getElementById('status').textContent = 'Thank you for your message!';
        document.getElementById('contact').reset();
    } else {
        document.getElementById('status').textContent = 'Please fill in all fields.';
    }
});
