import React from 'react'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Login from './Login'; 

// Define the router with routes 
const router = createBrowserRouter([ 
  { path: "/login", element: <Login /> }, 
  { path: "/", element: <Login /> },  // root redirects to Login for simplicity
]); 

function App() { 
  return <RouterProvider router={router} />; 
} 

export default App;