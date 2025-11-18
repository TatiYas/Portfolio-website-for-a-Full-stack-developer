document.addEventListener('DOMContentLoaded', async () => {
  // Подгружаем все partials
  const loadElements = document.querySelectorAll('load[src]');
  for (const el of loadElements) {
    const url = el.getAttribute('src');
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const html = await res.text();
      el.insertAdjacentHTML('afterend', html);
      el.remove();
    } catch (err) {
      console.error('Ошибка загрузки partial:', url, err);
    }
  }

  // Инициализация темы
  import('./js/theme-module.js').then(({ getTheme }) => getTheme());

  // Инициализация AOS
  import('aos').then(AOS => {
    import('aos/dist/aos.css');
    AOS.init();
  });

  // Подключаем остальные модули
  await Promise.all([
    import('./js/header.js'),
    import('./js/hero.js'),
    import('./js/my-projects.js'),
    import('./js/question.js'),
    import('./js/reviews.js'),
    import('./js/work-together.js'),
    import('./js/footer.js'),
  ]);
});
