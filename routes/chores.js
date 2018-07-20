var express = require('express');
var router = express.Router();
const knex = require('../db/connection');


// get all from database
router.get('/', (request, response, ) => {
  //query the database
  //get relevant data
  // send data
  knex('chores')
  .then(chores =>{
    response.json(chores)
  })
})
router.get('/:id', (request, response, next) =>{
const id = request.params.id

knex('chores')
.select('*')  // you can speciffy what you want to get back
.where('id', id)
.then(chore =>{
    response.json(chore[0])
    })   
})

router.post('/' , (request, response, next) => {
    knex('chores')
    .insert(request.body, '*')
    .then(record => record[0])
    .then(event => {
        response.status(201).json({
            event
        });
    })
})

router.put('/:id', (request, response, next)=>{
    const id = request.params.id

    knex('chores')
    .where('id', id)
    .update(request.body, '*')
    .then((event) => {
        response.json({
            event
        });
    })
})
router.delete('/:id', (request, response, next) =>{
    const id = request.params.id
    knex('chores')
    .where('id', id)
    .del()
    .then((()=>{
        response.status(201).json({
            deleted: true
        });
    }))
})

module.exports = router;