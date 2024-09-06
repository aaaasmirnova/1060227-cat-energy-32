ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [59.938631, 30.323037],
          zoom: 14
      }, {
          searchControlProvider: 'yandex#search'
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Cat Energy',
          balloonContent: 'Это красивая метка'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '../images/map-pin@2x.png',
          // Размеры метки.
          iconImageSize: [90, 80]
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          // iconImageOffset: [-45, -75]
      });

  myMap.geoObjects
      .add(myPlacemark)
      .add(myPlacemarkWithContent);
});