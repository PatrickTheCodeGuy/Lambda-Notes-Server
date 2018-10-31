exports.seed = function(knex, Promise) {
	return knex("notes")
		.del()
		.then(function() {
			return knex("notes").insert([
				{ id: 1, title: "Yo", body: "This is a example note" },
				{ id: 2, title: "Todays Day", body: "This is a example note" },
				{ id: 3, title: "What do I do?", body: "This is a example note" }
			]);
		});
};
