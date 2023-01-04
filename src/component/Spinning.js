import { Container, Spinner } from "react-bootstrap"


export const Spin =()=>{
    return(
            <div className="spinning-cont">
                <div className=" rounded-lg text-center ">
                   <Spinner animation="border" variant="success"/>    
                </div>
            </div>
    )
}