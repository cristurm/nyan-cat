console.log('Nyan!');

var NyanCat = function () {
	return {
		init: function () {		
			this.cat = $('#nyan-cat');
			this.framesAmount = 6;
			this.currentFrame = 1;
		},
		
		// Sparks Controllers		
		cycleFrames: function () {
			var myself = this;
			this.cat.removeClass('frame' + myself.currentFrame).addClass('frame' + myself.cycleIds(myself.currentFrame));
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

$(function() {
	var nyancat = new NyanCat();

	nyancat.init();

	var timer = setInterval(function () {
		nyancat.cycleFrames();
	}, 70);
});