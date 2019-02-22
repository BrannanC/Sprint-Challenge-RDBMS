
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.string('projectName', 50).unique().notNullable();
        tbl.string('description', 128).unique().notNullable();
        tbl.boolean('isComplete').notNullable().defaultTo(false);
        tbl.timestamp('createdAt').defaultTo(knex.fn.now());
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
