/**
* RecyclerResource
*/

module.exports = function(app){

	app.post('/sectors/:sectorId/factions/:factionId/recyclers/:id',function(req, res, next) {
		var sectorId = req.params.sectorId
		    , id = req.params.id;

		console.log(req.params);

		var action = { command: "newDrone", value: 0 };

		return res.send(action);
	});

	app.put('/sectors/:sectorId/factions/:factionId/recyclers/:id',function(req, res, next) {
		var sectorId = req.params.sectorId
		    , id = req.params.id;

		console.log(req.params);
		var command = "";
		if( Math.random() > 0.5 ) {
			command = "newDrone";
		} else {
			command = "newTerminator";
		}
		var action = { command: "newDrone", value: 0 };

		return res.send(action);
	});

}