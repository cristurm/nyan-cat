console.log('Nyan!');

const NyanCat = {
	init: function () {
		this.cat = document.getElementById('nyan-cat');
		this.framesAmount = 6;
		this.currentFrame = 1;
	},

	cycleFrames: function () {
		let myself = this;
		this.cat.classList.remove('frame' + myself.currentFrame);
		this.cat.classList.add('frame' + myself.cycleIds(myself.currentFrame));
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

const ReplicateSparks = (_sparksRow) => {
	const numberOfRowsToCoverEntireScreen = Math.ceil(document.body.offsetHeight / _sparksRow.offsetHeight);
	const newSparksRows = document.createElement('div');

	for (let a = 0; a < numberOfRowsToCoverEntireScreen-1; a++) {
		newSparksRows.append(_sparksRow.cloneNode(true));
	}

	document.body.prepend(newSparksRows);
};

(function () {
	NyanCat.init();
	ReplicateSparks(document.querySelector('.sparks-combo'));

	setInterval(function () {
		NyanCat.cycleFrames();
	}, 70);
})();
