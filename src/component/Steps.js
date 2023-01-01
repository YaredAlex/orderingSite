import { Row, Stack } from "react-bootstrap"



export const Steps =()=>{
    return(
        <div style={{maxWidth:"800px" ,margin:"auto"}} className="mt-4">
            <h3 className="text-center">Whats make us unique</h3>
        <Stack direction="horizontal" className="steps justify-content-evenly p-2 flex-wrap gap-2">

           <div className="steps-card border borer-dark rounded shadow p-2">
               <div>
                <img src="img/delivery.png"/>
               </div>
               <h4>Fast delivery</h4>
               <p>We know there is no way it going to be late</p>
            </div> 

            <div className="steps-card border borer-dark rounded p-2">
               <div>
                <img src="img/chef1.png"/>
               </div>
               <h4>Highly</h4>
               <p>Foods are very delicious one test and you are addicted</p>
            </div> 
            <div className="steps-card border borer-dark rounded p-2">
               <div>
                <img src="img/delivery.png"/>
               </div>
               <h4>Highly</h4>
               <p>We know there is no way it going to be late</p>
            </div>             
        </Stack>
        </div>
    )
}