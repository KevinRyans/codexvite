export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'text-center py-8 text-sm text-gray-400';
  footer.innerHTML = `&copy; ${new Date().getFullYear()} Ola Utvikler`;
  return footer;
}
