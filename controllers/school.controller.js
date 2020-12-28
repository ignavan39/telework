const express = require('express')
const app = express.Router()

app.get('/:school',(req,res)=>{
    const school = req.query.school
    res.send('school' + school)
    console.log(school)
})


module.exports = app