import { Container ,Carousel, Button, Row, Stack,Card} from "react-bootstrap";
import {useCookies} from 'react-cookie'
import Popular from "../component/Popular";
import Catagory from "../component/Catagory";
import { Footer } from "../component/Footer";
import { Steps } from "../component/Steps";
import { collection, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../component/firebaseConfig";
import { ItemsContext} from '../context/ItemsContext'
const Home =()=>{
 const [cookie,setCookie] = useCookies(['user']);
 const user = JSON.parse(localStorage.getItem('user')) || '' ;
 const [element,setElement] = useState([]);
 useEffect(()=>{
           const list = [];
            const getDocment = async()=>{
            try{
                const querySnapshot = await getDocs(collection(db, "Items"));
                querySnapshot.forEach((doc) => {
                list.push({id:doc.id, ...doc.data()});
                setElement(list);   
            }); 
            
            }catch(e){
                console.log(e);
            }
        }
        getDocment();     
        
}  , []);


    return(
        <>
        <Container className=" text-dark mt-3 mb-3">
            <div className="border-2 border-dark border-bottom">
           <Carousel  variant="dark" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/c1.png"
          alt="First slide"
          style={{objectFit:"contain",height:"80vh"}}
        />
        <Carousel.Caption>
          <h3 className="mt-5">First slide label</h3>
          <p>Don't forget to take it</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/c2.png"
          alt="Second slide"
          style={{objectFit:"contain",height:"80vh",paddingBottom:"20px"}}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Make your day</p>
        </Carousel.Caption>
      </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="img/c3.png"
            alt="Third slide"
            style={{objectFit:"contain",height:"80vh"}}
            />

            <Carousel.Caption>
            <h3>Third slide</h3>
            <p>
                come take have a nice food
            </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </div>
    {/*Making Enterance  */}
        <Stack className="align-items-center jsutify-content-center" direction="horizontal">
     <div className="text-dark mt-4 p-2 ">
        <h4>You feeling something</h4>
         <h4>Order you favorite food here!</h4>
         <p style={{maxWidth:"300px"}}>make sure you get the best! you deserve it 
            check out our menu here and order now
         </p>
         <Button variant="warning" size="lg" className="shadow-lg ">orderNow!</Button>
    </div>
     <img  src="img/cheff.png"
     style={{height:"300px",objectFit:"contain",marginLeft:"auto",marginRight:"20px"}}  className="img-hidden"/>
     
     </Stack>
      {/*Making popular page*/}
        <Popular element={element}/>
        <Catagory element={element}/>
        <Steps/>
        </Container>
        <Footer/>
        </>
    )
}
export default Home;