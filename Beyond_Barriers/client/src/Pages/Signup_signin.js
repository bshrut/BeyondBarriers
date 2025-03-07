import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import { useAuth } from "../AuthContext";

function SignupSignin() {
  const [Rname, setRName] = useState();
  const [Remail, setREmail] = useState();
  const [Rpassword, setRPassword] = useState();

  const [Lemail, setLEmail] = useState();
  const [Lpassword, setLPassword] = useState();

  const navigate = useNavigate();

  const { setIsLoggedIn } = useAuth();

  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/register',{ 
        name: Rname, 
        email: Remail, 
        password: Rpassword })
      .then((result) => {
        alert("Welcome!");
        console.log(result.data);
        setIsLoggedIn(true);
        navigate("/sign-kit/home");
      })
      .catch((err) => {alert(err);
        console.log(err)});
  };

  const handleSignin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email: Lemail, 
        password: Lpassword })
      .then((result) => {
        alert(result.data);
        console.log(result.data);
        if (result.data === "Login Successful") {
            setIsLoggedIn(true);
          navigate("/sign-kit/home");
        }
      })
      .catch((err) => {alert(err);
        console.log(err)});
  };

  function toggleForm() {
    const signInForm = document.getElementById("sign-in-form");
    const signUpForm = document.getElementById("sign-up-form");
    const toggleButton = document.getElementById("toggle-button");
    const panelHeading = document.getElementById("panel-heading");

    if (signInForm.style.display === "none") {
      signInForm.style.display = "block";
      signUpForm.style.display = "none";
      toggleButton.innerText = "Sign Up";
      panelHeading.innerText = "Welcome Back!";
    } else {
      signInForm.style.display = "none";
      signUpForm.style.display = "block";
      toggleButton.innerText = "Sign In";
      panelHeading.innerText = "Create Account";
    }
  }

  return (
    <div className="container" id="loginpanel">
      {/* Left Panel */}
      <div className="left-panel">
        <h2 id="panel-heading">Welcome Back!</h2>
        <p>To keep connected with us please login with your personal info</p>
        <button id="toggle-button" onClick={toggleForm}>Sign Up</button>
      </div>

      {/* Right Panel */}
      <div className="right-panel" id="form-container">
        {/* Sign In Form (default view) */}
        <form id="sign-in-form" onSubmit={handleSignin}>
          <h2>Sign In</h2>
          <div className="input-field">
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Email"
              onChange={(e) => setLEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              name="password"
              autoComplete="off"
              placeholder="Password"
              onChange={(e) => setLPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>

        {/* Sign Up Form (hidden by default) */}
        <form id="sign-up-form" style={{ display: "none" }} onSubmit={handleSignup}>
          <h2>Create Account</h2>
          <div className="input-field">
            <input
              type="text"
              name="name"
              placeholder="Name"
              autoComplete="off"
              onChange={(e) => setRName(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              onChange={(e) => setREmail(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              onChange={(e) => setRPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignupSignin;






// import {useState} from "react"
// import axios from 'axios'
// import { useNavigate } from "react-router-dom";
// import './signup.css'
// function SignupSignin(){

//     const [Rname, setRName]=useState()
//     const[Remail,setREmail]=useState()
//     const [Rpassword,setRPassword]=useState()

//     const[Lemail,setLEmail]=useState()
//     const [Lpassword,setLPassword]=useState()

//     const navigate=useNavigate()

//     const handleSignup=(e)=>{
//         e.preventDefault()
//         axios.post('http://localhost:3001/register',{Rname,Remail,Rpassword})
//         .then(result=>{console.log(result);
//         navigate('/sign-kit/home');
//     })
//         .catch(err=>console.log(err))
//     }

//     const handleSignin=(e)=>{
//         e.preventDefault()
//         axios.post('http://localhost:3001/login',{Lemail,Lpassword})
//         .then(result=>{console.log(result)
//             if(result.data==="Success"){
//                 navigate('/sign-kit/home')
//             }
//     })
//         .catch(err=>console.log(err))
//     }


//     function toggleForm() {
//         const signInForm = document.getElementById('sign-in-form');
//         const signUpForm = document.getElementById('sign-up-form');
//         const toggleButton = document.getElementById('toggle-button');
//         const panelHeading = document.getElementById('panel-heading');

//         if (signInForm.style.display === 'none') {
//             signInForm.style.display = 'block';
//             signUpForm.style.display = 'none';
//             toggleButton.innerText = 'Sign Up';
//             panelHeading.innerText = 'Welcome Back!';
//         } else {
//             signInForm.style.display = 'none';
//             signUpForm.style.display = 'block';
//             toggleButton.innerText = 'Sign In';
//             panelHeading.innerText = 'Create Account';
//         }
//     }

//     return (
//     <div className="container">
//         {/* <!-- Left Panel --> */}
//         <div className="left-panel">
//             <h2 id="panel-heading">Welcome Back!</h2>
//             <p>To keep connected with us please login with your personal info</p>
//             <button id="toggle-button" onclick={toggleForm}>Sign Up</button>
//         </div>

//         {/* <!-- Right Panel --> */}
//         <div className="right-panel" id="form-container">
//             {/* <!-- Sign In Form (default view) --> */}
//             <form id="sign-in-form" onSubmit={handleSignin}>
//                 <h2>Sign In</h2>
//                 <div className="input-field">
//                     <input type="email" 
//                     name="email" 
//                     autoComplete="off" 
//                     placeholder="Email" 
//                     onChange={(e)=> setLEmail(e.target.value)}
//                     required/>
//                 </div>
//                 <div className="input-field">
//                     <input type="password" 
//                     name="password" 
//                     autoComplete="off" 
//                     placeholder="Password" 
//                     onChange={(e)=> setLPassword(e.target.value)}
//                     required/>
//                 </div>
//                 <button type="submit">Sign In</button>
//             </form>

//             {/* <!-- Sign Up Form (hidden by default) --> */}
//             <form id="sign-up-form" style="display: none;" onSubmit={handleSignup}>
//                 <h2>Create Account</h2>
//                 <div className="input-field">
//                     <input type="text" 
//                     name="name" 
//                     placeholder="Name" 
//                     autoComplete="off"
//                     onChange={(e)=> setRName(e.target.value)}
//                     required/>
//                 </div>
//                 <div className="input-field">
//                     <input type="email" 
//                     name="email" 
//                     placeholder="Email" 
//                     autoComplete="off"
//                     onChange={(e)=> setREmail(e.target.value)}
//                     required/>
//                 </div>
//                 <div className="input-field">
//                     <input type="password" 
//                     name="password" 
//                     placeholder="Password" 
//                     autoComplete="off"
//                     onChange={(e)=> setRPassword(e.target.value)}
//                     required/>
//                 </div>
//                 <button type="submit">Sign Up</button>
//             </form>
//         </div>
//     </div>
//     );
// }
// export default SignupSignin;
