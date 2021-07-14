import React, { useRef, useState } from "react";

const Login = () => {
  const [newUser, setNewUser] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
  };

  return (
    <div>
      {newUser ? <p>Create Account</p> : <p>Log In</p>}
      <form className='login-form' onSubmit={handleSubmit}>
        <div className='login-form__input'>
          <label htmlFor='email'>Email: </label>
          <input
            type='email'
            name='email'
            id='email'
            ref={emailRef}
          />
        </div>
        <div className='login-form__input'>
          <label htmlFor='password'>Password: </label>
          <input
            type='password'
            name='password'
            id='password'
            ref={passwordRef}
          />
        </div>
        {newUser && (
          <div className='login-form__input'>
            <label htmlFor='passConfirm'>
              Confirm Password :{" "}
            </label>
            <input
              type='password'
              name='passConfirm'
              id='passConfirm'
              ref={confirmPasswordRef}
            />
          </div>
        )}
        <div>
          <p>New User ? </p>
          <input
            type='checkbox'
            name='new-user'
            id='new-user'
            onClick={() => setNewUser(!newUser)}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
