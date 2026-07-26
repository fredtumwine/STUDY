const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bcrypt = require('bcrypt');

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('database is connected');
})
.catch(()=>{console.log("please make sure what you are doing you know it")});

// SCHEMA

const userSchema = new mongoose.Schema({
    name:{
        type:String,

    },
    email:{
        type:String
    },
    role:{
        type:String,
        ENUM:['admin','user']
    },
    password:{
        type:String
    },
    confirm:{
        type:String
    }
});

const User = mongoose.model('users',userSchema);

// initializing app

const app = express();
app.use(express.json());
app.use(cors());


// API

app.post('/reg',async(req,res)=>{

    const{name,email,role,password,confirm} = req.body;

    const verify = await User.findOne({email})
    if(verify){
        return res.json({message:"email already exist try to use another"});
    }
    if(password.length<4){
        return res.json({message:"password should be 4 character"})
    }
    if(password !== confirm){
        return res.json({message:"password should match"})
    }

    const hashedPassword = await bcrypt.hash(password,10)
    
    const newUser = await User.create({
        name,
        email,
        role,
        password:hashedPassword
    })

    res.json({user:newUser,message:"registration succesfully"});
});


// login

app.post('/login',async(req,res)=>{

    const {email,password} = req.body;
    
    const verify = await User.findOne({email});
    if(!verify){
      return res.json({message:"email not found"});
    }
    
    const hashed = await bcrypt.compare(password,verify.password)

    if(!hashed){
        return res.json({message:'incorrect credentials'});
    }

    res.json({
        name:verify.name,
        email:verify.email,
        role:verify.role,
        
        message:"login succesfully"});
})


//trive

app.get('/all',async(req,res)=>{

    const all = await User.find()

    res.json({users:all,message:"all users"})

});


app.get('/all/:id',async(req,res)=>{

    const all = await User.findById(req.params.id)

    res.json({user:all,message:"user found"})
});


app.delete('/delete/:id',async(req,res)=>{
  
  const deleteUser = await User.findByIdAndDelete(req.params.id)


  res.json({message:'user has been deleted successfully'});


})

app.put('/put/:id',async(req,res)=>{

    const {name,email,role,password,confirm} = req.body;

    const verify = await User.findOne({email})
    if(verify && verify._id.toString() !== req.params.id){
        return res.json({message:"use another email"})
    }

    if(password.length<4){
        return res.json({message:"use password of atleast 4 characters"});
    }

    if(password !== confirm){
        return res.json({message:"password must match"});
    }

    const hashed = await bcrypt.hash(password,10)

    const update = await User.findByIdAndUpdate(req.params.id,{
        name,
        email,
        role,
        password:hashed
    },{new:true})

    res.json({user:update,message:"user updated sucesfully"})
})

app.listen(process.env.PORT);