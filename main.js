// Простая логика загрузки и небольшой помощник для смены src через ?src=...
document.addEventListener('DOMContentLoaded', () => {
  const iframe = document.getElementById('unity-frame');
  const loading = document.getElementById('loading');

  // Позволяет указать другой путь к Unity через URL: ?src=unity/index.html
  try {
    const url = new URL(window.location.href);
    const customSrc = url.searchParams.get('src');
    if (customSrc) {
      // Небольшая защита от протоколов/данных: разрешаем только относительные пути
      if (/^https?:/i.test(customSrc) || /^data:/i.test(customSrc)) {
        console.warn('Внешние URL для src заблокированы из соображений безопасности.');
      } else {
        iframe.setAttribute('src', customSrc);
      }
    }
  } catch (e) {
    console.warn('Не удалось прочитать параметры URL:', e);
  }

  // Скрываем оверлей после загрузки содержимого iframe
  let loaded = false;
  const hideLoading = () => {
    if (!loaded) {
      loaded = true;
      loading?.classList.add('hidden');
    }
  };

  // Таймаут на случай долгой загрузки
  const longLoadTimer = setTimeout(() => {
    const p = loading?.querySelector('.loading-text');
    if (p) {
      p.textContent = 'Загрузка идёт дольше обычного… Проверьте структуру файлов в папке Build/';
    }
  }, 15000);

  iframe.addEventListener('load', () => {
    clearTimeout(longLoadTimer);
    // Немного задержки для плавности
    setTimeout(hideLoading, 200);
  });

  // Подстраховка: если что-то пойдёт не так, уберём лоадер через 60с
  setTimeout(hideLoading, 60000);
});