var palettes = require('../palettes.json');

exports.randomPalette = function(req, res) {
	var random = palettes[Math.floor(palettes.length * Math.random())];
	res.json(random);
}