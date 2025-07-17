export function createNav() {
  const nav = document.createElement('nav');
  nav.className = 'w-full flex justify-between items-center py-4 px-8 opacity-0 translate-y-4 transition-all duration-500';
  nav.style.willChange = 'transform, opacity';

  const ul = document.createElement('ul');
  ul.className = 'flex gap-4 text-lg';

  const links = [
    { href: '#projects', label: 'Prosjekter' },
    { href: '#about', label: 'Om meg' },
    { href: '#contact', label: 'Kontakt' }
  ];

  links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.label;
    a.className = 'transition hover:text-indigo-400 hover:shadow-lg px-2 py-1 rounded';
    ul.appendChild(a);
  });

  nav.appendChild(ul);
  return nav;
}
