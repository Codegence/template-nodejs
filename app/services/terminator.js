/**
* TerminatorResource
*/

module.exports = function(app){

	app.post('/sectors/:sectorId/factions/:factionId/terminators/:id',function(req, res, next) {
		var sectorId = req.params.sectorId
		    , id = req.params.id;

		console.log(req.params);

		var action = { command: "advance", value: 50 };

		return res.send(action);
	});

	app.put('/sectors/:sectorId/factions/:factionId/terminators/:id',function(req, res, next) {
		var sectorId = req.params.sectorId
		    , id = req.params.id;

		console.log(req.params);
		var command = "";
		if( Math.random() > 0.5 ) {
			command = "rotate";
		} else {
			command = "advance";
		}

		var action = { command: command, value: 90 };

		return res.send(action);
	});
	
}