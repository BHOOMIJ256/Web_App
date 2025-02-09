import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempted with:', email, password);
    // For now, we'll just navigate to home on any login attempt
    navigate('/home');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


























// import React, { useState } from 'react';
// import './App.css';

// function LoginComponent() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Login attempted with:', email, password);
//   };

//   return (
//     <div className="App">
//       <div className="login-container">
//         <h1>Login</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;


















// import React, { useState } from "react";  // ✅ Import React
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
// import Home from './components/Home.js';  // Now we can safely import Home
// import "./App.css";

// // Move Login to a separate component
// function LoginPage() {
//   const navigate = useNavigate();  // This is now safe to use
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Logging in with:", email, password);
//     navigate('/home');  // Now we can use navigation
//   };

//   return (
//     <div className="login-container" style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       minHeight: '100vh',
//       padding: '20px',
//       backgroundColor: '#f5f5f5' // Adding background color to make it visible
//     }}>
//       <h2 style={{ color: '#333' }}>Login</h2>
//       <form onSubmit={handleSubmit} style={{
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '10px',
//         width: '100%',
//         maxWidth: '300px',
//         padding: '20px',
//         backgroundColor: 'white',
//         borderRadius: '8px',
//         boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//       }}>
//         <div className="input-group">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{
//               padding: '10px',
//               borderRadius: '4px',
//               border: '1px solid #ddd'
//             }}
//           />
//         </div>
//         <div className="input-group">
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{
//               padding: '10px',
//               borderRadius: '4px',
//               border: '1px solid #ddd'
//             }}
//           />
//         </div>
//         <button 
//           className="submit-btn"
//           type="submit" 
//           style={{
//             padding: '10px',
//             backgroundColor: '#007bff',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer'
//           }}
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// // Main App component
// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<LoginPage />} />
//           <Route path="/home" element={<Home />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
