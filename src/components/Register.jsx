import React, { useState } from "react";


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [Cpass, setCpass] = useState('');
    const [Username, setUserName] = useState('');
    const [Fullname, setFullName] = useState('');
 

    // const handleSubmit = (e) => {
    //     //Check if the entered email is already registered or not and other things
    //     if(password !== Cpass) {
    //         alert('passwordword not matched');
    //         //show it as a dialogue box or as a label in both passwordword and confirm passwordword field
    //     }
    //     e.preventDefault();
    //     console.log(email);
    // }

    const saveSignup=(e)=>{
        if (Username === "" || email === "" || password === "" || Cpass === "") {
            return false;
        }
        if(password.length>=8){
            alert("Minimum 8 characters required");
            return false;
        }
        if (password !== Cpass ) {
            alert("passwordwords do not match.");
            window.location.reload(false);
            return false;
        }
        console.log(Username,Fullname,email,password);
        e.preventDefault();
        fetch("http://localhost:2000/register",{
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type":"applicattion/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body:JSON.stringify({Username,Fullname,email,password}),
        }).then((res)=>res.json())
        .then((data)=>{console.log(data,"userRegister");
    });
    }

    return (
        <div className="auth-form-container" onSubmit={saveSignup}>
            <h2>Create an Account</h2>
        <form className="register-form" >
            <label htmlFor="Uname">Username</label>
            <input value={Username} name="name" onChange={(e) => setUserName(e.target.value)} id="username" placeholder="Username" required />
            <label htmlFor="Fname">Full name</label>
            <input value={Fullname} name="name" onChange={(e) => setFullName(e.target.value)} id="fullname" placeholder="Full Name" required />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" required />
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder="********" id="password" name="password" required/>
            <label htmlFor="password">Confirm password</label>
            <input value={Cpass} onChange={(e) => setCpass(e.target.value)} type="password" placeholder="********" id="confirmpassword" name="password" required/>
            <button type="submit" > Create Account</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}