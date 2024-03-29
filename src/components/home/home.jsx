
import Navbar from "../navbar/navbar";
// import Login from "../login/login";
import { Form } from "../register/register"
// import Travel from "../package/package"
// import Hero from "../hero/hero";
import Holoday from "../holidays/holiday";
import Footer from "../footer/footer";
import Events from "../events/events";
import Trending from "../Trending-Tours/trendingtours";
import "./home.scss"

// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Home() {
  // function Login() {
  // }

  return <div className="div">
    <div className="div1">
      <Navbar />
      <h4 id="home_h4">NEVER STOP EXPLOREING THE WORLD</h4>
    </div>


    <Holoday />
    <Events/>
    <Trending/>
    <Footer/>


  </div>

}

export default Home;