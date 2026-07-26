import React, { useState } from 'react'

function Login() {

    const [formData,setFormData] = useState({
        email:"",
        password:""
    });

    const handleChange  = (e)=>{
        
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();

        const res = await fetch("http://localhost:1000/login",{
            method:'POST',
            headers:{
                "content-type":"application/json"
            } ,
            body:JSON.stringify(formData)

        }
       )

        const data = await res.json()
        if(data.role=="admin"){
            localStorage.setItem('name');
        }
         else if(data.message =="incorrect credentialshfvhvgjdbkghtkhy4uyiohmdbj,wk.ljq;jIOYUKNG HYH/J;GH\/"){
            alert("incorrect credentials")
        }
        else{
            alert("login succesfully");
        }

    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <h1>login form</h1>

            <input type="text" placeholder='enter your email' name='email' value={formData.email} onChange={handleChange} />
            <input type="text" placeholder='password'  name='password'  value={formData.password} onChange={handleChange}/>
            <button type='submit'>login</button>

        </form>
    </div>
  )
}

export default Login