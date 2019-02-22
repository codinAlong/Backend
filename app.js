const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())



//shows errors from the routes
app.use((err,req,res,next)=>{
    console.log(err);
    const status = err.status || 500
    res.status.send({error:err})
})

//default router error
app.use((req,res,next)=>{
    res.status(404).json({error: { type: 404, message: `route not found`}})
})

app.listen(port, ()=>{console.log(`listening on port ${port}`);
})

module.exports = app