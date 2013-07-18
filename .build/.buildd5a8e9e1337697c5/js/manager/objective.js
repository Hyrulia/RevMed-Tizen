"use strict"

var idx = 0

function Objective() {
	this.initialize()
}

Objective.prototype = {
	initialize: function() {
		var specId = App.getSpecialityId()
		ObjectiveDAO.getBySpecialityId(specId, this.toHTML)
	},
	toHTML: function(o) {	
				
		var div = document.createElement('div')
		var img = document.createElement('img')
		img.src = 'css/img/7arboucha_' + ((idx % 3) + 1) + '.png'
		idx++
		$(img).attr('class', 'imgState2')
		div.textContent = o.objective
		div.setAttribute('class', 'objective ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all')
		$(div).click(function() {
			App.setObjectiveId(o.id)
			document.location.href = 'question.html'
		})
		$(div).append(img)
		$('#global').append(div)
	}
}
