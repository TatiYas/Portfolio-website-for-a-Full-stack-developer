import 'aos/dist/aos.css';
import AOS from 'aos';

document.addEventListener('DOMContentLoaded', async () => {
  // Функция загрузки partials
  const loadHTML = async (selector, url) => {
    const el = document.querySelector(selector);
    if (!el) return;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const html = await res.text();
      el.innerHTML = html;
    } catch (err) {
      console.error('Ошибка загрузки partial:', url, err);
    }
  };

  // Подгружаем partials
  await Promise.all([
    loadHTML('#header', './partials/header.html'),
    loadHTML('#hero', './partials/hero.html'),
    loadHTML('#about-me', './partials/about-me.html'),
    loadHTML('#my-projects', './partials/my-projects.html'),
    loadHTML('#benefits', './partials/benefits.html'),
    loadHTML('#question', './partials/question.html'),
    loadHTML('#reviews', './partials/reviews.html'),
    loadHTML('#work-together', './partials/work-together.html'),
    loadHTML('#footer', './partials/footer.html'),
  ]);

  // Инициализация темы
  import('./js/theme-module.js').then(({ getTheme }) => getTheme());

  // Инициализация AOS
  AOS.init();

  // Подключаем остальные модули
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
