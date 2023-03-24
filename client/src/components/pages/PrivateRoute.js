import React from "react"
import { Route } from "react-router-dom"
import { useAuth } from "../../context/AuthContext.js"
import { Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()
    const navigate = useNavigate();
  return (
    <div>
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : navigate('/login')
      }}
    ></Route>
    </div>
  );
}