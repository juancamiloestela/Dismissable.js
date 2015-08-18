/*! dismissable-js - v0.0.0 - 2015-08-17 */(function($){
	'use strict';

	function dismiss(e){
		e.preventDefault();
		e.stopPropagation();

		var $this = $(e.currentTarget);

		$this.closest('.dismissable').fadeOut(function(){
			$this.remove();
		});
	}

	$( document ).on('click', '.dismissable .dismiss', dismiss);

})(jQuery);