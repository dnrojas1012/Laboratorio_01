document.addEventListener('DOMContentLoaded', () => {

  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const mensaje = document.getElementById('mensaje');

  nombre.value = localStorage.getItem('nombre') || '';
  email.value = localStorage.getItem('email') || '';
  mensaje.value = localStorage.getItem('mensaje') || '';

  nombre.addEventListener('input', () => localStorage.setItem('nombre', nombre.value));
  email.addEventListener('input', () => localStorage.setItem('email', email.value));
  mensaje.addEventListener('input', () => localStorage.setItem('mensaje', mensaje.value));

  document.querySelector('.formulario').addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.removeItem('nombre');
    localStorage.removeItem('email');
    localStorage.removeItem('mensaje');
    e.target.reset();
  });

  const botonMenu = document.getElementById('boton-menu');
  const menu = document.querySelector('.menu');

  botonMenu.addEventListener('click', () => {
    menu.classList.toggle('abierto');
  });

  menu.querySelectorAll('a').forEach(enlace => {
    enlace.addEventListener('click', () => menu.classList.remove('abierto'));
  });

  const botonTema = document.getElementById('boton-tema');

  if (localStorage.getItem('tema') === 'dark') {
    document.body.classList.add('dark');
    botonTema.textContent = '☀️';
  }

  botonTema.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const esDark = document.body.classList.contains('dark');
    botonTema.textContent = esDark ? '☀️' : '🌙';
    localStorage.setItem('tema', esDark ? 'dark' : 'light');
  });

});