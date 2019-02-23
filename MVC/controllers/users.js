const userModel = require('../models/users')

function getAll(req,res,next){
    const data = getAll.userModel()

    if(!data){
        return next({status: 400, message:'Bad username'})
    }

    res.status(200).send({data})
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
    createUser, getAll
}