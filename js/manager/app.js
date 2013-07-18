"use strict"


var App = {
	
	getSpecialityId: function() {
		return sessionStorage.getItem('speciality_id', 1)
	},
	setSpecialityId: function(id) {
		sessionStorage.setItem('speciality_id', id)
	},
	getObjectiveId: function() {
		return sessionStorage.getItem('objective_id', 1)
	},
	setObjectiveId: function(id) {
		sessionStorage.setItem('objective_id', id)
	},
	setMode: function(mode) {
		sessionStorage.setItem('mode', mode)
	},
	getMode: function() {
		return sessionStorage.getItem('mode', 1) //1: revision - 0: exam
	},
	setMax: function(mode) {
		sessionStorage.setItem('max', mode)
	},
	getMax: function() {
		return sessionStorage.getItem('max', 5) 
	},
	isFirstRun: function() {
		if(localStorage.getItem('firstRun', true)) {
			localStorage.setItem('firstRun', false)
			return true
		}
		return false
	},
	shuffle: function(array) {
	    		var tmp, current, top = array.length;
	
	    		if(top) while(--top) {
			    	current = Math.floor(Math.random() * (top + 1));
			    	tmp = array[current];
			    	array[current] = array[top];
			    	array[top] = tmp;
	    		}

    			return array;
			}
	
}
