import { Container ,Carousel, Button, Row, Stack,Card} from "react-bootstrap";
import { Rating } from "./RatingStar";



const Catagory = ()=>{

    return(
        <div className="popular">
        <h2>Catagory</h2>
   <Row className="gap-3 flex-nowrap horizontal-cards">
   {/*First popuplar dish  */}
     
      <div className="border-2 border rounded overflow-hidden shadow p-2 food-card" >
            <div>
                <img src="img/d8.png" />
            </div>
            <div >
             <Stack direction="horizontal">
              <h4 className="">Drink</h4>
              </Stack>
              <p>Get your drink
              </p>
              <Stack direction="horizontal" className="justify-content-center">
              <button className="btn btn-warning mt-2 btn-lg btn-block w-100 ">Check</button>
              </Stack>
            </div>
      </div>
      <div className="border-2 border rounded overflow-hidden shadow p-2 food-card" >
            <div>
                <img src="img/i4.png" />
            </div>
            <div >
             <Stack direction="horizontal">
              <h4 className="">IceCream</h4>
              </Stack>
              <p>Wow get it
              </p>
              <Stack direction="horizontal" className="justify-content-center">
              <button className="btn btn-warning mt-2 btn-lg btn-block w-100">Check</button>
              </Stack>
            </div>
      </div>
 </Row>
 </div>
    )
}

export default Catagory;