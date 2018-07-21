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
        choreName: 'laundry',
        description:'you stink!   was yur stuff!!!',
        value:2,
        dateDue:"5-15-2020",
        
      },
      {
        id: 3,
        choreName: 'Feed the pooch',
        description:'You wanted a puppy. Now ',
        value:2,
        dateDue:"12-12-2030",
        
      }];
      return knex('chores').insert(chores);
    });
};