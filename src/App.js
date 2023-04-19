import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import User from "./pages/User";
import Contact from "./pages/Contact";
import {NavBar} from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="users" element={<Users/>}/>
            <Route path="user" element={<User/>}/>
            <Route path="contact" element={<Contact/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
