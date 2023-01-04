import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { Container, Stack } from "react-bootstrap"
import { db } from "../component/firebaseConfig";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "../component/RatingStar";
const OrderNow = ()=>{
const [data,setData] = useState([]);
const [loading,setLoading] = useState(true);
useEffect(()=>{
    const fetchdata = async()=>{
        const list = [];
        const snapshot = await getDocs(collection(db,"Items"));
        snapshot.forEach((doc)=>{
            list.push({id:doc.id,...doc.data()});
        })
       setData(list); 
       setLoading(false);
    }
    fetchdata();
})
    return(
        <Container>
        {loading&&<h3>Loading...</h3>}
        <div className="shadow-sm  d-flex  my-2 gap-1" >
           <div className="col p-3 border-r border border-danger rounded">
            Filter
           </div>
           <div className="col p-3 border border-danger rounded">
            gotoCatagory
           </div>
        </div>
        <div className="d-flex gap-3 flex-wrap justify-content-center">
        {data.map((item,index)=>{
            return(
                <div className="border-2 border rounded overflow-hidden shadow p-2 food-card card-tobe-100" key={`${index}-cat`}>
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
              <Link className="btn btn-danger mt-2 btn-lg btn-block ms-auto " to={`/order/${item.id}`}>Order</Link>
              </Stack>
            </div>
      </div>
            )
        })}

</div>
    </Container>
    )
}

export default OrderNow;