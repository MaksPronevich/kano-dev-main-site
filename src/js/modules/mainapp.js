$(document).ready(function () {
	AjaxForm.Message.success = function () {};
	AjaxForm.Message.error = function () {};
	AjaxForm.Message.info = function () {};

	$(document).on('af_complete', function (event, response) {
		var form = response.form,
			modal = form.closest('.form');

		$('.form__message').remove();
		form.find('.form__error').removeClass('form__error');

		if (!response.success) {
			if (response.data) {
				var key, value, focused;
				for (key in response.data) {
					if (response.data.hasOwnProperty(key)) {
						var input = form.find('input[name="' + key + '"],textarea[name="' + key + '"],select[name="' + key + '"]');
						input.parent().addClass('form__error');
						html = '<div class="form__message">' + response.data[key] + '</div>';
						if (key == 'g-recaptcha-response') {
							form.find('.g-recaptcha').append(html);
						} else if (key == 'n-phone') {
							console.log(key);
							input.addClass('error');
							console.log('error');
						} else {
							input.parent().append(html);
						}
					}
				}
			}
		} else {
			if (form.hasClass('n-form--materials')) {
				setTimeout(() => {
					window.open('https://disk.yandex.by/d/tJWKUaOXtsNHrw', '_blank');
				}, 1000);
			} else if (form.hasClass('n-form--webinar')) {
				webinarOverlay.classList.remove('active');
				ym(32775105, 'reachGoal', 'webinar_implantaciya');
				$.fancybox.open({
					src: '#n-redirection',
					type: 'inline',
				});
				setTimeout(() => {
					window.open('https://youtu.be/xzfPF4naaGQ', '_blank');
				}, 1000);
			} else if (form.hasClass('form-webinar-page')) {
				modal.find('.form__default').hide();
				modal.find('.form__sent').show();

				form.trigger('reset');

				setTimeout(() => {
					window.open('https://youtu.be/xzfPF4naaGQ', '_blank');
				}, 1000);
			} else if (form.hasClass('n-form--world')) {
				// ga('send', 'Lead');
				// fbq("track","Lead");
				// ym(32775105,'reachGoal','lead');
			} else if (form.hasClass('f-modal__form')) {
				ym(32775105, 'reachGoal', ' lead_received2');
				$.fancybox.open({
					src: $('#foreigners10'),
					type: 'inline',
					opts: {
						touch: false,
						clickSlide: false,
						clickOutside: false,
						animationEffect: false,
						closeExisting: true,
					},
				});
			} else {
				modal.find('.form__default').hide();
				modal.find('.form__sent').show();

				form.trigger('reset');
				// 			fbq('track', 'Lead');
			}
		}
	});

	$('.search__input').keypress(function (e) {
		if (e.which == 13) {
			$(this).closest('form').submit();
			return false;
		}
	});

	$('.js-vacancy').click(function (e) {
		var position = $(this).attr('data-position');
		$('#vcn-position').val(position);
	});

	// $('input[name="nvisit"]').val(window.roistat.getVisit());
});
