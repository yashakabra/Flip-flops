import React from "react"
import { Route } from "react-router-dom"
import { useUserAuth } from "../../context/UserAuthContext.js"
import { Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useUserAuth()
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