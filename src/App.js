
import './App.css';
// import Image from "./components/image/image"
import {Form} from "./components/register/register.jsx"
import Login from './components/login/login.jsx';
import Home from "./components/home/home.jsx"
import Navbar from './components/navbar/navbar.jsx';
// import { BrowserRouter, Routes, Route  } from 'react-router-dom';
// import Travel from './components/package/package.jsx';
import Turiousm from './components/places/places.jsx';
import Holoday from './components/holidays/holiday.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Payment from './components/payment/payment.jsx';
import Allpackage from './components/allpackages/allpackage.jsx';
import Offer from './components/offers/offers.jsx';
import Loginpage from './components/loginpage/loginpage.jsx';
import IndiaPackages from './components/india-pack/india-pack.jsx';
import Southindiantours from './components/south-indian-tours/south-india-tours.jsx';
function App() {

   const route = createBrowserRouter([
    {
      path:"/loginpage",
      element:<Loginpage/>
    },
    {
      path: "/register",
      element:<Form/>
    },
    {
      path: "/",
      element:<Home/>
    },
    {
      path: "/place",
      element:<Turiousm/>
    },
    {
      path: "/payment",
      element: <Payment/>
    },
    {
      path: "/allpackage",
      element : <Allpackage/>
    },
    {
      path: "/offer",
      element : <Offer/>
    },
    {
      path: "/indiapackages",
      element: <IndiaPackages/>
    },
    {
      path:"/southindianpackages",
      element: <Southindiantours/>

    }


    


  ])
  return (
    <div className="App">
                  
          {/* <BrowserRouter>
          
             <Routes>
                 
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Form/>}/>
                <Route path='/' element={<Home/>}/>

             </Routes>
          </BrowserRouter>
          
      */}


               

      <RouterProvider router={route}/>
    </div>
  );
}

export default App;
