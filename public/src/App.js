import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Chat } from "./pages/Chat";
import Home from "./pages/index";
import { Login } from "./pages/Login";
import Register from "./pages/Register";
import SigninPage from "./pages/signin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SetAvatar from "./pages/SetAvatar";
import VideoCall from "./components/Meeting/VideoCall";
import Seeker from "./pages/Seeker";
import Employer from "./pages/Employer";
import Code_sent from "./pages/code_sent";
// import VideoApp from "./components/videoCall";

function App() {
  const [inCall, setInCall] = useState(false);
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route
          path="/chat"
          element={<Chat inCall={inCall} setInCall={setInCall} />}
        />
        {/* <Route path="/videoCall/" element={<VideoApp />} /> */}
        <Route
          path="/videoCall"
          element={<VideoCall setInCall={setInCall} />}
        />

        <Route exact path="/applicant/*" element={<Seeker />} />
        <Route exact path="/employer/*" element={<Employer />} />
        <Route exact path="/codesent/:id" element={<Code_sent />} />
      </Routes>
      <ToastContainer autoClose={500} />
    </div>
  );
}

export default App;
