import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom";
import { db } from "../component/firebaseConfig";
import {Stack }from "react-bootstrap";
import { Rating } from "../component/RatingStar";
import { Link } from "react-router-dom";
const CatagoryPage = ()=>{
const [data,setData] = useState([]);
const [loading,setLoading] = useState(true);
const {catagory} = useParams();
    useEffect(()=>{
              const fetchdata = async()=>{
                     const list = [];
                     const querySnapshot = await getDocs(collection(db,"Items"));
                     querySnapshot.forEach((doc)=>{
                           list.push({id:doc.id ,...doc.data()});
                     })
                     setData(list);
                     setLoading(false);
              }
              fetchdata();
    },[])

    return(
        <Container>
            {loading&&<h3>Loading...</h3>}
            <div>
                <h4>
                    This is catagory!
                </h4>
            </div>
            <div className="d-flex gap-3 flex-wrap">
            {data.map((item,index)=>{
                if(item.catagory===catagory)
                return(
                    <div className="border-2 border rounded overflow-hidden shadow p-2 food-card card-tobe-100" key={`${index}-cat `}>
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
             return ""
            })}

</div>
        </Container>
    )
}
export default CatagoryPage;