var express = require('express')
var Mongoose = require('mongoose')
var BodyParser = require('body-parser')
var cors = require('cors')
var app=express()

var User = require('./models/User.js')
var student
app.use(BodyParser.urlencoded({
    extended: true
  }));
  app.set('view engine', 'hbs')
app.use(BodyParser.json())
app.use(cors())
app.use('/',express.static('helo'));
app.get('/',(req,res) => {
   res.render('index')

})

app.get('/result',async(req,res) => {
   
    var number =req.header('Query') 

        try {
student = await User.findOne({rno : number})
        } catch(error) {
       student = await User.findOne({Name:req.header('Query')})
        }
    res.send(student)
 })

 app.get('/auto',async(req,res) => {
     var fdata , data
  
        data = await User.find({}).distinct('Name')
   //console.log(data)
    fdata = data.filter(dat => dat.includes(req.header('txt')));
   
       
   
   res.send(fdata)
 })

app.post('/addstudent',(req,res) => {
  
 console.log(req.body)
 var newstudent = new User (req.body)
 newstudent.save();
 res.redirect('/')
 })

 app.post('/updatestudent',(req,res) => {
  
    User.findOneAndUpdate({rno : req.body.rno,Name:req.body.Name},{rno :req.body.nrno , Name:req.body.nName
    },function(err,result) {
       //console.log(result)
    })
    res.redirect('/')
    })

 app.post('/delstudent',async(req,res) => {
  
    console.log(req.body)
    student = await User.findOneAndDelete({rno : req.body.rno})
    res.redirect('/')
    })

Mongoose.connect('mongodb://127.0.0.1:27017/student-data', (err)=> {
    if(!err)
    console.log('connected')
})

app.listen(3000)