import Navbar from "../navbar/navbar"
import { Link } from "react-router-dom"
import pic from "../img/India-Honeymoon-Packages.jpg"
import pic1 from "../img/india-educational-tour-packages.jpg"
import pic2 from "../img/North-India.jpg"
import pic3 from "../img/South-India.jpg"
import pic4 from "../img/india-educational-tour-packages.jpg"
// import Popularpack from "../Popular-Packages/popular-pack"

import "./india-pack.scss"

export const IndiaPackages = () => {

    

    return (        <div className="indiapack">

            <div className="nav-india">
                <Navbar />

            </div>
            <div className="pack-name">
                <h1>India Tours Packages</h1>

            </div>
            {/* <Popularpack/> */}


           

        </div>

    )
}

export default IndiaPackages;