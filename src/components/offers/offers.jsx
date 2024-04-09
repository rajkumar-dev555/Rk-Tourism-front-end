import pic from "../img/singapore1.avif"
import pic1 from "../img/boat ride.jpg"
// import pic1 from "../img/sentosa-singapore-3.jpg"
import Navbar from "../navbar/navbar";
import Paper from '@mui/material/Paper';
import SimpleDialog from "../dialog/dialog";
import "./offers.scss"
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../footer/footer";

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import axios from "axios";

export const Offer = () => {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const [packdetails, setPackdetails] = useState({});

    useEffect(()=> {
     fetchData();
    }, [])

    const fetchData= async () =>{

      try{
        const response = await axios.get("http://localhost:3001/atp");
        console.log(response.data)
        setPackdetails(...response.data)
      } catch (error) {
        console.error();
      }
    }

  const data = [
    {
      id: 0,
      title: "singapore",
      import: pic,
      content: "The Merlion's fish-like body symbolises Singapore's origins as a fishing village, known as Temasek—a name which comes from same root as the word tasek ('lake' in Malay). The statue's head represents the city's original name of Singapura (lion city in Sanskrit)"
    },
    {
      id: 1,
      title: "London",
      import: pic1,
      content: "London is the capital city of the United Kingdom. It is the U.K.'s largest metropolis and its economic, transportation, and cultural centre. London is also among the oldest of the world's great cities, with its history spanning nearly two millennia."
    }

  ]

   const datas = [
    {
      id : 0,
      day: "day 1Sentosa Island Tour",
      details: " After you land in Singapore, our tour representatives will greet you at the airport and take you to your hotel. Once you have checked in and freshened up, it is time to begin your fabulous Singapore vacation.On your first day, you will be exploring the gorgeous Sentosa Island and the numerous activities present in its surroundings.Interact with the dolphins at Dolphin Island, visit Palawan Beach to see the famous suspension bridge, and enjoy a thrillingcable car ride at the Skyline Luge and Skyride.",
      d2 : "day 2  Universal Studios - Chinatown",
      details2: " You must visit Universal Studios theme park in Singapore, the first of its kind in Southeast Asia. Don't forget to ride Battlestar Galactica, the world's tallest duelling rollercoaster.",
      d3: "Day 3 Gardens by the Bay - National Gallery Singapore - Merlion Park - Singapore Zoo",
      details3: " The first stop on your therd day is Gardens By The Bay, a nature park that covers an area of 101 hectares and has three waterfront gardens. After this, head to the National Gallery Museum, which displays mesmerizing pieces of art from the Southeast Asian community."
    },
    {
      id : 1,
      day: "day1 :Arrival London",
      details: " After your arrival in London, our tour representatives will meet and transfer you to the hotel. You can discover the beauty of London by visiting the famous attractions such as Madame Tussauds, Tower of London and the Crown Jewels. You can experience a great feel by riding aboard the London Eye and enjoy breathtaking views of the city and its eye-catching attractions. Move back to the hotel for your overnight stay.",
      d2 : " Day 2 : London",
      details2: "After a quick breakfast, get ready for a Hop-On Hop-Off tour conducted on the original London double-decker bus. You need to know that this tour package offers two sightseeing routes in which one covers all the main sights in Central London with live commentary. The other route covers all the museums. You can also walk and enjoy the scenic cruise on the River Thames.",
      d3: "Day 3 : London- Sightseeing",
      details3: " Take your breakfast in the morning. Proceed to visit the Windsor Castle and Stonehenge and Bath - England's most beautiful Georgian city. In this full day tour, you will be taken to the entrance to Windsor Castle, and the home of the Royal Family. It is considered to be the longest- occupied castle. Ensure to check out the lavishly decorated 19th century State Apartments, the 15th century St. George's Chapel and its fortified walls."
    }
   ]
  const state = useLocation();
  console.log(state.state);
  const [myData, setMyDate] = useState(data[state.state]);
  const [myDatas, setMyDates] = useState(datas[state.state])

  return (
    <div className="offers">
     <div className="top-menu">
     <div className="off-navbar">
        <Navbar />
      </div>

      <div className="offer-title">
        <h4>Offers</h4>
      </div>
     </div>

      <div className="pic">
        <h3>{packdetails.title}</h3>

        <div className="image">
          <img src={packdetails.import} alt="" />
          {/* <img src={pic1} alt="" /> */}

        </div>
        <h3>Overview</h3>
        <p id="content">{packdetails.content}</p> 
        <div className="infor">
          <h5>More Details</h5>
          <div className="inputs">

            <div className="box">
              <Accordion
                expanded={expanded}
                onChange={handleExpansion}
                slots={{ transition: Fade }}
                slotProps={{ transition: { timeout: 400 } }}
                sx={{
                  '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                  '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>{myDatas.day}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="details">
                    {myDatas.details}

                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography >{myDatas.d2}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="details2">
                    {myDatas.details2}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography>{myDatas.d3}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="details3">
                   {myDatas.details3}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>

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
      <Footer />
    </div>
  )
}

export default Offer;