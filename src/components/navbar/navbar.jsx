import Rk from "../img/Rk-removebg-preview.png"
import { Link } from "react-router-dom";

import "./navbar.scss"
import { Dialog } from "@mui/material";
import Loginpage from "../loginpage/loginpage";
import Form from "../register/register";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false)
  const [showRegister, setShowRegister] = useState(true)
  console.log(showRegister);
  const handleOpen = (e) => {
    setOpen(true)
  }

  const handleClose = (e) => {
    setOpen(false)
  }

  return <div className="navbar">

    <div className="div-img">
      <img id="div-pic" src={Rk} alt="" />
    </div>
    {/* <h3>logo</h3> */}
    <div className="navbar-list">
      <Link to="/" style={{ textDecoration: "none" }}><p>Home</p></Link>
      <Link to="/place" style={{ textDecoration: "none" }}> <p>Package</p></Link>
      <p>Travel Essentails</p>
      <p>Profile</p>
      <p  onClick={handleOpen}>Login</p>
       {/* <p onClick={handleOpen}>Register</p> */}
      {/* <h3>Login</h3>           
          <h3>Register</h3> */}

      <Dialog onClose={handleClose} open={open}>
        {showRegister ? <Loginpage values={{setShowRegister }} /> :
          <Form values={{setShowRegister}}/>}

      </Dialog>
      {/* <Dialog onClose={handleClose} open={open}>
           
          </Dialog> */}

    </div>
  </div>


}

export default Navbar;