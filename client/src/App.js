import React from "react";
import UserLogin from "./components/pages/UserLogin";
import UserSignUp from "./components/pages/UserSignUp";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLogin from "./components/pages/AdminLogin";
function App() {
  return (
    <div className="App">
      <AdminLogin></AdminLogin>
    </div>
  );
}

export default App;
