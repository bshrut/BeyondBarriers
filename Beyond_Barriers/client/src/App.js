import './App.css'
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Convert from './Pages/Convert';
import Home from './Pages/Home';
import LearnSign from './Pages/LearnSign';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Uploadvideo from './Pages/Uploadvideo';
import SignupSignin from './Pages/Signup_signin';
import { AuthProvider } from './AuthContext';
import { useLocation } from 'react-router-dom';

function App() {
  return(
    <AuthProvider>
    <Router>
      <MainContent></MainContent>
    </Router>
    </AuthProvider>
  );
}

function MainContent() {
  
  
  return(
    
      <div>
        
        <Navbar />
        <Routes>
        <Route exact path='/sign-kit/signin' element={<SignupSignin />} />
          <Route exact path='/sign-kit/home' element={<Home />} />
          <Route exact path='/sign-kit/convert' element={<Convert />} />
          <Route exact path='/sign-kit/learn-sign' element={<LearnSign />} />
          <Route exact path='/sign-kit/uploadvideo' element={<Uploadvideo />} />
          <Route exactnpath="/" element={<Convert />} />
          <Route exact path='*' element={<SignupSignin/>} />
        </Routes>
       
        
       
      </div>
  
  )
}

export default App;

// function App() {
//   return(
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route exact path='/sign-kit/home' element={<Home />} />
//           <Route exact path='/sign-kit/convert' element={<Convert />} />
//           <Route exact path='/sign-kit/learn-sign' element={<LearnSign />} />
//           <Route exact path='/sign-kit/video/:videoId' element={<Video />} />
//           <Route exact path='/sign-kit/create-video' element={<CreateVideo />} />
//           <Route exact path='/sign-kit/uploadvideo' element={<Uploadvideo />} />
//           <Route exactnpath="/" element={<Convert />} />
//           <Route exact path='*' element={<SignupSignin/>} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   )
// }

// export default App;