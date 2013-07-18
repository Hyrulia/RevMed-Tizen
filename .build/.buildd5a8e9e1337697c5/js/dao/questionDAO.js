'use strict'

var QuestionDAO = {
	insert: function(question, revision, objecId) {
		var db = DB.get()
		db.query('INSERT INTO questions(questions, revision, objective_id) VALUES (?, ?, ?)', 
		[question, revision, objecId])
	},
	getByObjectiveId: function(objId, max, ob) {
		var db = DB.get()
		var tab = []
		db.query('SELECT * FROM questions WHERE objective_id = ?',
			 [objId], function(tx, results) {
			var length = results.rows.length
			
			for(var i = 0; i < length; i++) {
				var question = results.rows.item(i).question
				var id = results.rows.item(i).id
				var revision = results.rows.item(i).revision
				tab.push({"question" : question, "id": id, "revision": revision})
			}
			
			tab = App.shuffle(tab)
			for(var i = 0; i < tab.length; i++) {
				ob.addQuestion(tab[i])
			}
			ob.start()
					
		});
	}
}

