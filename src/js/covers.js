document.addEventListener('DOMContentLoaded', function () {
  const block = document.querySelector('.covers');
  const cards = document.querySelectorAll('.covers-line-item');
  function startAnimation() {
    cards.forEach(card => {
      card.classList.add('animation');
    });
  }
  function stopAnimation() {
    cards.forEach(card => {
      card.classList.remove('animation');
    });
  }
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.01,
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startAnimation();
      } else {
        stopAnimation();
      }
    });
  }, observerOptions);
  if (block) {
    observer.observe(block);
  }
});
