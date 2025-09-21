  window.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('top-bar');
    header.classList.add('fade-in-loaded');

    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    btn.addEventListener('click', () => {
     const isOpen =  menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen);
    });

     document.querySelectorAll('.hidden-before-load').forEach(el => {
    el.classList.add('fade-in-loaded');
  });

  document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => menu.classList.remove('open'));
  btn.setAttribute('aria-expanded', false);
});


  });