import { faArrowAltCircleLeft, faArrowAltCircleRight} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  Row, Stack,} from "react-bootstrap";
import { Rating } from "./RatingStar";


const Popular =({element})=>{
    const items = element;
    const handleSlid =(side)=>{
      const container = document.querySelector(".horizontal-cards");
      if(side===1)
      container.scrollBy(-310,0);
      else{
        container.scrollBy(310,0);
      }
    }
    return(
        <div className="popular position-relative">
          <div className="position-absolute item-sliding-arrow">
            <div className="" onClick={()=>handleSlid(1)}>
            <span aria-hidden="true" className="carousel-control-prev-icon"
            style={{filter:"invert(1) grayscale(100)",}}></span></div>
            <div  onClick={()=>handleSlid(2)}>
            <span aria-hidden="true" className="carousel-control-next-icon "
            style={{filter:"invert(1) grayscale(100)",}}></span></div>
           </div>
             <h2>Trending food now!</h2>
        <Row className="gap-3 flex-nowrap horizontal-cards">
        {/*First popuplar dish  */}
          {items.map((item,index)=>{
            return(
                <div className="border-2 border rounded overflow-hidden shadow p-2 food-card" key={index}>
                <div>
                    <img src={item.img} alt={item.name}/>
                </div>
                <div >
                 <Stack direction="horizontal">
                  <h4 className="">{item.name}</h4>
                  <h4 className="ms-auto ">{item.price}$</h4>
                  </Stack>
                  <p>{item.description}
                  </p>
                  <Stack direction="horizontal" className="">
                  <Rating/>
                  <a className="btn btn-danger mt-2 btn-lg btn-block ms-auto " href={`./order/${item.id}`}>Order</a>
                  </Stack>
                </div>
          </div>
            )
          })}
           
      </Row>
      {/*Popular drinks */}
      <h2>Popular drink</h2>
      <Row className="gap-3 flex-nowrap horizontal-cards">
      {items.map((item,index)=>{
        if(item.catagory==="softdrink"||item.catagory==="drink")
            return(
                <div className="border-2 border rounded overflow-hidden shadow p-2 food-card" key={`${index}-drink`}>
                <div>
                    <img src={item.img} alt={item.name}/>
                </div>
                <div >
                 <Stack direction="horizontal">
                  <h4 className="">{item.name}</h4>
                  <h4 className="ms-auto ">{item.price}$</h4>
                  </Stack>
                  <p>{item.description}
                  </p>
                  <Stack direction="horizontal" className="">
                  <Rating/>
                  <a className="btn btn-danger mt-2 btn-lg btn-block ms-auto " href={`./order/${item.id}`}>Order</a>
                  </Stack>
                </div>
          </div>
            )
            return "";
          })}
      </Row>
      </div>
    )
}

export default Popular;