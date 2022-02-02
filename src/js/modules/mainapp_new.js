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
						} else {
							input.parent().append(html);
						}
					}
				}
			}
		} else {
			modal.find('.form__default').hide();
			modal.find('.form__sent').show();

			form.trigger('reset');
			fbq('track', 'Lead');
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

/*
window.onRoistatModuleLoaded = function () {
    $(document).ready(function(){
        $('input[name="roistat__visit"]').val(window.roistat.getVisit());
        //console.log(window.roistat.getVisit());
    });
};
*/

/*
window.onRoistatAllModulesLoaded = function () {
    window.roistat.registerOnVisitProcessedCallback(function() {
        $('input[name="roistat__visit"]').val(window.roistat.getVisit());
        //console.log(window.roistat.getVisit());
    });
};
*/
