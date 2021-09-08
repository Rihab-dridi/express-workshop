const express=require('express')
const app=express()
const userRoutes=require('./routes/userRoutes')
//middleware acess: req, res , next()

const midd=(req,res,next)=>{
console.log('this is from the middleware here ')
next()
}
app.use(midd)
//prebuilt middleware 
app.use(express.json())
app.use(express.static('public'))
app.use('/users', userRoutes)


//routes
// app.get('/',(req,res)=>{
// res.send('hello from my first server ever')
// })

app.get('/home',(req,res)=>{
res.sendFile(__dirname+'/public/home.html')
})

app.get('/about',(req,res)=>{
res.sendFile(__dirname+'/public/about.html')
})

// app.get('*', (req,res)=>{
//     // res.sendStatus(202)
//     res.json({msg:'this path is not define '})
// })


//listen to the server 
const port=5000
app.listen(port, err=>{
    err? console.log(err): console.log(`the server is runnig on ${port}`)
})