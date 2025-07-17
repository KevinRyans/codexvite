export function createProjects() {
  const section = document.createElement('section');
  section.id = 'projects';
  section.className = 'py-16 px-4 opacity-0 translate-y-8 transition-all duration-500';
  section.style.willChange = 'transform, opacity';
  const h2 = document.createElement('h2');
  h2.className = 'text-3xl mb-4 font-semibold';
  h2.textContent = 'Prosjekter';
  const p = document.createElement('p');
  p.textContent = 'Mine prosjekter kommer her.';
  section.append(h2, p);
  return section;
}

export function createAbout() {
  const section = document.createElement('section');
  section.id = 'about';
  section.className = 'py-16 px-4 opacity-0 translate-y-8 transition-all duration-500';
  section.style.willChange = 'transform, opacity';
  const h2 = document.createElement('h2');
  h2.className = 'text-3xl mb-4 font-semibold';
  h2.textContent = 'Om meg';
  const p = document.createElement('p');
  p.textContent = 'Kort bio kommer her.';
  section.append(h2, p);
  return section;
}

export function createContact() {
  const section = document.createElement('section');
  section.id = 'contact';
  section.className = 'py-16 px-4 opacity-0 translate-y-8 transition-all duration-500';
  section.style.willChange = 'transform, opacity';
  const h2 = document.createElement('h2');
  h2.className = 'text-3xl mb-4 font-semibold';
  h2.textContent = 'Kontakt';
  const p = document.createElement('p');
  p.textContent = 'Du kan kontakte meg p\u00e5 e-post.';
  section.append(h2, p);
  return section;
}
