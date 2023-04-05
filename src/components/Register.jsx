import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [CPass, setCPass] = useState('');
    const [Firstname, setFirstName] = useState('');
    const [Lastname, setLastName] = useState('');

    const handleSubmit = (e) => {
        //Check if the entered email is already registered or not and other things
        if(pass !== CPass) {
            alert('Password not matched');
            //show it as a dialogue box or as a label in both password and confirm password field
        }
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Create an Account</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="Fname">First name</label>
            <input value={Firstname} name="name" onChange={(e) => setFirstName(e.target.value)} id="name" placeholder="First Name" required />
            <label htmlFor="Fname">Last name</label>
            <input value={Lastname} name="name" onChange={(e) => setLastName(e.target.value)} id="name" placeholder="Last Name" required />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" required />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required/>
            <label htmlFor="password">Confirm Password</label>
            <input value={CPass} onChange={(e) => setCPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required/>
            <button type="submit">Create Account</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}