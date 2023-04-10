import { useState } from "react";

import "./App.css";
import Navbars from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Marquee from "./components/Marquee/Marquee";
import NewArival from "./components/NewArival/NewArival";
import Payday from "./components/PayDay/Payday";
import Youngs from "./components/Youngs/Youngs";
import Download from "./components/DownloadApp/Download";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import MianHome from "./components/MainHomePage/MianHome";
import Login from "./components/Login/Login";
import ForgotPaswrd from "./components/ForgotPaswrd/ForgotPaswrd";
import LoginRoutes from "./routes/LoginRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbars />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login/*" element={<LoginRoutes />} />
        <Route path="/" element={<MianHome />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
