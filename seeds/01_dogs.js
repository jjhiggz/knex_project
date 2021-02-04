exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("dogs")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("dogs").insert([{ name: "DOOMSLAYER", age: 1 }]);
		});
};
