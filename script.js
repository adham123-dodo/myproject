// script.js

// Simple login form functionality
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Simple validation (replace with real authentication)
            if (username === 'admin' && password === 'password') {
                alert('تم تسجيل الدخول بنجاح!');
                // Redirect or perform other actions here
            } else {
                alert('اسم المستخدم أو كلمة المرور غير صحيحة');
            }
        });
    }
});