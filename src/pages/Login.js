import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const { signUp, signIn } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword =
      confirmPasswordRef?.current?.value;

    if (newUser && password !== confirmPassword) {
      return alert("Password did not match");
    }

    if (newUser) {
      try {
        await signUp(email, password);
      } catch {
        alert("Something went wrong, Please try again");
      }
    } else {
      try {
        await signIn(email, password);
      } catch {
        alert(
          "Password or Email invalid. Please try again."
        );
      }
    }
  };

  return (
    <section className='login-section'>
      <div>
        {newUser ? <p>Create Account</p> : <p>Log In</p>}
        <form
          className='login-form'
          onSubmit={handleSubmit}
        >
          <div className='login-form__input'>
            <label htmlFor='email'>Email: </label>
            <input
              type='email'
              name='email'
              id='email'
              ref={emailRef}
              required
            />
          </div>
          <div className='login-form__input'>
            <label htmlFor='password'>Password: </label>
            <input
              type='password'
              name='password'
              id='password'
              ref={passwordRef}
              required
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
                required
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
    </section>
  );
};

export default Login;
