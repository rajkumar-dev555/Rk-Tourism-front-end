import pic from "../img/India-Tour-Packages-.webp"
import pic1 from "../img/International-Tour-Package.webp"
import pic2 from "../img/Honeymoon-Packages.jpg"
import pic3 from "../img/Europe-tour-package-.webp"
import pic4 from "../img/Educational-Tour-.webp"

import { Paper } from "@mui/material"
import { Link } from "react-router-dom"
import "./papular-pack.scss"

export const Popularpack = () => {

    const packData = [
        {
            image: pic,
            name: "Indian pupolur Packages",
            tours: "98 Tours"

        },
        {
            image: pic1,
            name: "International",
            tours: "362 Tours"

        },
        {
            image: pic2,
            name: "HoneyMoone Packages",
            tours: "17 Tours"

        },
        {
            image: pic3,
            name: "Europe Tour Packages",
            tours: "144 Tours"

        },
        {
            image: pic4,
            name: "Educational Tour Packages",
            tours: "15 Tours"

        },
       

    ]


    return (
        <div className="pack">

            <h4>Popular Packages</h4>
            {/* 
            <div className="images">

                <img src={pic} alt="" />
                <h3>India Tour Packages</h3>

                <div className="button-pack">
                    <Link to="/IndiaPackage"><button >45 Tours</button></Link>

                </div>
            </div> */}


            <div className="paper-content">

              {packData.map((data, index) => (
                  
                  <div className="paper-lay" key={index}>
                       <img src={data.image} alt="" />
                       <h3>{data.name}</h3>

                       <div className="div-button">

                        <Link to="/indiapackages"><button>{data.tours}</button></Link>
                           

                       </div>
                   </div>

               ))}
              
            </div>


        </div>
    )
}

export default Popularpack;