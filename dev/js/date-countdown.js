(function () {
	var
			dateCountdown = [],
			countdownElements = [
				{
					varName: '_daysEl',
					text:    'Days'
				},
				{
					varName: '_hoursEl',
					text:    'Hours'
				},
				{
					varName: '_minutesEl',
					text:    'Minutes'
				},
				{
					varName: '_secondsEl',
					text:    'Seconds'
				}
			],
			timeInMs = Date.now();
	
	console.log(timeInMs);

	function MyDateCountdown(element) {
		this._element = element;
		this._date = new Date();

		countdownElements.forEach(function (item) {
			var
					itemEl = document.createElement('div'),
					valueEl = document.createElement('div'),
					descriptionEl = document.createElement('div');

			// Create Value
			itemEl.classList.add('item');
			element.appendChild(itemEl);

			// Create Value
			this[item.varName] = valueEl;
			valueEl.classList.add('value');
			valueEl.innerHTML = 0;
			itemEl.appendChild(valueEl);

			// Create Description
			descriptionEl.classList.add('description');
			descriptionEl.innerHTML = item.text;
			itemEl.appendChild(descriptionEl);
		}.bind(this));

		if ( element.hasAttribute( 'data-date' ) ) {
			this._date = new Date( element.getAttribute( 'data-date' ) )
		}

		// this._date = this._date.getMilliseconds();

		console.log( this._date.getTime() );

		window.setInterval( this.renderDate.bind(this), 1000 );
	}

	MyDateCountdown.prototype.renderDate = function() {
		console.log(Date.now());
	};


	document.addEventListener("DOMContentLoaded", function () {
		var elements = document.querySelectorAll(".date-countdown");

		for (var i = 0; i < elements.length; i++) {
			dateCountdown.push(new MyDateCountdown(elements[i]));
		}
	});
})();
