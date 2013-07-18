'use strict'

function Score() {
	this.initialize()
}

Score.prototype = {
	initialize: function() {
		ScoreDAO.getALL(this.exec)
	},
	exec: function(results) {
		
		var len = results.length
		var msg = ''
		var pseudos = []
		
		for (var i = 0; i < len; i++) {
			if(typeof pseudos[results[i].pseudo] == 'undefined')
				pseudos[results[i].pseudo] = []
			
			pseudos[results[i].pseudo].push(results[i].score)
			var tr = document.createElement('tr')
			var tdPseudo = document.createElement('td')
			var tdScore = document.createElement('td')
			var tdDate = document.createElement('td')
			var tdObjective = document.createElement('td')
			
			$(tdPseudo).text(results[i].pseudo).attr('class', 'pseudo')
			$(tdScore).text(results[i].score).attr('class', 'score')
			$(tdDate).text(results[i].date).attr('class', 'date')
			$(tdObjective).text(results[i].objective).attr('class', 'objectif')
			
			$(tr).append(tdPseudo)
			$(tr).append(tdScore)
			$(tr).append(tdDate)
			$(tr).append(tdObjective)
			
			$('#score').append(tr)
		}
		
		
		var maxpseudo = ''
		var tmp = []
		var data = []
		var max = 0
		var j = 0
		
		for(var i in pseudos) {
			if(max < pseudos[i].length) {
				max = pseudos[i].length
				maxpseudo = i
			}
		}
		
		for(var i in pseudos) {
			for(var k = pseudos[i].length; k < pseudos[maxpseudo].length; k++)
				pseudos[i].push(-1)
			
			data.push(pseudos[i])
			tmp.push(i)	
		}
		
		var nb = []
		for(var p = 0; p <  pseudos[maxpseudo].length; p++)
			nb.push(p)
			

		
		drawChart(data, tmp, nb)
	}
}

var drawChart = function(data, pseudo, max) {

		var line = new RGraph.Line('cvs', data);
		line.Set('chart.labels', max);
		line.Set('chart.key', pseudo);
		line.Set('chart.tickmarks', 'circle');
		line.Draw();
	}
