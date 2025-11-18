// main.js — исправленная версия

// ------------------------------
// 1️⃣ Подгрузка всех partials (<load src="...">)
document.addEventListener('DOMContentLoaded', async () => {
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

  // ------------------------------
  // 2️⃣ Инициализация темы
  import('./js/theme-module.js').then(({ getTheme }) => {
    getTheme();
  });

  // ------------------------------
  // 3️⃣ Инициализация AOS
  import('aos').then(AOS => {
    import('aos/dist/aos.css');
    AOS.init();
  });

  // ------------------------------
  // 4️⃣ Подключение всех остальных модулей сайта
  await Promise.all([
    import('./js/header.js'),
    import('./js/hero.js'),
    import('./js/about-me.js'),
    import('./js/my-projects.js'),
    import('./js/question.js'),
    import('./js/reviews.js'),
    import('./js/work-together.js'),
    import('./js/footer.js'),
  ]);
});
