// Manejar el registro de usuarios
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('registerEmail').value;
    var password = document.getElementById('registerPassword').value;

    // Guardar usuario en LocalStorage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert('Registro exitoso!');
    window.location.href = 'login.html';  // Redirige al login
});

// Manejar el inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    // Verificar credenciales
    var storedEmail = localStorage.getItem('userEmail');
    var storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
        alert('Inicio de sesión exitoso!');
        sessionStorage.setItem('loggedIn', true);  // Guardar sesión
        window.location.href = 'dashboard.html';  // Redirige al dashboard
    } else {
        alert('Correo o contraseña incorrectos');
    }
});

// Manejar el cierre de sesión
document.getElementById('logoutButton').addEventListener('click', function() {
    sessionStorage.removeItem('loggedIn');
    window.location.href = 'login.html';  // Redirige al login
});

// Verificar si el usuario está autenticado en dashboard.html
if (window.location.pathname.endsWith('dashboard.html') && !sessionStorage.getItem('loggedIn')) {
    alert('Por favor, inicia sesión primero.');
    window.location.href = 'login.html';  // Redirige al login
}
