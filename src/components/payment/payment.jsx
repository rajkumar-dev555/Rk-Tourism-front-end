import pic from "../img/bora-bora.jpg"
import pic2 from "../img/bora 2.jpeg"
// import pic3 from "../img/bro 4.jpg"
import pic3 from "../img/kuala lumpur.jpg"
import pic4 from "../img/tr05saudi.webp"
import Navbar from "../navbar/navbar";
import Paper from '@mui/material/Paper';
import { useLocation } from "react-router-dom";
import SimpleDialog from "../dialog/dialog";
import Footer from "../footer/footer";

import "./payment.scss"
import { useEffect, useState } from "react";
// import axios from "axios";

export const Payment = () => {
    const [open, setOpen] = useState(false);
    
    

    const handleClickOpen = () => {
        setOpen(true);

      

    };

    const handleClose = (value) => {
        setOpen(false);
    };

    const data = [
        {
            id: 0,
            title: "bora",
            import: pic,
            content: "Bora Bora (French: Bora-Bora; Tahitian: Pora Pora) is an island group in the Leeward Islands in the South Pacific. The Leeward Islands comprise the western part of the Society Islands of French Polynesia, which is an overseas collectivity of the French Republic in the Pacific Ocean.",
            details: "This experience is appropriate for men, women, children, and families,The museum is open throughout the week from 8.00 am to 10.00 pm",
            amount: "4,500 INR"
        },
        {
            id: 1,
            title: "india",
            import: pic2,
            content: "An adventure is an exciting experience or undertaking that is typically bold, sometimes risky. Adventures may be activities with danger such as traveling, exploring, skydiving, mountain climbing, scuba diving, river rafting, or other extreme sports",
            details: "This experience is appropriate for men, women, children, and families,The museum is open throughout the week from 8.00 am to 10.00 pm",
            amount: "5,500 INR"
        },
        {
            id: 2,
            title: "india",
            import: pic3,
            content: "An adventure is an exciting experience or undertaking that is typically bold, sometimes risky. Adventures may be activities with danger such as traveling, exploring, skydiving, mountain climbing, scuba diving, river rafting, or other extreme sports",
            details: "This experience is appropriate for men, women, children, and families,The museum is open throughout the week from 8.00 am to 10.00 pm",
            amount: "5,500 INR"
        },
        {
            id: 4,
            title: "india",
            import: pic4,
            content: "An adventure is an exciting experience or undertaking that is typically bold, sometimes risky. Adventures may be activities with danger such as traveling, exploring, skydiving, mountain climbing, scuba diving, river rafting, or other extreme sports",
            details: "This experience is appropriate for men, women, children, and families,The museum is open throughout the week from 8.00 am to 10.00 pm",
            amount: "5,500 INR"
        }
    ]
    const state = useLocation();
    console.log(state.state);
    const [myData, setMyData] = useState(data[state.state]);





    return (
        <div className="payment">
            <div className="div">
                <Navbar />
            </div>

            <div className="content">
                <p>payment</p>

            </div>

            <div className="photo">
                <h4>{myData.title}</h4>

                <div className="images">
                    <img src={myData.import} alt="" />
                </div>
                <h3>Overview</h3>
                <p>{myData.content}</p>
                <h5>More Details</h5>

                <ul>
                    {/* <li>This experience is appropriate for men, women, children, and families </li>
                    <li>The museum is open throughout the week from 8.00 am to 10.00 pm</li> */}
                    {myData.details}
                </ul>
            </div>

            <SimpleDialog
                open={open}
                onClose={handleClose}
            />
            <div className="booknow">

                <Paper className="paper" elevation={3}>
                    <div className="details">
                        <h3>payment</h3>
                        <p>Starts from</p>
                        <span id="amount">{myData.amount}</span>


                    </div>
                    <div className="pay">
                        <button onClick={handleClickOpen}>Book Now</button>
                    </div>
                    

                </Paper>



            </div>


         <Footer/>


        </div>
    )
}

export default Payment;