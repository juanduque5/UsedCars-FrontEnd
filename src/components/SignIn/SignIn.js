import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import './SignIn.css';

const SignIn = ({loadUser}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [NotFound, setNotFound] = useState(false);
  const navigate = useNavigate();



   const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  
  const buttonSignIn = (event) => {
    //event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Envía los datos al servidor o realiza la lógica de autenticación aquí
    console.log(email, password);

       fetch('http://localhost:2001/signin', {
      method: 'post',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(response => response.json())
    .then(user => {
      console.log("heree", user);
      if (user && user.name) {
        loadUser(user);
        navigate('/');
      } else {
       setNotFound(true);
      }
    });
};   

  

   const buttonRegister = () => {
    // route to register
    navigate('/register');
  };



  return (
     <LazyLoad once>
    <div className="SignIn">
      <div className="login-container">
        <div className="login-item">
          <form>
            <div className="imgcontainer">
              {/*<img src="img_avatar2.png" alt="Avatar" className="avatar" />*/}
            </div>

            <div className="container-signin">
              <label className='myLabel' type="text2" htmlFor="uname"><b>Email</b></label>
              <input onChange={handleEmail} type="text2" placeholder="Enter Email" name="uname" required />

              <label className='myLabel' htmlFor="psw"><b>Password</b></label>
              <input onChange={handlePassword} type="password2" placeholder="Enter Password" name="psw" required />

              <button className="signin-button" onClick={buttonSignIn} type="button">Login</button>
               {NotFound && (
                 <>
                 <p style={{color: 'white', textDecoration: 'underline', marginBottom: '60px'}}> Email or password incorrect <br/> Are you registered? </p>
                 </>
              )}
              <button className="register-button" onClick={buttonRegister} type="button">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </LazyLoad>
  );
}

export default SignIn;
