'use strict'

function Question() {
	this.questions = []
	this.max = 5
	this.idx = 1
	this.score = 0
	this.objId = App.getObjectiveId()
	this.finished = false
	this.initialize()

}

Question.prototype = {
	initialize: function() {
		QuestionDAO.getByObjectiveId(this.objId, this.max, this)
	},
	addQuestion: function(q) {
		this.questions.push(q)
	},
	start: function() {
		this.idx = 0
		this.nextQuestion()
	},
	nextQuestion: function() {
		if(this.idx < this.max) {
			var id = this.questions[this.idx].id
			var choices = ChoiceDAO.getByQuestionId(id, Choice.toHTML)
			this.toHTML(this.questions[this.idx])
			this.idx++
		} else
			if(App.getMode() == 0)
				this.saveScore()
			else
				document.location.href = 'menu.html'
	},
	toHTML: function(q) {

		var div = document.createElement('div')
		var div2 = document.createElement('div')
		$(div).html(q.question)
		div.setAttribute('class', 'question')
		$(div2).html(q.revision)
		$('#revision').append(div2)
		$('#question').append(div)
	}, 
	saveScore: function() {
		this.finished = true
		var div = document.createElement('div')
		var input = document.createElement('input')
		$(div).attr('title', 'Voulez-vous enregistrer votre score?')
		input.value = 'Votre pseudo?'
		$(input).attr({'style': 'font-size: 1.5em'})
		$(input).click(function(){
			this.value = ''
		})
		$(div).append(input)
		var score = this.score.toFixed(2)
		var id = this.objId
		$(div).dialog({
			width: 600,
			modal: true,
			resizable: false,
			buttons: {
				'ok': function() {
					ScoreDAO.insert(score, new Date().toString(), input.value, id)
					setTimeout(function() {
					document.location.href = 'menu.html'
					}, 500);
				}, 'cancel': function() {
					document.location.href = 'menu.html'
				}
			}
		})
	}
}
