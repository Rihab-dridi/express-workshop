const express=require('express')
const { get } = require('http')
const router = express.Router()
const users=require('../data')

//@role:testing
//@url:http://localhost:5000/users/test
//@public/private
router.get('/test',(req,res)=>{
    res.send('hello from the router ')
})

//@role:get all the users
//@url:http://localhost:5000/users/all
//@public/private
router.get('/all',(req,res)=>{
res.send(users)
})

//@role:add a new user 
//@url:http://localhost:5000/users/add
//@public/private
router.post('/add',(req,res)=>{

const newUser={...req.body,id:Math.random()  }

if(!newUser.name || !newUser.email ){ return  res.json({msg:' the feilds are empty '}) }

users.push(newUser)
res.json({msg:'the user is added successfully', users})

})

//@role:edit a specific user 
//@url:http://localhost:5000/users/edit/:id
//@public/private

router.put('/edit/:idt',(req,res)=>{

const id= req.params.idt
let userToEdit= users.find(user=>user.id==id)


})



module.exports=router