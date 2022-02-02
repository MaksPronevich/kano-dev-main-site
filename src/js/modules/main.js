// $(document).foundation();

$(document).ready(function () {
	var observer = lozad();
	observer.observe();

	function scrollTo(target, offset) {
		if (target.length) {
			$('html, body').animate(
				{
					scrollTop: target.offset().top - offset,
				},
				500,
			);
			return false;
		}
	}

	$('.js-toscroll').on('click', function (e) {
		e.preventDefault();
		var $target = $($(this).attr('href'));

		scrollTo($target, 0);
	});

	$('.js-promo').slick({
		infinite: true,
		dots: true,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		appendArrows: '.promo__arrows',
		appendDots: '.promo__dots',
		responsive: [
			{
				breakpoint: 1340,
				settings: {
					arrows: false,
				},
			},
		],
	});

	$('.js-carousel').slick({
		infinite: false,
		dots: false,
		arrows: true,
		// lazyLoad: 'progressive',
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 999,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					// adaptiveHeight: true,
					variableWidth: true,
					infinite: false,
					arrows: false,
				},
			},
		],
	});

	$('.js-works').slick({
		infinite: true,
		dots: false,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 999,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					// adaptiveHeight: true,
					variableWidth: true,
					infinite: false,
					arrows: false,
				},
			},
		],
	});

	$('.js-internship').slick({
		infinite: true,
		dots: false,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 999,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					// adaptiveHeight: true,
					variableWidth: false,
					infinite: false,
					arrows: false,
				},
			},

			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					// adaptiveHeight: true,
					variableWidth: false,
					infinite: false,
					arrows: false,
				},
			},
		],
	});

	// var $status = $('.pagingInfo');
	var $slickElement = $('.js-works-single');

	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		var i = (currentSlide ? currentSlide : 0) + 1;
		$(this)
			.siblings('.works__pages')
			.html('<span>' + i + '</span>/<span>' + slick.slideCount + '</span>');
		// $status.text(i + '/' + slick.slideCount);
	});

	$slickElement.slick({
		infinite: true,
		dots: false,
		// fade: true,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 999,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					// adaptiveHeight: true,
					variableWidth: true,
					infinite: false,
					arrows: false,
				},
			},
		],
	});

	function setSlick(element) {
		element.slick({
			dots: false,
			arrows: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			touchThreshold: 10,
			appendArrows: element.siblings('.arrows'),

			responsive: [
				{
					breakpoint: 999,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						variableWidth: true,
						infinite: false,
						arrows: false,
					},
				},
			],
		});
	}

	setSlick($('.js-carousel-doctors'));

	$('.js-card-gallery').slick({
		infinite: true,
		dots: false,
		arrows: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 999,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					variableWidth: true,
					infinite: false,
				},
			},
		],
	});

	$('.js-section-gallery').slick({
		infinite: true,
		dots: false,
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 999,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					// adaptiveHeight: true,
					variableWidth: true,
					infinite: false,
				},
			},
		],
	});

	$('.js-features').slick({
		infinite: true,
		dots: false,
		arrows: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 999,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					// adaptiveHeight: true,
					variableWidth: true,
					infinite: false,
				},
			},
		],
	});

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav',
	});

	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		arrows: false,
		focusOnSelect: true,
		vertical: true,
		verticalSwiping: true,
		centerMode: true,
		centerPadding: '0',
		arrows: false,
		responsive: [
			{
				breakpoint: 999,
				settings: {
					vertical: false,
					variableWidth: true,
					centerMode: false,
					slidesToShow: 3,
					slidesToScroll: 1,
					verticalSwiping: false,
				},
			},
		],
	});

	$('.tourism__list').slick({
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		// adaptiveHeight: true,
		variableWidth: true,
		infinite: false,
		touchThreshold: 10,
		// appendArrows: element.siblings('.arrows'),
		autoplay: false,
		autoplaySpeed: 5000,
		adaptiveHeight: false,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 999,
				settings: 'unslick',
			},
		],
	});

	$('.js-blog').slick({
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		// adaptiveHeight: true,
		variableWidth: true,
		infinite: false,
		touchThreshold: 10,
		// appendArrows: element.siblings('.arrows'),
		autoplay: false,
		autoplaySpeed: 5000,
		adaptiveHeight: false,
		mobileFirst: true,

		responsive: [
			{
				breakpoint: 1000,
				settings: 'unslick',
			},
		],
	});

	$('.js-gallery').slick({
		dots: false,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		// adaptiveHeight: true,
		variableWidth: true,
		infinite: false,
		touchThreshold: 10,
		mobileFirst: true,

		responsive: [
			{
				breakpoint: 999,
				settings: 'unslick',
			},
		],
	});

	$('#works-tabs').on('click', 'a', function (e) {
		console.log($(this).attr('href'));
		e.preventDefault();

		$(this).closest('.tabs-title').addClass('is-active').siblings('.tabs-title').removeClass('is-active');

		$($(this).attr('href')).fadeIn().siblings('.works__panel').hide();
	});

	$('.js-menu').on('click', function () {
		$(this).toggleClass('opened');
		$('.header__dropdown').fadeToggle();
	});

	if ($(window).width() < 1000) {
		$('.menu__list').on('click', '> li > span, > li > a', function (e) {
			if ($(this).closest('li').find('.menu__dropdown').length) {
				e.preventDefault();
				$(this).toggleClass('opened').siblings('.menu__dropdown').slideToggle();
			}
		});
	}

	$('.js-phone-mobile').on('click', function () {
		$(this).toggleClass('active');
	});

	$('#prices-tabs').on('click', 'a, span', function (e) {
		e.preventDefault();

		var index = $(this).closest('li').index() + 2;

		$(this).closest('.tabs-title').addClass('is-active').siblings('.tabs-title').removeClass('is-active');

		$(this).parents('.js-prices').find('.prices__table td:not(:first-child)').hide();

		$(this)
			.parents('.js-prices')
			.find('.prices__table td:nth-child(' + index + ')')
			.show();
	});

	$('.blockquotes__item').on('click', function (e) {
		$(this).addClass('current').siblings('.blockquotes__item').removeClass('current');
		$('.blockquotes__message').eq($(this).index()).fadeIn().siblings('.blockquotes__message').hide();
	});

	$('.clinics__nav').on('click', 'button', function (e) {
		$(this).addClass('current').siblings('button').removeClass('current');
		$('.clinics__holder').eq($(this).index()).fadeIn().css('display', 'flex').addClass('current').siblings('.clinics__holder').hide();
	});

	fileUpload();

	function fileUpload() {
		$('.form__input_type_file').each(function () {
			var $input = $(this),
				$label = $input.next('label'),
				labelVal = $label.html();

			$input.on('change', function (e) {
				var fileName = '';

				if (this.files && this.files.length > 1) {
					fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
				} else if (e.target.value) fileName = e.target.value.split('\\').pop();

				if (fileName) {
					$label.find('span').html(fileName);
					$label.addClass('isFilled');
				} else $label.html(labelVal);
			});

			// Firefox bug fix
			$input
				.on('focus', function () {
					$input.addClass('has-focus');
				})
				.on('blur', function () {
					$input.removeClass('has-focus');
				});
		});
	}

	$('body').delegate('.form__input, .form__textarea, .form__select', 'focusout', function () {
		if ($(this).val() != '') {
			$(this).addClass('has-content');
		} else {
			$(this).removeClass('has-content');
		}
	});

	var baseH;
	$('body')
		// .on('focus.textarea', 'textarea', function(e) {
		.on('focus.textarea', 'textarea:not(.n-world-textarea)', function (e) {
			baseH = this.scrollHeight - 29;
			$(this).height(baseH);
		})
		// .on('input.textarea', 'textarea',  function(e) {
		.on('input.textarea', 'textarea:not(.n-world-textarea)', function (e) {
			if (baseH < this.scrollHeight) {
				$(this)
					.height(0)
					.height(this.scrollHeight - 29);
			} else {
				$(this).height(0).height(baseH);
			}
		});

	// $('textarea').on('paste input', function () {
	//     if ($(this).outerHeight() > this.scrollHeight){
	//         $(this).height(1);
	//     }
	//     while ($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))){
	//         $(this).height($(this).height() + 1);
	//     }
	// });

	$('ul[data-tabs]').on('click', 'li:not(.is-active) > a', function (e) {
		e.preventDefault();
		var tabsId = $(this).parents('[data-tabs]').attr('id');
		console.log(tabsId);
		$(this).closest('li').addClass('is-active').siblings().removeClass('is-active');

		$('[data-tabs-content="' + tabsId + '"')
			.find('.tabs-panel')
			.hide()
			.removeClass('is-active')
			.eq($(this).closest('li').index())
			.fadeIn()
			.addClass('is-active');
	});

	if ($(window).width() < 769) {
		$('.contacts__title').on('click', function () {
			$(this).toggleClass('opened').next('.contacts__holder').slideToggle(250);
		});
	}

	function calculateTotalValue(length) {
		var minutes = Math.floor(length / 60),
			seconds_int = length - minutes * 60,
			seconds_str = seconds_int.toString(),
			seconds = seconds_str.substr(0, 2),
			time = minutes + ':' + seconds;

		return time;
	}

	function calculateCurrentValue(currentTime) {
		var current_hour = parseInt(currentTime / 3600) % 24,
			current_minute = parseInt(currentTime / 60) % 60,
			current_seconds_long = currentTime % 60,
			current_seconds = current_seconds_long.toFixed(),
			current_time =
				(current_minute < 10 ? '0' + current_minute : current_minute) + ':' + (current_seconds < 10 ? '0' + current_seconds : current_seconds);

		return current_time;
	}

	function initProgressBar(container, value) {
		// var player = document.getElementById('player');
		player = value[0];
		var length = player.duration;
		var current_time = player.currentTime;

		// calculate total length of value
		var totalLength = calculateTotalValue(length);
		container.find('.audio__end').html(totalLength);

		console.log(totalLength);

		// calculate current value time
		var currentTime = calculateCurrentValue(current_time);
		container.find('.audio__start').html(currentTime);

		var progressbar = container.find('.audio__object')[0];
		progressbar.value = player.currentTime / player.duration;
		container.find('.audio__container')[0].addEventListener('click', seek);

		if (player.currentTime == player.duration) {
			container.find('.js-audio-play').removeClass('pause');
		}

		function seek(evt) {
			var percent = evt.offsetX / this.offsetWidth;
			player.currentTime = percent * player.duration;
			progressbar.value = percent / 100;
		}
	}

	function initPlayers(players) {
		// pass num in if there are multiple audio players e.g 'player' + i
		players.each(function () {
			var playerContainer = $(this),
				player = playerContainer.find('.js-player'),
				isPlaying = false,
				playBtn = playerContainer.find('.js-audio-play');
			console.log(player[0]);

			if (playBtn != null) {
				playBtn.on('click', function () {
					togglePlay();
				});
			}

			player.on('timeupdate', function () {
				initProgressBar(playerContainer, player);
			});

			//   initProgressBar(player, false);

			//   var totalLength = calculateTotalValue(length)
			// jQuery(".end-time").html(totalLength);

			function togglePlay() {
				console.log(player);
				if (player[0].paused === false) {
					player[0].pause();
					isPlaying = false;
					playBtn.removeClass('pause');
				} else {
					player[0].play();
					playBtn.addClass('pause');
					isPlaying = true;
				}
			}
		});
	}

	initPlayers($('.audio'));

	var allPanels = $('[data-accordion] [data-content]').hide();

	$('[data-accordion] > li > a').click(function () {
		$this = $(this);
		$target = $this.parent('li');

		if (!$target.hasClass('active')) {
			$('[data-accordion] > li').removeClass('active').find('[data-content]').slideUp();
			$target.addClass('active').find('[data-content]').slideDown();
		}

		return false;
	});

	$('button[data-fancybox]').fancybox({
		modal: false,
		afterShow: function (instance, current) {
			$(current.src).find('.form__input:first').focus();
		},
	});

	var selector = ':not(.slick-cloned) > [data-fancybox="examples"]';

	$().fancybox({
		baseClass: 'fancybox-inline',
		selector: selector,
		infobar: false,
		smallBtn: false,
		autoFocus: false,
		buttons: ['close'],
		btnTpl: {
			// Arrows
			arrowLeft:
				'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
				'<svg><use xlink:href="#arrow-link" class="icon"></use></svg>' +
				'</button>',

			arrowRight:
				'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
				'<svg><use xlink:href="#arrow-link" class="icon"></use></svg>' +
				'</button>',
			close:
				'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
				'<svg><use xlink:href="#close" class="icon"></use></svg>' +
				'</button>',
		},
		onInit: function (instance) {
			// Create new wrapping element, it is useful for styling
			// and makes easier to position thumbnails
			instance.$refs.inner.wrap('<div class="fancybox-outer"></div>');
		},
	});

	$(window).on('load', function () {
		$('.wrapper').addClass('no-overflowed');
	});

	$('.js-card-gallery .slick-slide:not(.slick-cloned)').fancybox();

	var navbarTop = $('.navbar').length ? $('.navbar').offset().top : 0;

	$(window).scroll(function () {
		var sticky = $('.navbar'),
			scroll = $(window).scrollTop();

		if (scroll >= navbarTop && $(window).width() > 999) sticky.addClass('sticky');
		else sticky.removeClass('sticky');
	});

	var offset = 300,
		offset_opacity = 1200,
		scroll_top_duration = 600,
		$back_to_top = $('.totop');

	$(window).scroll(function () {
		showToTop($(this));
	});

	function showToTop(target) {
		target.scrollTop() > offset ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if (target.scrollTop() > offset_opacity) {
			$back_to_top.addClass('cd-fade-out');
		}
	}

	$back_to_top.on('click', function (event) {
		event.preventDefault();
		var target = $('body,html');
		target.animate(
			{
				scrollTop: 0,
			},
			scroll_top_duration,
		);
	});
});

// js for inplantacziya (start)
!(function (t) {
	var e = {};
	function n(i) {
		if (e[i]) return e[i].exports;
		var o = (e[i] = { i: i, l: !1, exports: {} });
		return t[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
	}
	(n.m = t),
		(n.c = e),
		(n.d = function (t, e, i) {
			n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
		}),
		(n.r = function (t) {
			'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(t, '__esModule', { value: !0 });
		}),
		(n.t = function (t, e) {
			if ((1 & e && (t = n(t)), 8 & e)) return t;
			if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
			var i = Object.create(null);
			if ((n.r(i), Object.defineProperty(i, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
				for (var o in t)
					n.d(
						i,
						o,
						function (e) {
							return t[e];
						}.bind(null, o),
					);
			return i;
		}),
		(n.n = function (t) {
			var e =
				t && t.__esModule
					? function () {
							return t.default;
					  }
					: function () {
							return t;
					  };
			return n.d(e, 'a', e), e;
		}),
		(n.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(n.p = ''),
		n((n.s = 3));
})([
	function (t, e) {
		var n = document.querySelectorAll('.n-questions__title');
		n &&
			n.forEach(function (t) {
				return t.addEventListener('click', function () {
					var e = t.nextElementSibling;
					e.style.maxHeight
						? ((e.style.maxHeight = null), e.classList.toggle('active'))
						: ((e.style.maxHeight = e.scrollHeight + 'px'), e.classList.toggle('active')),
						t.classList.toggle('active');
				});
			});
	},
	function (t, e) {
		document.querySelectorAll('input[name=n-phone]').forEach(function (t) {
			intlTelInput(t, {
				initialCountry: 'by',
				hiddenInput: 'phone',
				autoHideDialCode: !0,
				separateDialCode: !0,
				preferredCountries: ['by', 'ru', 'ua', 'lv', 'lt', 'ee'],
				utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js',
			});
		}),
			$('input[name="n-phone"]').on('close:countrydropdown', function (t, e) {
				$(this).val(''), $(this).mask($(this).attr('placeholder').replace(/[0-9]/g, 'd'));
			}),
			($.mask.definitions[9] = ''),
			($.mask.definitions.d = '[0-9]'),
			$('input[name=n-phone]').mask('dd ddd-dd-dd');
	},
	function (t, e) {
		var n = document.querySelector('.n-contraindications__btn-more'),
			i = document.querySelector('.n-contraindications__description');
		n &&
			i &&
			n.addEventListener('click', function () {
				n.classList.toggle('active'), i.classList.toggle('active');
			});
	},
	function (t, e, n) {
		'use strict';
		n.r(e);
		var i = function (t, e) {
			var n = document.querySelectorAll(t),
				i = document.querySelectorAll(e);
			if (n && i) {
				n.forEach(function (t, e) {
					return t.addEventListener('click', function () {
						n.forEach(function (t) {
							return t.classList.remove('active');
						}),
							i.forEach(function (t) {
								t.classList.remove('active');
							}),
							t.classList.add('active'),
							i[e].classList.add('active');
					});
				});
			}
		};
		n(0), n(1), n(2);
		window.addEventListener('DOMContentLoaded', function () {
			i('.n-types-nav__btn', '.n-types-content__item'), i('.n-blockquotes__images-item', '.n-blockquotes__texts-item');
		});
	},
]);
// js for inplantacziya (end)

const webinarOverlay = document.querySelector('.n-webinar__overlay');
const webinarBtnClose = document.querySelector('.n-webinar__close');
const redirectionLink = document.querySelector('.n-modal-redirection-link');

if (webinarOverlay && webinarBtnClose) {
	setTimeout(() => {
		webinarOverlay.classList.add('active');
		document.body.classList.add('fancybox-active', 'compensate-for-scrollbar');
	}, 40000);

	webinarBtnClose.addEventListener('click', () => {
		webinarOverlay.classList.remove('active');
		document.body.classList.remove('fancybox-active', 'compensate-for-scrollbar');
	});
}

if (redirectionLink) {
	redirectionLink.addEventListener('click', () => {
		$.fancybox.close({
			src: '#n-redirection',
			type: 'inline',
		});
	});
}

const trModal = document.querySelector('.tr-modal');
const modalScrollContainer = document.querySelectorAll('.f-modal__scroll-container');
const modalScrollIcon = document.querySelectorAll('.f-modal__scroll-icon');

if (modalScrollContainer && modalScrollIcon) {
	modalScrollContainer.forEach((item, i) => {
		item.addEventListener('scroll', () => {
			modalScrollIcon[i].style.display = 'none';
		});
	});
}

// if (foreignersModal && !localStorage.getItem('getModalForeigners')) {
//     localStorage.getModalForeigners = true;
//   setTimeout(() => {
//         $.fancybox.open({
//         src: foreignersModal,
//         type: 'inline',
//         opts: {
//     		touch: false,
//     		clickSlide: false,
//     		clickOutside: false,
//     		animationEffect: false,
//     		closeExisting: true,
//     		afterShow: function( instance, current ) {
//
// 		    }
// 	    },

//     });
//   }, 10000)
// }

const trModalBtnClose = document.querySelector('.tr-modal__btn-close');
const trModalBtn = document.querySelector('.tr-modal__button');

if (trModalBtn) {
	trModalBtn.addEventListener('click', () => {
		window.open('https://kano.by/implantacziya-pribaltika/', '_blank');
	});
}

if (trModalBtnClose && trModalBtn) {
	trModalBtnClose.addEventListener('click', () => {
		trModal.style.display = 'none';
	});

	trModalBtn.addEventListener('click', () => {
		trModal.style.display = 'none';
		ym(32775105, 'reachGoal', 'pop_up_opened');
	});

	if (trModal && !localStorage.getItem('getModalForeigners')) {
		localStorage.getModalForeigners = true;

		trModal.style.display = 'block';
		ym(32775105, 'reachGoal', 'plazhka_appeared');
	}
}

// fancybox general
$.fancybox.defaults.clickSlide = false;
$.fancybox.defaults.clickOutside = false;
$.fancybox.defaults.touch = false;
$.fancybox.defaults.animationEffect = false;
$.fancybox.defaults.closeExisting = true;

(function () {
	const instructionBlock = document.querySelector('.n-instruction__block');
	const instructionTitle = document.querySelector('.n-instruction__title');
	const instructionImg = document.querySelector('.n-instruction__img');

	if (instructionBlock && instructionTitle) {
		instructionTitle.addEventListener('click', () => {
			instructionImg.classList.toggle('active');
			instructionBlock.classList.toggle('active');
		});
	}
})();

const slider = document.querySelector('.fp-advantages');

if (slider) {
	const swiper = new Swiper('.fp-advantages', {
		slidesPerView: 2,

		loop: false,
		navigation: {
			nextEl: '.fp-advantages-button-next',
			prevEl: '.fp-advantages-button-prev',
		},

		breakpoints: {
			320: {
				slidesPerView: 1.3,
				spaceBetween: 10,
			},

			540: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
		},
	});
}
