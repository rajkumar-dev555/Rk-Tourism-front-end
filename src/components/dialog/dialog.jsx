import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import ClearIcon from '@mui/icons-material/Clear';
import "./dialog.scss"
import { useState } from 'react';
import useRazorpay from "react-razorpay";

import axios from 'axios';

export default function SimpleDialog(props) {

  const [Razorpay] = useRazorpay();

  const { onClose, selectedValue, open } = props;

  const [payment, setPayment] = useState({

    name: "",
    email: "",
    packagename: "",
    date: "",
    phonenumber: "",
    traveldestination: "",
  })



  const handleClose = () => {
    onClose(selectedValue);
  };


  const handleChange = (e) => {
    console.log(payment);

    const { value, name } = e.target
    setPayment({ ...payment, [name]: value })
  }

  const handleSumbit = async () => {
    // console.log(payment);

    // const response = await axios.post("http://localhost:3001/bn", payment)

    // console.log(response.data);


    const options = {
      key: "rzp_test_JRDQQlHCv2mRdq", // Enter the Key ID generated from the Dashboard
      amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Tourism",
      description: "su",
      image: "https://example.com/your_logo",
      // order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzpay = new Razorpay(options)
    rzpay.open();
  }

  return (
    <Dialog className='payment_dialog' onClose={handleClose} open={open} >
      <div className="div">
        <ClearIcon />
        <div className="pay-title">
          <DialogTitle className='title'>Payment</DialogTitle>
        </div>
        <div className="detailes">

          <div className="inputs">
            <input type="text" placeholder='name' name="name" onChange={handleChange} />
            <input type="text" placeholder='Email' name="email" onChange={handleChange} />
            <input type="text" placeholder='Package Name' name="packagename" onChange={handleChange} />
            <input type="text" placeholder='Date' name="date" onChange={handleChange} />
            <input type="text" placeholder='Phone Number' name="phonenumber" onChange={handleChange} />
            <input type="text" placeholder='Travel Destination' name="traveldestination" onChange={handleChange} />
            <input type="text" placeholder='Vacation type' />

          </div>
          <div className="buttontag">
            <button onClick={handleSumbit}>Book Now</button>
          </div>
        </div>

      </div>

    </Dialog>
  );
}
