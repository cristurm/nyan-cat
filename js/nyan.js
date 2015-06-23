var cats = ["america.gif",
"balloon.gif",
// "bday.gif",
"breakfast.gif",
// "dub.gif",
// "easter.gif",
// "elevator.gif",
// "fiesta.gif",
"gb.gif",
// "j5.gif",
"jamaicnyan.gif",
"jazz.gif",
// "manyan.gif",
// "melon.gif",
// "mexinyan.gif",
"mummy.gif",
"newyear.gif",
"nyancoin.gif",
"nyaninja.gif",
"original.gif",
// "patty.gif",
// "pirate.gif",
"pumpkin.gif",
"retro.gif",
"sad.gif",
"slomo.gif",
// "star.gif",
// "tacnayn.gif",
"technyancolor.gif",
"vday.gif",
"wtf.gif",
// "xmas.gif",
"zombie.gif"]

var Sparks = function () {
	return {
		init: function (_combo) {
			var yCombosAmount = Math.ceil($(document).height() / _combo.height()),
					comboTags = $(document.createElement('div')),
					newCombo = null;

			for (var a = 0; a < yCombosAmount-1; a += 1) {
				newCombo = _combo.clone();
				comboTags.append(newCombo);
			}

			$('body').prepend(comboTags.html());
		}
	}
};

$(function() {
	var sparks = new Sparks();
	sparks.init($('.sparks-combo'));

	var index = 19; //cuz its the original.

	$(window).click(function() {
		console.log("TEST");
		index = ++index % cats.length; 
		var src = "cats/" + cats[index];
		console.log(src);
		$("#nyan-cat").attr("src", src);
	});

});