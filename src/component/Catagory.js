import {  Row, Stack} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft,faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";


const Catagory = ()=>{
    const handleSlid =(side)=>{
        const container = document.querySelector(".catagory-horizontal-cards");
        if(side===1)
        container.scrollBy(-310,0);
        else{
          container.scrollBy(310,0);
        }
      }
    return(
        <div className="popular position-relative">
        <h2>Catagory</h2>
        <div className="position-absolute item-sliding-arrow">
            <div className="" onClick={()=>handleSlid(1)}>
            <span aria-hidden="true" className="carousel-control-prev-icon "
            style={{filter:"invert(1) grayscale(100)",}}></span></div>
            <div  onClick={()=>handleSlid(2)}>
            <span aria-hidden="true" className="carousel-control-next-icon "
            style={{filter:"invert(1) grayscale(100)",}}></span></div>
           </div>
   <Row className="gap-3 flex-nowrap catagory-horizontal-cards">
   {/*First popuplar dish  */}
     
      <div className="border-2 border rounded overflow-hidden shadow p-2 food-card" >
            <div>
                <img src="img/d8.png" alt="drink" />
            </div>
            <div >
             <Stack direction="horizontal">
              <h4 className="">Drink</h4>
              </Stack>
              <p>Get your drink
              </p>
              <Stack direction="horizontal" className="justify-content-center">
              <Link to="/catagory/drink"  className="btn btn-warning mt-2 btn-lg btn-block w-100 ">Check</Link>
              </Stack>
            </div>
      </div>
      <div className="border-2 border rounded overflow-hidden shadow p-2 food-card" >
            <div>
                <img src="img/i4.png" alt="ice-cream"/>
            </div>
            <div >
             <Stack direction="horizontal">
              <h4 className="">IceCream</h4>
              </Stack>
              <p>Wow get it
              </p>
              <Stack direction="horizontal" className="justify-content-center">
              <Link to="/catagory/icecream"  className="btn btn-warning mt-2 btn-lg btn-block w-100 ">Check</Link>
              </Stack>
            </div>
            
      </div>
      <div className="border-2 border rounded overflow-hidden shadow p-2 food-card" >
            <div>
                <img src="img/burger.png" alt="burger" />
            </div>
            <div >
             <Stack direction="horizontal">
              <h4 className="">Burger</h4>
              </Stack>
              <p>Make your day
              </p>
              <Stack direction="horizontal" className="justify-content-center">
              <Link to="/catagory/burger"  className="btn btn-warning mt-2 btn-lg btn-block w-100 ">Check</Link>
              </Stack>
            </div>  
      </div>
      <div className="border-2 border rounded overflow-hidden shadow p-2 food-card" >
            <div>
                <img src="img/pizza.png" alt="pizza" />
            </div>
            <div >
             <Stack direction="horizontal">
              <h4 className="">Pizza</h4>
              </Stack>
              <p>Wow get it
              </p>
              <Stack direction="horizontal" className="justify-content-center">
              <Link to="/catagory/pizza"  className="btn btn-warning mt-2 btn-lg btn-block w-100 ">Check</Link>
              </Stack>
            </div>
      </div>
      <div className="border-2 border rounded overflow-hidden shadow p-2 food-card" >
            <div>
                <img src="img/r3.png" alt="biryani"/>
            </div>
            <div >
             <Stack direction="horizontal">
              <h4 className="">ChikenBiryani</h4>
              </Stack>
              <p>Very testy
              </p>
              <Stack direction="horizontal" className="justify-content-center">
              <Link to="/catagory/chickenrice"  className="btn btn-warning mt-2 btn-lg btn-block w-100 ">Check</Link>
              </Stack>
            </div>
            
      </div>
 </Row>
 </div>
    )
}

export default Catagory;