import "./login.scss"
import { useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const navigate = useNavigate()
    const [signup, setSignup] = useState({

        email: "",
        password: "",
    })


    const handleChange = (e) => {
        console.log(signup);
        const { value, name } = e.target
        setSignup({ ...signup, [name]: value })
         

    }


    const handleSumbit =async () => {
        
    // const response = await fetch("http://localhost:3001/login",{
    //         method:"POST",
    //         headers:{
    //             "Content-Type":"application/json"
    //         },
    //         body: JSON.stringify(signup)
    //     }).then(result=> result.json())
    //     if(response.status === 200){
    //         navigate("/")
    //     }else{
    //         const body = response
    //         console.log(body);
    //     }


    // const axios = require("http-localhost:3001/")
    const response = await axios.post("http://localhost:3001/login",signup)
    
    console.log(response.data);
    }
   
       
    return <div className="log">
        
          
        <div className="form">
              <div className="login">
                 <h4>Login</h4>
              </div>
            <div className="inputs">
                <div className="sign">
                    <p>email:</p>
                    <p>password:</p>

                </div>

                <div className="lable">
                    <input type="text"  placeholder="Name" name="email" onChange={handleChange}  />
                    <input type="text"  placeholder="Email" name="password" onChange={handleChange} />
                </div>
            </div>

            <center>
                <button onClick={handleSumbit}>login</button>
                 <p>or</p>
                 <Link to="/register"><button>register</button></Link>

            </center>
        </div>


    </div>
}

export default Login;