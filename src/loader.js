import './index.css'

window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const main = document.getElementById('main');
  setTimeout(() => {
    loader.classList.add('opacity-0');
    loader.addEventListener('transitionend', () => loader.remove());
    main.classList.remove('hidden');
    requestAnimationFrame(() => {
      main.classList.remove('translate-x-full', 'opacity-0');
    });
  }, 1500);
});
