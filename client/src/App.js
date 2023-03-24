import {BrowserRouter, Routes, Route} from "react-router-dom"
import UserLogin from "./components/pages/UserLogin";
import UserSignUp from "./components/pages/UserSignUp";
import AdminPanel from "./components/pages/AdminPanel";
import AdminDetailPanel from "./components/pages/AdminDetailPanel";
import AdminLogin from "./components/pages/AdminLogin";
import Home from "./components/pages/Home";
import PostDetail from "./components/pages/PostDetail";
import MyRequest from "./components/pages/MyRequest";
import AddStory from "./components/pages/AddStory";
import PrivateRoute from "./components/pages/PrivateRoute";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
  <Container >
      <div>
        <BrowserRouter>
          <AuthProvider>
            <Switch>
              <Route path="/userlogin" element={<UserLogin/>}/>
              <Route path="/usersignup" element={<UserSignUp/>}/>
              <Route path="/adminlogin" element={<AdminLogin/>}/>
              <PrivateRoute path="/adminpanel" element={<AdminPanel/>}/>
              <PrivateRoute path="/adminpanel/:id" element={<AdminDetailPanel/>}/>
              <PrivateRoute path="/home" element={<Home/>}/>
              <PrivateRoute path="/home/:id" element={<PostDetail/>}/>
              <PrivateRoute path="/myrequest" element={<MyRequest/>}/>
              <PrivateRoute path="/addstory" element={<AddStory/>}/>
            </Switch>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;