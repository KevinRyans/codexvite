export function createNav() {
  const nav = document.createElement('nav');
  nav.className = 'w-full flex justify-between items-center py-4 px-8';

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
    a.className = 'hover:text-purple-400';
    ul.appendChild(a);
  });

  nav.appendChild(ul);
  return nav;
}
