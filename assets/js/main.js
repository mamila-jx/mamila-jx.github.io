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

// Open dialog for all triggers
document.querySelectorAll('.email-trigger').forEach(clink => {
  clink.addEventListener('click', function (event) {
    console.log("Email trigger clicked.");
    event.preventDefault();
    document.getElementById('email-dialog').classList.remove('hidden');
    // Store current trigger for "Use Email Client" and "Copy Email"
    document.getElementById('email-dialog').dataset.triggerId = clink.dataset.c;
  });
});

// "Use Email Client" button
document.getElementById('use-client').addEventListener('click', function () {
  const data = document.getElementById('email-dialog').dataset.triggerId;
  if (data) window.location.href = 'mailto:' + atob(data);
  document.getElementById('email-dialog').classList.add('hidden');
});

// "Copy Email" button
document.getElementById('copy-email').addEventListener('click', function () {
  const data = document.getElementById('email-dialog').dataset.triggerId;
  if (!data) return;

  navigator.clipboard.writeText(atob(data)).then(() => {
    const toast = document.createElement('div');
    toast.textContent = 'Email copied!';
    toast.className = 'fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-cyber-accent text-black px-4 py-2 rounded-lg shadow-lg z-[10001] opacity-0 transition-opacity duration-300';
    document.body.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('opacity-100'));

    setTimeout(() => {
      toast.classList.remove('opacity-100');
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  });

  document.getElementById('email-dialog').classList.add('hidden');
});

// "Cancel" button
document.getElementById('cancel-dialog').addEventListener('click', function () {
  document.getElementById('email-dialog').classList.add('hidden');
});
  });


  function getData(elem){
    const b = elem.dataset.c || "";
    try{
      return atob(b);
    } 
    catch(err){
      console.error("Failed decoding.", err);
      return null; 
    }
  }

  