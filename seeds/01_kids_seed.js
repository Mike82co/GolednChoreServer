exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "kids"; ALTER SEQUENCE kids_id_seq RESTART WITH 4;')
    .then(function () {
      var kids = [{
        id: 1,
        name: 'Mike',
        balance: 10
      }, {
        id: 2,
        name: 'Lucy',
        balance: 15
      },
      {
        id: 3,
        name: 'Bobby',
        balance: 7
      }];
      return knex('kids').insert(kids);
    });
};