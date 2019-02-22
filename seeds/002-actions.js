
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {projectId: 1, action: "Migrate. Maybe to Canada.", notes: "I've thought a lot about Chile, though",},
        {projectId: 1, action: "Seed. That doesn't sound right", notes: "I don't even want kids.",},
        {projectId: 2, action: "Communicate", notes: "Usually a good first step",}
      ]);
    });
};
