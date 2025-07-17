export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'text-center py-8 text-sm text-gray-400 opacity-0 translate-y-8 transition-all duration-500';
  footer.style.willChange = 'transform, opacity';
  footer.innerHTML = `&copy; ${new Date().getFullYear()} Ola Utvikler`;
  return footer;
}
