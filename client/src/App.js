import AddStory from "./components/pages/AddStory";
import AdminDetailsPanel from "./components/pages/AdminDetailPanel";
import PostDetails from "./components/pages/PostDetail";
import ErrorPage from "./components/pages/ErrorPage.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
          <Routes>
          
            <Route path="/addstory" element={<AddStory/>}/>
            <Route path="/admindetailspanel" element={<AdminDetailsPanel/>}/>
            <Route path="/postdetails" element={<PostDetails/>}/>
            <Route path="/err" element={<ErrorPage/>}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
