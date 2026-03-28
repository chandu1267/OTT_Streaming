// import React, { useState } from 'react'
// import './Login.css'
// import logo from '../../assets/logo.png'
// import { login,signup } from '../../firebase'
// import loding_spinner from '../../assets/netflix_spinner.gif'



// const Login = () => {
  
//   const[signState,setSignState] = useState('Sign In')
//   const [name,setName] = useState('');
//   const [email,setEmail] = useState('');
//   const [password,setPassword] = useState('');
//   const[loading,setLoading] = useState(false)
  
  
//   const user_auth = async (event)=>{
//     event.preventDefault();
//     setLoading(true)
//     if(signState==="sign In"){
//       await login(email,password);
//     }else{
//       await signup(name,email,password)
//       setLoading(false)
//     }
//   }
  
//   return (
//     loading?<div className="loading-spinner">
//       <img src={loding_spinner} alt="" />
//     </div>:
//     <div className='login'>
//       <img src={logo} alt=""  className='login-logo'/>
//       <div className="login-form">
//         <h2>{signState}</h2>
//         <form>
//           {signState==="Sign Up"?<input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Your Name'/>:<></>}
          
//           <input value={email} onChange={(e)=>{setEmail(e.target.value)}}type="mail" placeholder='Email'/>
//           <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password'/>
//           <button onClick={user_auth} type='submit'>{signState}</button>
//           <div className="form-help">
//             <div className="remember">
//               <input type="checkbox" />
//               <label htmlFor="">Remember me</label>
//             </div>
//             <p>Need Help?</p>
//           </div>
//         </form>
//         <div className="form-switch">
//           {signState==="Sign In"?<p>New to Netflixe<span onClick={()=>{setSignState("Sign Up")}}> Sign up now</span ></p>:<p>Already have account?<span onClick={()=>{setSignState("Sign In")}}> Sign in now</span></p>}
//         </div>
//       </div>
//     </div>
//   )
// }
// // alert("Re-Signup-Please...")

// export default Login



import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import { login, signup } from '../../firebase';
import loading_spinner from '../../assets/netflix_spinner.gif';

const Login = () => {

  const [signState, setSignState] = useState('Sign In');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!email || !password || (signState === "Sign Up" && !name)) {
      alert("Please fill all fields");
      setLoading(false);
      return;
    }

    try {
      if (signState === "Sign In") {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    loading ? (
      <div className="loading-spinner">
        <img src={loading_spinner} alt="" />
      </div>
    ) : (
      <div className='login'>
        <img src={logo} alt="" className='login-logo' />

        <div className="login-form">
          <h2>{signState}</h2>

          <form onSubmit={user_auth}>

            {signState === "Sign Up" && (
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your Name"
              />
            )}

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />

            <button type="submit">{signState}</button>

            <div className="form-help">
              <div className="remember">
                <input type="checkbox" />
                <label>Remember me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>

          <div className="form-switch">
            {signState === "Sign In" ? (
              <p>
                New to Netflix? 
                <span onClick={() => setSignState("Sign Up")}> Sign up now</span>
              </p>
            ) : (
              <p>
                Already have account? 
                <span onClick={() => setSignState("Sign In")}> Sign in now</span>
              </p>
            )}
          </div>

        </div>
      </div>
    )
  );
};

export default Login;