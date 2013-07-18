"use strict";

var ChoiceDAO = {
	insert: function(choice, state, questId) {
		var db = DB.get()
		db.query('INSERT INTO choice(choice, state, question_id) VALUES (?, ?, ?)', 
		[choice, state, questId])
	},
	getByQuestionId: function(id, fn) {
		var db = DB.get()
		var tab = []
		var carac = ['A. ', 'B. ', 'C. ', 'D. ', 'E. ']
		db.query('SELECT * FROM choices WHERE question_id = ?', [id], function(tx, results) {
			var length = results.rows.length
			
			for(var i = 0; i < length; i++) {
				var choice = results.rows.item(i).choice
				var id =  results.rows.item(i).id
				var state =  results.rows.item(i).state
				tab.push({"choice": carac[i] + choice, "id": id, "state": state})
			}
			
			//tab = App.shuffle(tab)
			for(var i = 0; i < length; i++)
				fn(tab[i])
		})
	}
}

