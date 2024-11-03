// check if the password and confirm password are the same
document.querySelector('.registration-form').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        event.preventDefault(); // prevent the form from being submitted
        alert('Passwords do not match. Please try again.');
    }
}); 