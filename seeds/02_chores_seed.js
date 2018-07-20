exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "chores"; ALTER SEQUENCE chores_id_seq RESTART WITH 4;')
    .then(function () {
      var chores = [{
        id: 1,
        choreName: 'dishes',
        description:'Wash the dishes',
        value:2,
        dateDue:"2-10-2019",
        
      }, {
        id: 2,
        choreName: 'dishes',
        description:'Wash the dishes',
        value:2,
        dateDue:"2-10-2019",
        
      },
      {
        id: 3,
        choreName: 'dishes',
        description:'Wash the dishes',
        value:2,
        dateDue:"2-10-2019",
        
      }];
      return knex('chores').insert(chores);
    });
};