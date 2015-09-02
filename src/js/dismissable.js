/*! dismissable-js - v0.0.1 - 2015-09-01 */(function($){
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