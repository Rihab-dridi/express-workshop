const express=require('express')
const { get } = require('http')
const router = express.Router()
let users=require('../data')

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
//@url:http://localhost:5000/users/edit/:idt
//@public/private

router.put('/edit/:idt',(req,res)=>{

const id= req.params.idt
let userToEdit= users.find(user=>user.id==id)
const editedUser={...userToEdit, ...req.body }

if(!userToEdit){ return res.json({msg:'the user is not found '})}

users=users.map((user=>user.id==id? editedUser:user ))

res.json({msg:`the user ${userToEdit.name} has been edited`,users })
})

//@role:delete a specific user 
//@url:http://localhost:5000/users/delete/:id
//@public/private

router.delete('/delete/:id',(req,res)=>{

    const id=req.params.id

    users=users.filter(user=>user.id!=id)
    res.json({msg:`the userr has been deleted`,users})



})

module.exports=router