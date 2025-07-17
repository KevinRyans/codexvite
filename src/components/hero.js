export function createHero() {
  const section = document.createElement('section');
  section.className = 'flex flex-col items-center text-center py-24 gap-6 opacity-0 translate-y-8 transition-all duration-500 ease-snappy';
  section.style.willChange = 'transform, opacity';

  const h1 = document.createElement('h1');
  h1.className = 'text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text';
  h1.textContent = 'Hei, jeg heter Ola Utvikler';

  const p = document.createElement('p');
  p.className = 'text-xl text-gray-300';
  p.textContent = 'Frontend-utvikler';

  const btn = document.createElement('a');
  btn.href = 'https://github.com';
  btn.target = '_blank';
  btn.className = 'mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded transition transform active:scale-95 focus:outline-none';
  btn.textContent = 'GitHub';

  section.append(h1, p, btn);
  return section;
}
