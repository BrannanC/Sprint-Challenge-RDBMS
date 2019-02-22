
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', tbl => {
        tbl.increments();
        tbl.integer('projectId').unsigned().references('id').inTable('projects')
          .onDelete('CASCADE').onUpdate('CASCADE').notNullable();
        tbl.string('action', 50).unique().notNullable();
        tbl.string('notes', 255).unique().notNullable();
        tbl.boolean('isComplete').notNullable().defaultTo(false);
        tbl.timestamp('createdAt').defaultTo(knex.fn.now());
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};