import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "../Screen/HomePage";
import LoginData from "../Screen/Login";
import Signup from "../Screen/Signup";
import About from "../Screen/About";


import VanueGigs from "../Screen/VanueGigspage";
import AdminPanel from "../AdminPalen/Dashbord";
import Vanue from "../Screen/VanueDetail";
import VanueDetail from "../Screen/VanueDetail";
import VendorsGigs from "../Screen/VendorsGigs";
import VendorsDetail from "../Screen/VendorsDetail";
import VendorsAdminPanel from "../VendorsAdmin/Dashboard";



export default function AppRouter(){
    return <>
    <BrowserRouter>
    <Routes>
        <Route path="/"  element={<HomePage/>}/>
        <Route path="/About" element={<About/>}/>
      
     <Route path="VanueDetail" element={<VanueDetail/>}/>
        <Route path="/VanueGigs" element={<VanueGigs/>}/>
        <Route path="/VendorsGigs" element={<VendorsGigs/>}/>
        <Route path="/VendorsDetail" element={<VendorsDetail/>}/>

       

        <Route path="/Login" element={<LoginData/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="Admin/*" element={<AdminPanel/>}/>
        <Route path="VendorsAdmin/*" element={<VendorsAdminPanel/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
}