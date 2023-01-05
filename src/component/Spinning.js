import { Container, Spinner } from "react-bootstrap"


const SpinLoading =()=>{
    return(
            <div className="spinning-cont">
                <div className=" rounded-lg text-center ">
                   <Spinner animation="border" variant="success"/>    
                </div>
            </div>
    )
}

export default SpinLoading;