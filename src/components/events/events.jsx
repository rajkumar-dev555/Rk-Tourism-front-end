import pic from "../img/singapore1.avif"
import pic1 from "../img/boat ride.jpg"
import pic2 from "../img/eiffel-tower-night.webp"
import pic3 from "../img/netherlands.jpg"
import "./events.scss"
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export const Events = () => {

 const [packageinformaction, setpackageinformaction]=useState({});

   useEffect(()=>{
    fetchData();

   }, [])

   const fetchData = async () =>{
    try{
        const response = await axios.get("http://localhost:3001/packageid/{id}");
        console.log(response.data);
        setpackageinformaction(...response.data)
    } catch (errors) {
        console.error();
    }
   }


    const offersData = [
        {
            image: pic,
            place: "singapore",
            offer: "marriage couples",
            date: "5 to 10 may 2024"
        },
        {
            image: pic1,
            place: "London",
            offer: "Adventure",
            date: "5 to  8 may 2024"
        },        
        {
            image: pic2,
            place: "Paris, France",
            offer: "Summer vacation",
            date: "6 to 9 jully 2024"
        },
        {
            image: pic3,
            place: "netherlands",
            offer: "marriage couples",
            date: "2 to 4 jun 2024"
        }

    ]

    return (

        <div className="event">
            <h1>This Month Offer</h1>

            <div className="div">
                {/* <Link state={}>
                     
                </Link> */}

                {offersData.map((data, index) => (

                    <div className="eve" elevation={3} key={index}>
                       <Link to="/offer" state={index}>  <img  src={data.image} /> </Link>
                        <p>{data.place}</p>
                        <p className="off">{data.offer}</p>
                        <span>{data.date}</span>
                       {/* < ArrowForwardIosIcon/> */}

                    </div>
                ))}
            </div>
        </div>


    )
}

export default Events;