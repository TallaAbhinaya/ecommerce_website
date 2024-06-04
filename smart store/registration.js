document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // You can perform validation or further actions here

        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);

        // Here you can send the form data to a server using AJAX or any other method
    });
});
