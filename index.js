const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())
const port = process.env.PORT || 5000;


app.get('/',(req,res)=>{
    res.send('hello programmers hi here is here');
})

const users = [
    {id:0,name:'Tina', email:'tina@gmail.com',phone:093444},
    {id:1,name:'Ratul', email:'ratul@gmail.com',phone:343444},
    {id:2,name:'Sana', email:'sana@gmail.com',phone:888844},
    {id:3,name:'Rafiq', email:'rafiq@gmail.com',phone:2222244},
    {id:4,name:'Jamil', email:'jamil@gmail.com',phone:777774},
]

app.get('/users',(req,res)=>{
    res.send(users)
})
app.get('/users/:id', (req,res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})
//app.METHOD
app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser) 
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

app.listen(port, ()=>{
    console.log('Listening to port', port)
})