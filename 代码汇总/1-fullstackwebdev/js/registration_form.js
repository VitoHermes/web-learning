document.querySelector('.registration-form').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        event.preventDefault(); // 阻止表单提交
        alert('Passwords do not match. Please try again.');
    }
}); 