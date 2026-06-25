import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./component/login";
import Register from "./component/register";
import Home from "./component/home";
import Profile from "./component/profile";
import Global from "./component/global";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./component/protectedx";
import Demo from "./component/demo";




function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/demo" element={<Demo/>} />
        <Route path="/" element={<Global />} />
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
        <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
<Route path='/profile' element={<ProtectedRoute>
            <Profile />
          </ProtectedRoute>}/>  
      </Routes>
    </>
  );
}

export default App;
