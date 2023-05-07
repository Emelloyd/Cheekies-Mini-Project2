import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import BookParty from './pages/BookParty';
import Login from './pages/Login';
import Error404 from './Error404';
import Search from './pages/Search';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" 
        element={<Layout />}>

        <Route index element={<Home />}/>
        <Route path="login" 
        element={<Login />}/>

        <Route path="menu" 
        element={<Menu />}/>

        <Route path="about" 
        element={<About />}/>

        <Route path="contact-us" 
        element={<ContactUs />}/>

        <Route path="bookaparty" 
        element={<BookParty />}/>

        
        <Route path="search" 
        element={<Search />}/>

        <Route path="*" 
        element={<Error404 />}/>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
