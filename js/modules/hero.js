export function initHeroSection() {
  const heroButton = document.querySelector('section a');
  if (heroButton) {
    heroButton.addEventListener('click', () => {
      alert('Скоро откроется игровой уровень!');
    });
  }
}
