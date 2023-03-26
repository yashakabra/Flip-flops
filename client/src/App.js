import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserLogin from "./components/pages/UserLogin";
import UserSignUp from "./components/pages/UserSignUp";
import AdminPanel from "./components/pages/AdminPanel";
import AdminDetailPanel from "./components/pages/AdminDetailPanel";
import AdminLogin from "./components/pages/AdminLogin";
import Home from "./components/pages/Home";
import PostDetail from "./components/pages/PostDetail";
import MyRequest from "./components/pages/MyRequest";
import AddStory from "./components/pages/AddStory";
import Footer from "./components/utils/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserAuthContextProvider } from "./context/UserAuthContext";
import NavBar from "./components/utils/NavBar";
import PvtAdminLogin from "./components/pages/PvtAdminLogin";
import PvtAdminPanel from "./components/pages/PvtAdminPanel";
import { Container } from "react-bootstrap";
import PvtAdminDetailsPanel from "./components/pages/PvtAdminDetailPanel";
import UserAdmin from "./components/pages/UserAdmin";
import GovtPrivateAdmin from "./components/pages/GovtPrivateAdmin";

const App = () => {
  return (
    <UserAuthContextProvider>
      <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
            <Route path="/userlogin" element={<UserLogin />} />
            <Route path="/usersignup" element={<UserSignUp />} />
            <Route path="/adminpanel/:id" element={<AdminDetailPanel />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/:id" element={<PostDetail />} />
            <Route path="/myrequest" element={<MyRequest />} />
            <Route path="/addstory" element={<AddStory />} />
            <Route path="/" element={<UserAdmin />} />
            <Route path="/govtpvtadmin" element={<GovtPrivateAdmin />} />

            <Route path="/pvtadminlogin" element={<PvtAdminLogin />} />
            <Route path="/pvtadminpanel" element={<PvtAdminPanel />} />
            <Route path="/pvtadminpanel/:id" element={<PvtAdminDetailsPanel />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/adminpanel" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
      </div>
     
      
    </UserAuthContextProvider>
  );
}

export default App;