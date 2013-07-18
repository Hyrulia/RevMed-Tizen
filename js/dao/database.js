"use strict";

function DataBase(name, version, desc, size) {
	this.db = openDatabase(name, version, desc, size)
}

DataBase.prototype = {
	query: function(req, params, fn) {
		this.db.transaction(function (tx) {
  			tx.executeSql(req, params, fn)
		})
	}
}

var DB = {
	db: null,
	get: function() {
		if(this.db == null)
			this.db = new DataBase('revmed2', 1.0, 'evamedic base', 5 * 1024 * 1024);
		return this.db
	}
}
