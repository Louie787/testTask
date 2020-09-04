new fullpage('#fullpage', {
  anchors: ['home', 'data', 'technologies', 'environment', 'education', 'escort', 'news', 'community'],
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['Главная', 'Данные', 'Технологии', 'Енвайромент', 'Обучение', 'Сопровождение', 'Новости', 'Комьюнити'],
  showActiveTooltip: false,
});

const arr = [
  'Данные', 'Технологии', 'Енвайромент', 'Обучение', 'Сопровождение', 'Новости', 'Комьюнити',
  'Данные', 'Технологии', 'Енвайромент', 'Обучение', 'Сопровождение', 'Новости', 'Комьюнити',
  'Данные', 'Технологии', 'Енвайромент', 'Обучение', 'Сопровождение', 'Новости', 'Комьюнити',
  'Данные', 'Технологии', 'Енвайромент', 'Обучение', 'Сопровождение', 'Новости', 'Комьюнити',
  'Данные', 'Технологии', 'Енвайромент', 'Обучение', 'Сопровождение', 'Новости', 'Комьюнити',
];

TagCloud('#tagcloud', arr, {
  radius: 200,
});

const links = [
  ['Данные', 'data'],
  ['Технологии', 'technologies'],
  ['Енвайромент', 'environment'],
  ['Обучение', 'education'],
  ['Сопровождение', 'escort'],
  ['Новости','news'],
  ['Комьюнити', 'community'],
];

$(document).on('click', '.tagcloud--item', function (e) {
  $(links).each(function () {
    if($(this)[0] === $(e.target).text()) {
      fullpage_api.moveTo($(this)[1]);
    }
  });
});

$('.btn:not(.modal-close)').magnificPopup({
  type: 'inline',
  preloader: false,
  modal: true
});

$(document).on('click', '.modal-close', function (e) {
  e.preventDefault();
  $.magnificPopup.close();
});