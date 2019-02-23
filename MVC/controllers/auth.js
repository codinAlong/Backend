const authModel = require('../models/auth')
const jwt = require('jsonwebtoken')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
// Login Controller
//
// 1. Make sure that request is good
// 2. Attempt Login
// 3. Create token
// 4. Send back token
//////////////////////////////////////////////////////////////////////////////

const login = (req,res,next) => {
      // 1. Make sure that request is good
  if(!req.body.username){
    return next({ status: 400, message: 'Bad request'})
  }
  if(!req.body.password){
      return next({ status: 400, message: 'bad request'})
  }

   // 2. Attempt Login
   authModel.login(req.body.username, req.body.password)
   .then(function({id, username}){
     // 3. Create token
     const token = jwt.sign({id, username }, process.env.SECRET)
 
     // 4. Send back token
     return res.status(200).send({ token })
   })
   .catch(next)
 }
 
 
 function getAuthStatus(req, res, next){
     res.status(200).send({...req.claim})
 }
 
 //////////////////////////////////////////////////////////////////////////////
 // Quality of Life functions
 //////////////////////////////////////////////////////////////////////////////
 
 function isAuthenticated(req, res, next){
 
   if(!req.headers.authorization){
     return next({ status: 401, message: 'Unauthorized1' })
   }
   const [scheme, credentials] = req.headers.authorization.split(' ')
 
 
 
   jwt.verify(credentials, process.env.SECRET, (err, payload)=>{
     if(err){
       return next({ status: 401, message: 'Unauthorized2' })
     }
 
     req.claim = payload
 
     next()
   })
 }
 
 function isSelf(req, res, next){
 
   if(parseInt(req.params.userId) !== req.claim.id){
     return next({ status: 401, message: 'Unauthorized3' })
   }
 
   next()
 }
 
 
 
 module.exports = {
   login,
   getAuthStatus,
   isAuthenticated,
   isSelf
 }