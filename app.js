const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors')
const bodyParser = require('body-parser')

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').load()
  }

app.use(bodyParser.json())
app.use(cors())

app.use('/auth', require('./MVC/routes/auth'))
app.use('/users', require('./MVC/routes/users'))

//shows errors from the routes
app.use((err,req,res,next)=>{
    console.log(err);
    const status = err.status || 500
    res.status(404).send({error:err})
})

//default router error
app.use((req,res,next)=>{
    res.status(404).json({error: { type: 404, message: `route not found`}})
})

app.listen(port, ()=>{console.log(`listening on port ${port}`);
})

module.exports = app