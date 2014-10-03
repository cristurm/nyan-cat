console.log('Nyan!');

$(function() {
	var nyancat = new NyanCat(),
		sparks = new Sparks();

	nyancat.init();
	sparks.init();

	var timer = setInterval(function () {
		nyancat.cycleFrames();

		sparks.allCombos.each(function () {
			sparks.moveSparksCombo($(this));
		});
	}, 70);
});