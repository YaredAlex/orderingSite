import { Container ,Carousel, Button, Row, Stack,Card} from "react-bootstrap";
import { Rating } from "./RatingStar";


const Popular =()=>{

    return(
        <div className="popular">
             <h2>Trending food now!</h2>
        <Row className="gap-3 flex-nowrap horizontal-cards">
        {/*First popuplar dish  */}
          
           <div className="border-2 border rounded overflow-hidden shadow p-2 food-card" >
                 <div>
                     <img src="img/cu2.png" />
                 </div>
                 <div >
                  <Stack direction="horizontal">
                   <h4 className="">Chicken souce</h4>
                   <h4 className="ms-auto ">10$</h4>
                   </Stack>
                   <p>Chicke souce is include best of best ingredient which 
                    i don't even know
                   </p>
                   <Stack direction="horizontal" className="">
                   <Rating/>
                   <button className="btn btn-danger mt-2 btn-lg btn-block ms-auto">Order</button>
                   </Stack>
                 </div>
           </div>
           <div className="border-2 border rounded overflow-hidden shadow p-2 food-card" >
                 <div>
                     <img src="img/cu4.png" />
                 </div>
                 <div >
                  <Stack direction="horizontal">
                   <h4 className="">Chicken souce</h4>
                   <h4 className="ms-auto ">10$</h4>
                   </Stack>
                   <p>Chicke souce is include best of best ingredient which 
                    i don't even know
                   </p>
                   <Stack direction="horizontal" className="">
                   <Rating/>
                   <button className="btn btn-danger mt-2 btn-lg btn-block ms-auto">Order</button>
                   </Stack>
                 </div>
           </div>
      </Row>
      {/*Popular drinks */}
      <h2>Popular drink</h2>
      <Row className="gap-3 flex-nowrap horizontal-cards">
      <div className="border-2 border rounded overflow-hidden shadow p-2 food-card" >
                 <div>
                     <img src="img/d1.png" />
                 </div>
                 <div >
                  <Stack direction="horizontal">
                   <h4 className="">RedBull</h4>
                   <h4 className="ms-auto ">5$</h4>
                   </Stack>
                   <p>feeling deasy hold on 
                   </p>
                   <Stack direction="horizontal" className="">
                    <Rating/>
                   <button className="btn btn-danger mt-2 btn-lg btn-block ms-auto">Order</button>
                   </Stack>
                 </div>
            </div>
      </Row>
      </div>
    )
}

export default Popular;