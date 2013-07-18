"use strict";

var ScoreDAO = {
	insert: function(score, date, pseudo, objId) {
		var db = DB.get()
		db.query('INSERT INTO scores(score, pseudo, date, objective_id) VALUES (?, ?, ?, ?)', 
		[score, pseudo, date, objId])
	},
	getALL: function(fn) {
		var db = DB.get()
		var tab = []
		db.query('SELECT * FROM scores INNER JOIN objectives ON scores.objective_id = objectives.id ORDER BY date', [], function(tx, results){
			var length = results.rows.length
			
			for(var i = 0; i < length; i++) {
				var score = results.rows.item(i).score
				var pseudo = results.rows.item(i).pseudo
				var date = results.rows.item(i).date
				var objective = results.rows.item(i).objective
				tab.push({"score": score, "pseudo": pseudo, "date": date, "objective": objective})
			}
			fn(tab)
		});
		
	}
}

