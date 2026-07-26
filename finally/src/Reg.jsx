import React, { useState } from 'react'

function Reg() {

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:"",
        role:'',
        confirm:""
    
    });

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })


    }

    const handleSubmit = async(e)=>{
        e.preventDefault();

        const res = await fetch("http://localhost:1000/reg",{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },

            body:JSON.stringify(formData)
        })

        const data = await res.json()

        if(data.message =="email already exist try to use another"){
            alert("use naother email")
        }
        else if(data.message =="password should be 4 character"){
            alert("password should be 4 characters")
        }
        else if(data.message =='password should match'){
            alert("password should match")
        }
        else{
            alert('registration scucesfully');
        }
    }
  return (
    <div>

        <form action="" onSubmit={handleSubmit}>
            <h1>CREATE ACCOUNT</h1>
            <input type="text" placeholder='enter your name'  name='name' value={formData.name} onChange={handleChange}/> <br />
            
            <input type="text"  placeholder='enter your email' name='email' value={formData.email} onChange={handleChange}/><br />
            <select name="" id=""name='role' value={formData.role} onChange={handleChange}>
             <option value="">select </option>
             <option value="admin">admin</option>
             <option value="user">user</option>

           </select> <br />
            <input type="text"  placeholder='enter your password' name='password' value={formData.password} onChange={handleChange}/><br />
            <input type="text" placeholder='enter your passwword to confirm' name='confirm' value={formData.confirm} onChange={handleChange} /><br />
        
            <button type='submit'>signup</button>
        </form>
    </div>
  )
}

export default Reg