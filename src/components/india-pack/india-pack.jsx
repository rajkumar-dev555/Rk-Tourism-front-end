import Navbar from "../navbar/navbar"
import { Link } from "react-router-dom"
// import pic from "../img/India-Honeymoon-Packages.jpg"
// import pic1 from "../img/india-educational-tour-packages.jpg"
import pic2 from "../img/North-India.jpg"
import pic3 from "../img/South-India.jpg"
import pic4 from "../img/East-India.jpg"


import pic5 from "../img/Agra-tajmahal.jpg" 
import pic6 from "../img/Munnar-kochin.jpg"
import pic7 from "../img/Meenakshiamman.jpg"
import pic8 from "../img/Backwaters-kerala.jpg"

import "./india-pack.scss"
import { Paper } from "@mui/material"
import Footer from "../footer/footer"
import { useLocation, useState} from "react"
// import { Tour } from "@mui/icons-material"

export const IndiaPackages = () => {

    const indiandata = [
        {
            id:0,
            image: pic2,
            name: "North Indian Tours",
            Tours: "21 Tours"
        },
        {
            id:1,
            image: pic3,
            name: "Soth Indian Tours",
            Tours: "26 Tours"
        },
        {
            id:2,
            image: pic4,
            name: "East Indian Tours",
            Tours: "8 Tours"
        }
    ]
    
    // const state = useLocation();
    // console.log(state.state);
    

    const  localdata=[
        {  
            //   id:0,
             image:pic5,
             name:"tai mahal"
        },
        {

            // id:1,
            image:pic6,
            name:"Kochin-munnar"
        },
        {

            // id:2,
            image:pic7,
            name:"meenakshiamman-TamilNadu"
        },
        {

            // id:3,
            image:pic8,
            name:"Backwaters-Kerala"
        }

    ]

    // const state = useLocation();
    // console.log(state.state);
    // const [myData, setMyDate] = useState(data[state.state]);


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

                    <div className="indian-tours" elevation={3} key={index}>

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
                  {localdata.map((data, index)=>(

                    <Paper className="Local-packages" elevation={4} key={index}>
                        <img src={data.image} alt=""    width="100%" />

                        <div className="local-informaction">
                             <p>{data.name}</p>
                        </div>

                    </Paper>
                  ))}
                    
                </div>
            </div>



            <Footer />
        </div>

    )
}

export default IndiaPackages;