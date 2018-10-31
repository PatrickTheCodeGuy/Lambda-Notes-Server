exports.up = function(knex, Promise) {
	return knex.schema.createTable("notes", function(tbl) {
		tbl.increments();
		tbl.string("title", 128).notNullable();
		tbl.string("body", 128).notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.dropTableIfExists("notes");
};
