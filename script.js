// Можно добавить тёмную тему или эффекты
document.addEventListener('DOMContentLoaded', () => {
  const darkMode = localStorage.getItem('darkMode');
  if(darkMode === 'enabled') document.body.classList.add('dark');
});