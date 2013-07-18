'use strict'

var Choice = {
	toHTML: function(c) {
		var div = document.createElement('div')
		var img = document.createElement('img')
		$(img).attr('class', 'imgState')
		$(div).text(c.choice)
		div.setAttribute('class', 'choiceDefault choice')
		div.dataset['state'] = c.state
		div.dataset['selected'] = false
		$(div).click(function() {
			this.setAttribute('class', 'choiceFocus choice')
			this.dataset['selected'] = true
		})
		
		$(div).append(img)
		$('#choices').append(div)
	}
}