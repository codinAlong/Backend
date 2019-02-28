const userModel = require('../models/users')

function getAll(req,res,next){

    getOne.userModel(req.body)
    .then(function(data){
        return res.status(200).send({data})
    })
    .catch(next())
}

function getOne(req, res, next){

    if(!req.params.id){
        return next({ status: 404, message: 'user was not found'})
    }

    getOne.userModel(req.params.id)
    .then(function(data){
        return res.status(200).send({data})
    })
    .catch(next())
}

function createUser(req,res,next){
    if(!req.body.username){
        return next({ status: 400, message: 'Bad username'})
      }
    
      if(!req.body.password){
        return next({ status: 400, message: 'Bad username'})
      }
    
    createUser.userModel(req.body.username, req.body.password)
    .then(function(data){
        return res.status(201).send({data})
    })
    .catch(next())
}

module.exports = {
    createUser, getOne, getAll
}