var Rainbow = function () {
	return {
		init: function () {		
			this.waveCombos = $('.wave-combo');
			this.initWaveCombos(this.waveCombos);
		},
		
		cycleFrames: function (_flag) {			
			if (_flag) {
				this.waveCombos.toggleClass('bottom')
							   .toggleClass('top');
			}
		},
		
		initWaveCombos: function (_combos) {
			_combos.each(function () {
				var childWave = $(this).children('.wave'),
					wavesAmount = Math.floor($(this).width() / childWave.width());
					
				for (var a = 1; a < wavesAmount; a += 1) {
					$(this).append(childWave.clone());
				}
				
				$('#rainbow').width(wavesAmount * childWave.width());
			});
		}
	}
}