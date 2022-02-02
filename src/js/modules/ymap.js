//Переменная для включения/отключения индикатора загрузки
var spinner = $('.js-map-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;

//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
function init() {
	var myMap = new ymaps.Map('map', {
			center: [53.902496, 27.561481],
			zoom: 11,
			controls: [],
		}),
		MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
			'<div class="balloon">' +
				'<span class="balloon__close"><svg><use xlink:href="#close" class="icon"></use></svg></span>' +
				'<i class="balloon__arrow"></i>' +
				'<div class="balloon__inner">' +
				'$[[options.contentLayout observeSize minWidth=120 maxWidth=120 maxHeight=400]]' +
				'</div>' +
				'</div>',
			{
				/**
				 * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
				 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
				 * @function
				 * @name build
				 */
				build: function () {
					this.constructor.superclass.build.call(this);

					this._$element = $('.balloon', this.getParentElement());

					this.applyElementOffset();

					this._$element.find('.balloon__close').on('click', $.proxy(this.onCloseClick, this));
				},

				/**
				 * Удаляет содержимое макета из DOM.
				 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
				 * @function
				 * @name clear
				 */
				clear: function () {
					this._$element.find('.balloon__close').off('click');

					this.constructor.superclass.clear.call(this);
				},

				/**
				 * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
				 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
				 * @function
				 * @name onSublayoutSizeChange
				 */
				onSublayoutSizeChange: function () {
					MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

					if (!this._isElement(this._$element)) {
						return;
					}

					this.applyElementOffset();

					this.events.fire('shapechange');
				},

				/**
				 * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
				 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
				 * @function
				 * @name applyElementOffset
				 */
				applyElementOffset: function () {
					this._$element.css({
						left: -(this._$element[0].offsetWidth / 2),
						top: -(this._$element[0].offsetHeight + this._$element.find('.balloon__arrow')[0].offsetHeight),
					});
				},

				/**
				 * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
				 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
				 * @function
				 * @name onCloseClick
				 */
				onCloseClick: function (e) {
					e.preventDefault();

					this.events.fire('userclose');
				},

				/**
				 * Используется для автопозиционирования (balloonAutoPan).
				 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
				 * @function
				 * @name getClientBounds
				 * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
				 */
				getShape: function () {
					if (!this._isElement(this._$element)) {
						return MyBalloonLayout.superclass.getShape.call(this);
					}

					var position = this._$element.position();

					return new ymaps.shape.Rectangle(
						new ymaps.geometry.pixel.Rectangle([
							[position.left, position.top],
							[
								position.left + this._$element[0].offsetWidth,
								position.top + this._$element[0].offsetHeight + this._$element.find('.balloon__arrow')[0].offsetHeight,
							],
						]),
					);
				},

				/**
				 * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
				 * @function
				 * @private
				 * @name _isElement
				 * @param {jQuery} [element] Элемент.
				 * @returns {Boolean} Флаг наличия.
				 */
				_isElement: function (element) {
					return element && element[0] && element.find('.balloon__arrow')[0];
				},
			},
		),
		MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
			'<span class="balloon__title">Клиника на $[properties.address]</span>' +
				'<div class="balloon__route"><a href="$[properties.route]" target="_blank">Как проехать</a></div>',
		);

	$('.js-map-address').each(function () {
		var center = $(this).data('lng').split(','),
			address = $(this).text(),
			route = $(this).data('route'),
			path = $(this).data('path');

		var placemark = new ymaps.Placemark(
			center,
			{
				address: address,
				route: route,
			},
			{
				// Опции.
				balloonShadow: false,
				balloonLayout: MyBalloonLayout,
				balloonContentLayout: MyBalloonContentLayout,
				iconLayout: 'default#image',
				// Своё изображение иконки метки.
				iconImageHref: 'assets/svg/' + path,
				// Размеры метки.
				iconImageSize: [43, 43],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [-21, -21],
				hideIconOnBalloonOpen: false,
				balloonOffset: [0, -21],
			},
		);

		myMap.geoObjects.add(placemark);
	});

	myMap.controls.add('zoomControl');
	myMap.controls.get('zoomControl').options.set('size', 'small');

	var layer = myMap.layers.get(0).get(0);

	// Решение по callback-у для определения полной загрузки карты
	waitForTilesLoad(layer).then(function () {
		// Скрываем индикатор загрузки после полной загрузки карты
		spinner.removeClass('is-active');
	});
}

// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов)
function waitForTilesLoad(layer) {
	return new ymaps.vow.Promise(function (resolve, reject) {
		var tc = getTileContainer(layer),
			readyAll = true;
		tc.tiles.each(function (tile, number) {
			if (!tile.isReady()) {
				readyAll = false;
			}
		});
		if (readyAll) {
			resolve();
		} else {
			tc.events.once('ready', function () {
				resolve();
			});
		}
	});
}

function getTileContainer(layer) {
	for (var k in layer) {
		if (layer.hasOwnProperty(k)) {
			if (layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer || layer[k] instanceof ymaps.layer.tileContainer.DomContainer) {
				return layer[k];
			}
		}
	}
	return null;
}

// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback) {
	var script = document.createElement('script');

	if (script.readyState) {
		// IE
		script.onreadystatechange = function () {
			if (script.readyState == 'loaded' || script.readyState == 'complete') {
				script.onreadystatechange = null;
				callback();
			}
		};
	} else {
		// Другие браузеры
		script.onload = function () {
			callback();
		};
	}

	script.src = url;
	document.getElementsByTagName('head')[0].appendChild(script);
}

// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function () {
	$.fn.isInViewport = function () {
		var elementTop = $(this).offset().top;
		var elementBottom = elementTop + $(this).outerHeight();
		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();
		return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	$(window).on('resize scroll', function () {
		if ($('.js-map-container').isInViewport()) {
			if (!check_if_load) {
				// проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем

				// Чтобы не было повторной загрузки карты, мы изменяем значение переменной
				check_if_load = true;

				// Показываем индикатор загрузки до тех пор, пока карта не загрузится
				spinner.addClass('is-active');

				// Загружаем API Яндекс.Карт
				loadScript('https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1', function () {
					// Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
					ymaps.load(init);
				});
			}
		}
	});
};
$(function () {
	if ($('#map').length) {
		ymap();
	}
});
