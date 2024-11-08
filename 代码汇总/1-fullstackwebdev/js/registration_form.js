// 实时检查密码和确认密码是否一致
document.getElementById('password').addEventListener('input', checkPasswordsMatch);
document.getElementById('confirmPassword').addEventListener('input', checkPasswordsMatch);

// 检查密码和确认密码是否一致
function checkPasswordsMatch() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorElement = document.getElementById('passwordError');
    var submitButton = document.getElementById('submitButton');

    if (password !== confirmPassword) {
        errorElement.style.display = 'block';
        submitButton.disabled = true; // 禁用提交按钮
    } else {
        errorElement.style.display = 'none';
        submitButton.disabled = false; // 启用提交按钮
    }
} 