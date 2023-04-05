import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../css/LoginSignUp.css';

function Auth() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="Auth">
      <TransitionGroup>
        <CSSTransition
          key={currentForm === 'login' ? 'login' : 'register'}
          classNames="transition"
          timeout={500}
        >
          {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default Auth;