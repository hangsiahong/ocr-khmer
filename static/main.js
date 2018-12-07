function wait() {
	$.blockUI({
		message: '<h3>Please wait...</h3>',
		css: {
			border: 'none',
			padding: '15px',
			backgroundColor: '#000',
			'-webkit-border-radius': '10px',
			'-moz-border-radius': '10px',
			opacity: .9
		},
		overlayCSS:  {
			opacity:	  	 0.75,
		}
	});
	return;
}
$(function () {
	$('#preview').click(function() {
		wait();
	});
	$('#ocr').click(function() {
		//alert($('.chzn-select2').getSelectionOrder().join("+"));
		$('#l3').val($('.chzn-select2').getSelectionOrder().join("+"));
		wait();
	});
});

$.fn.filterByText = function(textbox, selectSingleMatch) {
	return this.each(function() {
		var select = this;
		var options = [];
		$(select).find('option').each(function() {
			options.push({value: $(this).val(), text: $(this).text()});
		});
		$(select).data('options', options);
		$(textbox).bind('change keyup', function() {
			var options = $(select).empty().data('options');
			var search = $.trim($(this).val());
			var regex = new RegExp(search,"gi");

			$.each(options, function(i) {
				var option = options[i];
				if(option.text.match(regex) !== null) {
					$(select).append(
					   $('<option>').text(option.text).val(option.value)
					);
				}
			});
			//if (selectSingleMatch === true && $(select).children().length === 1) {
				$(select).children().get(0).selected = true;
			//}
		});
	});
};

// $(function() {
	// $('#language').filterByText($('#language-filter'), true);
// });
