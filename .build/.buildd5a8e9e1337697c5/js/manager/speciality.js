"use strict"

var idx = 0

function Speciality() {
	this.initialize()
}

Speciality.prototype = {
	initialize: function() {
		SpecialityDAO.getAll(this.toHTML)
	},
	toHTML: function(s) {
		
		var div = document.createElement('div')
		var img = document.createElement('img')
		img.src = 'css/img/spec_icone_' + ((idx % 7)) + '.png'
		idx++
		$(img).attr('class', 'imgState2')
		div.textContent = s.speciality
		div.setAttribute('class', 'speciality ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all')
		$(div).click(function() {
			App.setSpecialityId(s.id)
			document.location.href = 'objective.html'
		})
		$(div).append(img)
		$('#global').append(div)
	}
}
