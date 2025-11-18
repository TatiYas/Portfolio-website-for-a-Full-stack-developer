document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('load[src]').forEach(async el => {
    const url = el.getAttribute('src');
    try {
      const res = await fetch(url);
      const html = await res.text();
      el.insertAdjacentHTML('afterend', html);
      el.remove();
    } catch (err) {
      console.error('Ошибка загрузки partial:', url, err);
    }
  });

  // 2️⃣ Инициализация темы (theme-module)
  import('./js/theme-module').then(({ getTheme }) => {
    getTheme();
  });

  // 3️⃣ Инициализация AOS
  import('aos').then(AOS => {
    import('aos/dist/aos.css');
    AOS.init();
  });

  // 4️⃣ Подключение всех модулей сайта
  import('./js/header');
  import('./js/hero');
  import('./js/about-me');
  import('./js/my-projects');
  import('./js/question');
  import('./js/reviews');
  import('./js/work-together');
  import('./js/footer');
});

