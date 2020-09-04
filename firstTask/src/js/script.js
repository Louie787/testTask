function countdown(day, month, year, hour, minute, second, el) {
  let currentTime = new Date().getTime();
  let eventTime = new Date(year, month - 1, day, hour, minute, second).getTime();
  let timeLeft = eventTime - currentTime;

  let s = Math.floor(timeLeft / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24);

  h %= 24;
  m %= 60;
  s %= 60;

  d = (d < 10) ? '0' + d : d;
  h = (h < 10) ? '0' + h : h;
  m = (m < 10) ? '0' + m : m;
  s = (s < 10) ? '0' + s : s;

  document.querySelector(el + '-day').innerText = d;
  document.querySelector(el + '-hour').innerText = h;
  document.querySelector(el + '-minute').innerText = m;
  document.querySelector(el + '-second').innerText = s;

  setTimeout(() => countdown(day, month, year, hour, minute, second, el), 1000);
}

countdown(10, 9, 2020, 10, 10, 10, '.hero-counter');