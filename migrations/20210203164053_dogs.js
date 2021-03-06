exports.up = function(knex) {
	return knex.schema.createTable("dogs", function(table) {
		table.increments("id");
		table.string("name", 255).notNullable();
		table.string("age", 255).notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable("dogs");
};
