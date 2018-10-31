exports.up = function(knex) {
	return knex.schema.createTable("notes", function(tbl) {
		tbl.increments();
		tbl.string("title", 128).notNullable();
		tbl.string("body", 128).notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists("notes");
};
