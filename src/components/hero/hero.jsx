import "./hero.scss"
import Carousel from 'react-bootstrap/Carousel';

function Hero() {

    return(
        <div className="abc">
          <Carousel>
             <Carousel.Item  className="first">
                  <div className="fs">

                   </div>


                   <Carousel.Caption>
          
                       <h3>First slide label</h3>
                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                   </Carousel.Caption>
                </Carousel.Item>
      
               <Carousel.Item className="scond">
                     <div className="sc">

                     </div>
                   <Carousel.Caption>
                       <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
              </Carousel.Item>
               <Carousel.Item className="third">
                  <div className="ccc">

                  </div>
                    <Carousel.Caption>
                         <h3>Third slide label</h3>
                         <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p>
                    </Carousel.Caption>
             </Carousel.Item>
    </Carousel>
  </div>
    )

}

export default Hero;