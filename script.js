document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'user' && password === 'pass') {
        alert('Login successful! Redirect to secured page.');
    } else {
        document.getElementById('error-message').innerText = 'Invalid username or password';
    }
});
