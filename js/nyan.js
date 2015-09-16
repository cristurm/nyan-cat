var cats = ["america",
"balloon",
// "bday",
// "breakfast",
// "dub",
// "easter",
// "elevator",
// "fiesta",
"gb",
// "j5",
"jamaicnyan",
"jazz",
// "manyan",
// "melon",
// "mexinyan",
"mummy",
"newyear",
"nyancoin",
"nyaninja",
"original",
// "patty",
// "pirate",
"pumpkin",
"retro",
"sad",
"slomo",
// "star",
// "tacnayn",
"technyancolor",
"vday",
"wtf",
// "xmas",
"zombie"];

var audioOverrides = new Set(["breakfast", "easter", "melon", "mummy", "nyancoin", "patty","pirate","pumpkin","zombie"]);

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

	var index = 0;

	$(window).click(function() {
		index = ++index % cats.length; 
		$("#nyan-cat").attr("src", "cats/" + cats[index] + ".gif");
		if(!audioOverrides.has(cats[index])) {
			$("#ogg").attr("src", "audio/" + cats[index] + ".ogg");
		}
		else {
			$("#ogg").attr("src", "audio/original.ogg");
		}
		document.getElementById("ogg").load();
	});

});