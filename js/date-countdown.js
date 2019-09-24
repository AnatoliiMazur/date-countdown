(function () {
	var dateCountdown = [];

	function MyDateCountdown( element ) {
		var self = this;

		this._element = element;

		function createItemElement() {
			// Create Item
			self._item = document.createElement( 'div' );
			self._item.classList.add( 'item' );
			self._element.appendChild( self._item );
			// Create Value
			self._value = document.createElement( 'div' );
			self._value.classList.add( 'value' );
			self._item.appendChild( self._value );
			// Create Description
			self._description = document.createElement( 'div' );
			self._description.classList.add( 'description' );
			self._item.appendChild( self._description );
		}

		for ( var i = 0; i < 4; i++  ) {
			createItemElement();
		}
	}

	document.addEventListener( "DOMContentLoaded", function () {
		var elements = document.querySelectorAll( ".date-countdown" );

		for (var i = 0; i < elements.length; i++ ) {
			dateCountdown.push( new MyDateCountdown( elements[i] ) );
		}
	});
})();
