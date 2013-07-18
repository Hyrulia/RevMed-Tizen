"use strict";


var SpecialityDAO = {
	insert: function(spec) {
		var db = DB.get()
		db.query('INSERT INTO specialities(speciality) VALUES (?)', [spec])
	},
	getAll: function(fn) {
		var db = DB.get()
		db.query('SELECT * FROM specialities', [], function(tx, results) {
			var length = results.rows.length
			
			for(var i = 0; i < length; i++) {
				var speciality = results.rows.item(i).speciality
				var specId = results.rows.item(i).id
				fn({"speciality": speciality, "id": specId})
			}	
		});
	}
}

