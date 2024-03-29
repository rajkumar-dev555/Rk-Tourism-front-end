import pic2 from "../img/mountain-peak-adventure.avif"
import pic3 from "../img/bora-bora.jpg"
import pic1 from "../img/kuala lumpur.jpg"
import pic4 from "../img/thailand-rai.jpg"
import pic5 from "../img/new york.jpg"
import pic6 from "../img/london1.jpeg"

import Navbar from "../navbar/navbar";
import Footer from "../footer/footer"
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


import "./allpackage.scss"
import { Center } from "@chakra-ui/react"

export const Allpackage = () => {

    const paperData = [
        {
            image: pic3,
            place: 'Riyadh',
            package: "Foundation Day Package",
            amount: "4,500 INR"
        },
        {
            image: pic2,
            place: 'India',
            package: "Foundation Day Package",
            amount: "2,600 INR"
        },
        {
            image: pic1,
            place: 'Malaysia',
            package: 'Nwe Year Package',
            amount: '4,500 INR'
        },
        {
            image: pic4,
            place: 'Thailand',
            package: 'Nwe Year Package',
            amount: '5,500 INR'
        },
        {
            image: pic5,
            place: 'New York',
            package: 'Nwe Year Package',
            amount: '6,500 INR'
        },
        {
            image: pic6,
            place: 'LonDoj',
            package: 'Nwe Year Package',
            amount: '7,800 INR'
        }
    ]


    return (
        <div className="allpackage">
            <div className="nav">
                <Navbar />
            </div>

            <div className="div">
                <h3> Explore All Expriences </h3>
            </div>
            <div className="div2">



                <div className="left">
                    <h5>Filters</h5>


                    <div className="inputs">

                        <p>Select Location</p>
                        <input type="text" placeholder="Select" />

                    </div>
                    <div className="price">
                        <p>Price Range</p>

                        <span>0 SAR</span>
                        <input type="range" />
                        <span>5k SAR</span>

                    </div>

                    <div className="categories">

                        <p>Experience Categories</p>
                        <div className="box1">
                            <input type="checkbox" />
                            <span>Adventures & Experiences</span>
                        </div>

                        <div className="box1">
                            <input type="checkbox" />
                            <span>Tours & Attractions</span>
                        </div>


                    </div>



                </div>

                <div className="right">
                    <div className="papers">

                        {paperData.map((data, index) => (
                            <Paper className="paper" elevation={3} key={index}>
                                <img src={data.image} alt="" width="100%" />
                                <div className="details">
                                    <span>{data.place}</span>
                                    <div>{data.package}</div>
                                    <p>Start from</p>
                                    <span id="amount">{data.amount}</span>
                                    {/* <Button variant="outlined" onClick={handleClickOpen}>
                                      Open simple dialog
                                    </Button> */}
                                    <div id="button">
                                        <Link to="/payment"><p>Book Now</p></Link>
                                        <SlArrowRight id="arrow" />
                                    </div>
                                </div>
                            </Paper>
                        ))}



                    </div>
                    <div className="number">
                        <Stack className="pagelist" spacing={2}>
                            <Pagination count={10} />

                        </Stack>
                    </div>
                </div>


            </div>
             <Footer/>

        </div>
    )
}

export default Allpackage;