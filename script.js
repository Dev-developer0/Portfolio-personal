// ── Intersection Observer for fade-ins ──
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .service-item').forEach(el => io.observe(el));

// About contact btn special case
const aboutBtn = document.querySelector('#about .btn-contact');
if (aboutBtn) {
  const ob = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        aboutBtn.style.opacity = '1';
        aboutBtn.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.2 });
  ob.observe(aboutBtn);
}

// Stagger service items
document.querySelectorAll('.service-item').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.1}s`;
});

// ── Sticky card scale ──
const cards = [
  document.getElementById('card1'),
  document.getElementById('card2'),
  document.getElementById('card3'),
];
const totalCards = cards.length;

function updateCards() {
  cards.forEach((card, i) => {
    const rect = card.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
    const targetScale = 1 - (totalCards - 1 - i) * 0.03;
    const scale = 1 - (1 - targetScale) * progress;
    card.style.transform = `scale(${scale})`;
  });
}

window.addEventListener('scroll', updateCards, { passive: true });
updateCards();