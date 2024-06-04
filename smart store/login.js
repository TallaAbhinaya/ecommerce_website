document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform validation or AJAX request here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // Example validation
    if(username && email && password) {
        alert('Login successful!');
    } else {
        alert('Please fill in all fields.');
    }
});
