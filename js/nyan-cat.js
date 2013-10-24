var NyanCat = function () {
	return {
		init: function () {		
			this.cat = [$('#nyan-cat'), $('#tail'), $('#paws')];
			this.framesAmount = 6;
			this.currentFrame = 1;
		},
		
		// Sparks Controllers		
		cycleFrames: function () {
			var myself = this;
		
			$.each(this.cat, function(_i, _el) {
				_el.removeClass('frame' + myself.currentFrame);
				_el.addClass('frame' + myself.cycleIds(myself.currentFrame));
			});
			
			this.currentFrame = this.cycleIds(this.currentFrame);
		},
		
		cycleIds: function (_currId) {		
			if (_currId >= this.framesAmount) {
				_currId = 1;
			} else {
				_currId += 1;
			}
			
			return _currId;
		}
	}
}