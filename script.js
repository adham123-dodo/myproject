// script.js
// مثال على ربط جافاسكريبت بصفحة تسجيل الدخول (login.html) وملف CSS خارجي

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            // مثال: تحقق بسيط (يمكنك تعديله حسب الحاجة)
            if (username === 'admin' && password === '1234') {
                alert('تم تسجيل الدخول بنجاح!');
            } else {
                alert('اسم المستخدم أو كلمة المرور غير صحيحة');
            }
        });
    }
});
