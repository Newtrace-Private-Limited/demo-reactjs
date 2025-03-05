


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


// Amplify and Auth setup
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import Auth from "./Auth";



// Configure Amplify
Amplify.configure(config);

// Create the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  
    <div>
      <Auth />
    </div>

);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { Amplify } from 'aws-amplify';
// import awsExports from './aws-exports';
// Amplify.configure(awsExports);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

