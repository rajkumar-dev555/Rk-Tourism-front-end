import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
import { Link, json, useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import "./loginpage.scss"
import axios from 'axios';

export const Loginpage = (props) => {
    const [submitted, setSubmitted] = useState(false)
    const navigate = useNavigate()
    const [signup, setSignup] = useState({
        email: "",
        password: "",
    },
        // submitted: (false),
    )


    const handleChange = (e) => {
        console.log(signup);
        const { value, name } = e.target
        setSignup({ ...signup, [name]: value })
    }

    const handleRegister = () => {
        props.values.setShowRegister(false)
    }

    const handleSumbit = async () => {
        console.log(signup);
        const response = await axios.post("http://localhost:5000/login", signup)
        console.log(response.data)
        // navigate("/")
    }


    return (
        <div className="loginpage">
            {/* <Dialog className='login_dialog'> */}
            <ClearIcon />
            <div className="div-icon">
                <div className="log-title">
                    <DialogTitle className='title'>Login</DialogTitle>
                </div>
                <div className="form-input">

                    {/* <div className="inputs">
                        <input type="text" placeholder='email' name='email' value={signup.email} onChange={this.handleChange} validators={['required', 'isEmail']}
                            errorMessages={['this field is required', 'email is not valid']} />
                        <input type="text" placeholder='password' name='password' value={signup.password} onChange={this.handleChange} validators={['required']}
                            errorMessages={['this field is required']} />


                    </div>
                    <button onClick={handleSumbit} type="submit"
                        disabled={submitted}>Login  {
                            (submitted && 'Your form is submitted!')
                            || (!submitted && 'Submit')
                        }
                    </button> */}
                    <ValidatorForm className="valit">
                        <TextValidator
                            label="Email"
                            onChange={handleChange}
                            name="email"
                            value={signup.email}
                            validators={['required', 'isEmail']}
                            errorMessages={['this field is required', 'email is not valid']}
                        />
                        <br />
                        <TextValidator
                            label="Password "
                            onChange={handleChange}
                            name="password"
                            value={signup.password}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <br />
                        <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                            disabled={submitted}
                            onClick={handleSumbit}
                        >
                            {
                                (submitted && 'Your form is submitted!')
                                || (!submitted && 'Submit')
                            }
                        </Button>
                    </ValidatorForm>
                    <p>Already Account ? Create New Account</p>
                    <div className="log-button">
                        <button onClick={handleRegister}>register</button>
                    </div>
                </div>

            </div>

            {/* </Dialog> */}

        </div>
    )
}

export default Loginpage;