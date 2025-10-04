export function initFeatures() {
  const cards = document.querySelectorAll('section.grid div');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('scale-105');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('scale-105');
    });
  });
}
