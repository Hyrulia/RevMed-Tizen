"use strict";

var ObjectiveDAO = {
	insert: function(specId, objective) {
		var db = DB.get()
		db.query('INSERT INTO objectives(objective, speciality_id) VALUES (?, ?)', [objective, specId])
	},
	getBySpecialityId: function(id, fn) {
		var db = DB.get()

		db.query('SELECT * FROM objectives WHERE speciality_id = ?', [id], function(tx, results) {
			var length = results.rows.length
			
			for(var i = 0; i < length; i++) {
				var objective = results.rows.item(i).objective
				var id = results.rows.item(i).id
				fn({"objective": objective, "id": id})
			}
		});
	},
	getById: function(id, fn) {
		var db = DB.get()
		
		db.query('SELECT * FROM objectives WHERE id = ?', [id], function(tx, results) {
			var length = results.rows.length
			
			if(length != 0) {
				var objective = results.rows.item(i).objective
				var id = results.rows.item(i).id
				fn({"objective": objective, "id": id})
			}
			
		});
	}
}

