import Navbar from "../navbar/navbar"
import { Link } from "react-router-dom"
// import pic from "../img/India-Honeymoon-Packages.jpg"
// import pic1 from "../img/india-educational-tour-packages.jpg"
import pic2 from "../img/North-India.jpg"
import pic3 from "../img/South-India.jpg"
import pic4 from "../img/East-India.jpg"


import pic5 from "../img/Agra-tajmahal.jpg"

import "./india-pack.scss"
import { Paper } from "@mui/material"
import Footer from "../footer/footer"
// import { Tour } from "@mui/icons-material"

export const IndiaPackages = () => {

    const indiandata = [
        {
            image: pic2,
            name: "North Indian Tours",
            Tours: "21 Tours"
        },
        {
            image: pic3,
            name: "Soth Indian Tours",
            Tours: "26 Tours"
        },
        {
            image: pic4,
            name: "East Indian Tours",
            Tours: "8 Tours"
        }
    ]


    return (
        <div className="indiapack">

            <div className="nav-india">
                <Navbar />

            </div>
            <div className="pack-name">
                <h1>India Tours Packages </h1>

            </div>

            <div className="indian-lay">
                {indiandata.map((data, index) => (

                    <div className="indian-tours">

                        <img src={data.image} alt="" />
                        <h3>{data.name}</h3>
                        <div className="buttons">
                            <Link to="/southindianpackages"><button>{data.Tours}</button></Link>
                        </div>



                    </div>
                ))}

            </div>

            <div className="local-tours">
                <h4>Local Experiences You’ll Love</h4>


                <div className="local-layout">

                    <Paper className="Local-packages">
                        <img src={pic5} alt=""    width="100%" />

                        <div className="local-informaction">
                             <p>thaimagal</p>
                        </div>

                    </Paper>
                </div>
            </div>



            <Footer />
        </div>

    )
}

export default IndiaPackages;