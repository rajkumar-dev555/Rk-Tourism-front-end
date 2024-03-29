import pic from "../img/dubai city.jpg"
import pic1 from "../img/switzerland.jpg"
import pic2 from "../img/singapore-sentosa.jpg"
import pic3 from "../img/mauritius.jpg"
import { Paper } from "@mui/material";
import "./trendingtours.scss"


export const Trending = () => {

    const tourData = [
        {
            image: pic,
            place: "Dubai",
            Name: "Dubai City Tour Package",
            days: "3 Night 4 Days"
        },
        {
            image: pic1,
            place: "Switzerland",
            Name: "Best of Switzerland Package",
            days: "4 Night 5 Days"
        },
        {
            image: pic2,
            place: "Sindapore,sentosa",
            Name: "Amazing Singapore Tour",
            days: "3 Night 4 Days"
        },
        {
            image: pic3,
            place: "mauritius",
            Name: "Indulge in the Magical Mauritius Tour | Itinerary",
            days: "4 Night 5 Days"
        },
        
    ]
    return (
        <div className="tour">
            <h1>Trending Tours</h1>

            {/* <div className="trend-pack">
                
                <div className="popular-pack">

                    <img src={pic} alt="" />
                    <p>india</p>


                </div>

            </div> */}
            <div className="paperlayout">

               {tourData.map((Data, index) => (

                <Paper className="papers">
                    <img src={Data.image} alt="" width="100%" />
                    <div className="infor">
                        <p>{Data.place}</p>
                        <a href="">{Data.Name}</a>
                        <p className="day">{Data.days}</p>

                    </div>
                </Paper>
               ))} 
            </div>


        </div>
    )
}

export default Trending;