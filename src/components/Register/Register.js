import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import './Register.css';

const Register = ({loadUser}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [NotFound, setNotFound] = useState(false);
  const navigate = useNavigate();



  const handleName = (event) => {
    setName(event.target.value);
  }

   const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }


const buttonRegister = (event) => {
  // event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Envía los datos al servidor o realiza la lógica de autenticación aquí
  fetch('http://localhost:2001/register', {
    method: 'post',
    headers: {'Content-type':'application/json'},
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
    })
  })
  .then(response => response.json())
  .then(user => {
    console.log(user);
    if (user && user.email) {
      loadUser(user);
      navigate('/');
    } else {
      setNotFound(true);
    }
  });
};

   const buttonSignIn = () => {
    // route to register
    navigate('/register');
  };

  
  return (    
     <LazyLoad once>
    <div className="register">
      <div className="register-container">
        <div className="register-item">
          <form>
            <div className="imgcontainer">
              {/*<img src="img_avatar2.png" alt="Avatar" className="avatar" />*/}
            </div>

            <div className="container-register">
              <label htmlFor="uname"><b>Name</b></label>
              <input onChange={handleName} type="text2" placeholder="Enter Name" name="uname" required />

              <label htmlFor="uname"><b>Email</b></label>
              <input onChange={handleEmail} type="text2" placeholder="Enter Email" name="uname" required />

              <label htmlFor="psw"><b>Password</b></label>
              <input onChange={handlePassword} type="password3" placeholder="Enter Password" name="psw" required />

              <button className="signin-button" onClick={buttonRegister} type="button">Register</button>
                  {NotFound && (
                 <>
                 <p style={{color: 'white', textDecoration: 'underline', fontSize: '20px', marginBottom: '20px'}}> User already exists </p>
                 </>
              )}
              <p style={{color: 'white' }}className="resigster-p"> Already have an account ? </p>
              <button className="register-button" onClick={buttonSignIn} type="button">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
     </LazyLoad>
  );
}

export default Register;

