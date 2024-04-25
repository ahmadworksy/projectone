import "./App.css";
import { Auth } from "./components/auth";
import { About } from "./components/about";
import { Notification } from "./components/notification";

import "./index.css";

import { Link, Route, Routes } from "react-router-dom";

import "firebase/storage";
import Showstudentt from "./components/Showstudent";

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/about" element={<About />} />
        <Route path="/student" element={<Showstudentt />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </div>
  );
}

export default App;
