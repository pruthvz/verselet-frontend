import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
// homepage
import Homepage from "./pages/Homepage/Home";
import SideNavbar from "./pages/Homepage/SideNavbar";
import Profile from "./pages/Homepage/Profile";
import Code from "./pages/Homepage/Codepage/CodeEditor";
import Notifications from "./pages/Homepage/Notifications";
import Settings from "./pages/Settings";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <Router>
      <div>
        {loggedIn ? (
          <>
            <SideNavbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/code" element={<Code />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </>
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </>
        )}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
