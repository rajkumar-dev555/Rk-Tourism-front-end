import "./register.scss"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export const Form = (props) => {
    const navigate = useNavigate()
    const [signup, setSignup] = useState({
        username: "",
        email: "",
        phonenumber: "",
        password: "",

    })

    // const [Email, setemail] = useState()
    // const [Number, setnumber] = useState()
    // const [Password, setpassword] = useState()


    // const handleUserName = (e) => {
    //     e.preventDefault()
    //     setUsername(e.target.value)
    //     console.log(userName);
    // }

    // const handleEmail = (e) => {
    //     e.preventDefault()
    //     setemail(e.target.value)
    //     console.log(Email);
    // }

    // const handleNumber = (e) => {
    //     e.preventDefault()
    //     setnumber(e.target.value)
    //     console.log(Number);
    // }

    // const handlepassword = (e) => {
    //     e.preventDefault()
    //     setpassword(e.target.value)
    //     console.log(Password);
    // }

    // const handleSumbit = () =>{
    //     console.log({
    //         userName: userName,
    //         email: Email,
    //         number: Number,
    //         password: Password

    //     });
    // }

    const handleChange = (e) => {
        console.log(signup);
        const { value, name } = e.target
        setSignup({ ...signup, [name]: value })

    }

    const handleSumbit = async () => {
        console.log(signup);
        // // fetch("http://localhost:3001/get").then(result=> result.json()).then(result=>console.log(result))
        // fetch("http://localhost:3001/",{
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body: JSON.stringify(signup)

        // }).then(result=> result.json()).then(()=>navigate("/login"))
        // // .catch(err=>console.log(err))


        const response = await axios.post("http://localhost:3001/", signup)
        console.log(response.data);
        // navigate("/login")
        handleLogin()
    }

    const handleLogin = () => {
        props.values.setShowRegister(true)
    }


    return (
        <div className="register">
            <div className="reg">
                <h3>register</h3>
            </div>
            <div className="inputs">

                <input type="text" placeholder="userName" name="username" onChange={handleChange} />
                <input type="text" placeholder="email" name="email" onChange={handleChange} />
                <input type="text" placeholder="number" name="phonenumber" onChange={handleChange} />
                <input type="text" placeholder="password" name="password" onChange={handleChange} />
                <div className="genders">
                    <input type="radio" placeholder="male" /><span>male</span>
                    <input type="radio" placeholder="male" /><span>female</span>
                </div>
                <button onClick={handleSumbit}>register</button>
                <div className="aaaa">
                    <p>or</p>
                </div>

                <button onClick={handleLogin} className="signIn">login</button>

            </div>

        </div>
    )

}

export default Form;