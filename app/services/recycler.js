/*
    Copyright (C) 2014  Gabriel Flores
    This file is part of Codegence.

    Codegence is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Codegence is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Codegence. If not, see <http://www.gnu.org/licenses/>.
*/

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