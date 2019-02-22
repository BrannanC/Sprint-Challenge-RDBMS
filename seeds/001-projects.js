
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {projectName: "Complete Sprint", description: "Get all the MVP done then flex on 'em"},
        {projectName: "Get some food", description: "Hopefully BWW, but my SO doesn't like it :("}
      ]);
    });
};
