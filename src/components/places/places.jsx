import pic from "../img/Screenshot 1.png"
import pic1 from "../img/kuala lumpur.jpg"
import pic2 from "../img/mountain-peak-adventure.avif"
import pic3 from "../img/bora-bora.jpg"
import pic4 from "../img/tr05saudi.webp"

import Navbar from "../navbar/navbar"
import Payment from "../payment/payment"
import Popularpack from "../Popular-Packages/popular-pack"
import Footer from "../footer/footer"

import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";
import "./places.scss"


function Turiousm() {

  const paperData = [
    {
      image: pic3,
      place: 'Bora',
      package: "summer vacation Day Package",
      amount: "4,500 INR"
    },
    {
      image: pic2,
      place: 'India',
      package: "Himachal Pradesh",
      amount: "2,600 INR"
    },
    {
      image: pic1,
      place: 'Malaysia',
      package: "Foundation Day Package",
      amount: "3,700 INR"
    },
    {
      image: pic4,
      place: 'Riyadh',
      package: "Foundation Day Package",
      amount: "6,900 INR"
    },
  ]


  return (
    <div className="ddd">
      <div className="nav">
        <Navbar />
        <div className="navlift">
          <h1>Tourist places</h1>

        </div>
        <div className="button-div">

          <Link to="/allpackage"><button>Explore all Package</button></Link>



        </div>

      </div>


      <div className="tour">
        {/* <h1>Tourtis places</h1> */}
        <div className="left">
          <h3>Packages</h3>

        </div>

      </div>
      <div className="places">
        <div className="row">
          <p>Most Discount</p>
        </div>
        <div className="plname">
          <p>French Polynesia</p>
          <p>India</p>
          <p>Malaysia</p>
          <p>Saudi Arabia</p>

        </div>

      </div>

      <div className="paper_main">

        {paperData.map((data, index) => (
          <Paper className="paper" elevation={3} key={index}>
            <img src={data.image} alt="" width="100%" />
            <div className="details">
              <span>{data.place}</span>
              <div>{data.package}</div>
              <p>Start from</p>
              <span id="amount">{data.amount}</span>
              <div id="button">
                <Link to="/payment" state={index}><p>Book Now</p></Link>
                <SlArrowRight id="arrow" />
              </div>
            </div>
          </Paper>
        ))}


      </div>

      <Popularpack />

      <Footer />

    </div>
  )
}

export default Turiousm;

