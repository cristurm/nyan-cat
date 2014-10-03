var Sparks = function () {
	return {
		init: function () {
			this.initSparksCombos($('.sparks-combo'));
			this.allCombos = $('.sparks-combo');
		},

		// Combos Controllers
		moveSparksCombo: function (_combo) {
			var newLeft = parseInt(_combo.css('left'), 10) - 52;

			if (newLeft < -400) {
				var line = '.line-' + _combo.attr('class').match(/[0-9]+/)[0],
					furtherElem = $(line + '.further'),
					further = 0;

				further = parseInt(furtherElem.css('left'), 10);
				newLeft = further + _combo.width();

				furtherElem.removeClass('further');
				_combo.addClass('further');
			}

			_combo.css('left', newLeft);
		},

		initSparksCombos: function (_combo) {
			var xCombosAmount = Math.ceil($(document).width() / _combo.width()),
				yCombosAmount = Math.ceil($(document).height() / _combo.height()),
				newCombo = null,
				comboWrapper = $(document.createElement('div')),
				comboTags = $(document.createElement('div')),
				prevLeftPos = parseInt(_combo.css('left'), 10) - _combo.width(),
				newLeftPos = 0;

			for (var a = 0; a < yCombosAmount; a += 1) {
				for (var b = 0; b <= xCombosAmount; b += 1) {
					newCombo = _combo.clone();
					newLeftPos = prevLeftPos + newCombo.width();

					newCombo.css({'left': newLeftPos})
							.addClass('line-' + a);

					if (b === xCombosAmount) {
						newCombo.addClass('further');
					}

					prevLeftPos = newLeftPos;
					comboTags.append(newCombo); // <- improve this crap
				}

				prevLeftPos = parseInt(_combo.css('left'), 10) - _combo.width();
				comboWrapper.append(comboTags);
				comboTags = $(document.createElement('div'));
			}

			_combo.remove();
			$('body').prepend(comboWrapper.html());
		}
	}
}