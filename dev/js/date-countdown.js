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
			];

	function MyDateCountdown(element) {
		this._element = element;
		this._date = new Date();
		this._intervalId = null;

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

		if (element.hasAttribute('data-date')) {
			this.setValue(element.getAttribute('data-date'))
		}

		window.__test = this;
	}

	// Render Date
	MyDateCountdown.prototype.renderDate = function () {

		if (this._date < Date.now()) {
			clearInterval(this._intervalId);
			this._intervalId = null;
			return
		}

		var now = Date.now();
		var target = this._date.getTime();
		var difference = target - now;

		var MS_IN_SECOND = 1000;
		var MS_IN_MINUTE = 1000 * 60;
		var MS_IN_HOUR = 1000 * 60 * 60;
		var MS_IN_DAY = 1000 * 60 * 60 * 24;

		this._daysEl.innerHTML = Math.floor(difference / MS_IN_DAY);
		this._hoursEl.innerHTML = Math.floor((difference % MS_IN_DAY) / MS_IN_HOUR);
		this._minutesEl.innerHTML = Math.floor((difference % MS_IN_HOUR) / MS_IN_MINUTE);
		this._secondsEl.innerHTML = Math.floor((difference % MS_IN_MINUTE) / MS_IN_SECOND);

		console.log('ired0');
	};

	// Set Value
	MyDateCountdown.prototype.setValue = function (value) {
		if (!value) {
			throw new Error("Date is required");
		}
		if (!(value instanceof Date)) {
			value = new Date(value);
		}
		if (value < Date.now()) {
			throw new Error("Date is incorrect");
		}
		this._date = value;
		if (this._intervalId != null) {
			clearInterval(this._intervalId);
		}
		this._intervalId = window.setInterval(this.renderDate.bind(this), 1000);
	};

	document.addEventListener("DOMContentLoaded", function () {
		var elements = document.querySelectorAll(".date-countdown");

		for (var i = 0; i < elements.length; i++) {
			dateCountdown.push(new MyDateCountdown(elements[i]));
		}
	});
})();
