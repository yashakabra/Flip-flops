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
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserAuthContextProvider } from "./context/UserAuthContext";
import NavBar from "./components/utils/NavBar";


const App = () => {
  return (
    <UserAuthContextProvider>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/usersignup" element={<UserSignUp />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/adminpanel/:id" element={<AdminDetailPanel />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" element={<PostDetail />} />
          <Route path="/myrequest" element={<MyRequest />} />
          <Route path="/addstory" element={<AddStory />} />
        </Routes>
      </BrowserRouter>
    </UserAuthContextProvider>
  );
}

export default App;