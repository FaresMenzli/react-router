import React from 'react'
import AdminArea from './AdminArea'
import { Redirect,BrowserRouter ,Link } from 'react-router-dom'

const Login = (props) => {
    return (
        <BrowserRouter>
        <div className="mt-5">
         
        <p className="font-weight-bold">You must log in to view the page at /admin</p>
       <Link to={props.state}> <button onClick={<Login l={true}></Login>} >Log in</button></Link>
     </div>
     </BrowserRouter>
    )
}

export default Login
