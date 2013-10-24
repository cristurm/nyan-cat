console.log('Nyan!');

$(function() {
	var flag = false,
		nyancat = new NyanCat(),
		sparks = new Sparks(),
		rainbow = new Rainbow();
	
	nyancat.init();
	sparks.init();
	rainbow.init();
	
	var timer = setInterval(function () {
		nyancat.cycleFrames();
		rainbow.cycleFrames(flag);
		
		sparks.elements.each(function () {
			sparks.cycleFrames($(this));
		});
		
		sparks.allCombos.each(function () {
			sparks.moveSparksCombo($(this));
		});
		
		flag = !flag;
	}, 70);
});