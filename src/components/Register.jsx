import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [CPass, setCPass] = useState('');
    const [Username, setUserName] = useState('');
    const [Fullname, setFullName] = useState('');
 

    // const handleSubmit = (e) => {
    //     //Check if the entered email is already registered or not and other things
    //     if(pass !== CPass) {
    //         alert('Password not matched');
    //         //show it as a dialogue box or as a label in both password and confirm password field
    //     }
    //     e.preventDefault();
    //     console.log(email);
    // }

    const saveSignup=(e)=>{
        if (Username === "" || email === "" || pass === "" || CPass === "") {
            return false;
        }
        if(pass.length>=8){
            alert("Minimum 8 characters required");
            return false;
        }
        if (pass !== CPass ) {
            alert("Passwords do not match.");
            window.location.reload(false);
            return false;
        }
        e.preventDefault();
        let data={'username':Username,'Fullname':Fullname,'email':email,'password':pass};
        localStorage.setItem(email,data);
        console.log(email,data);
        console.log(data.email,"=>",data.password);
        alert("Sign up successful!");
        window.location.reload(false);
        return true;
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
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required/>
            <label htmlFor="password">Confirm Password</label>
            <input value={CPass} onChange={(e) => setCPass(e.target.value)} type="password" placeholder="********" id="confirmpassword" name="password" required/>
            <button type="submit" > Create Account</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}