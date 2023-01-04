import { Container, Stack } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { ItemsContext } from "../context/ItemsContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../component/firebaseConfig";


export const Order =()=>{
     const [items,setItems] = useState([]);
     const [related,setRelated] = useState([]);
     const [loading,setLoading] = useState(true);
    const {id} = useParams();
    useEffect(()=>{
            const fetchdata =async()=>{
                //featch data for related
                const list = [];
                const docRef = doc(db, "Items", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                 list.push({...docSnap.data(),id})
               setItems(list);
               setLoading(false);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                }

            }
            fetchdata();
    },[]);
    
    return(
        <div>
        <Container>
            {loading&&<h1>Loading ....</h1>}
            { 
              items.map((item,index)=>{
                if(id===item.id)
                return(
                    <div 
                    className="gap-3 align-items-center d-flex flex-wrap mb-5 mt-1 p-2 order-box flex-column flex-sm-row justify-content-center" key={index}>
                    <div key={index} className="border order-box-img-container col-sm-4 ">
                        <img src={item.img} alt={item.name}/>
                        <button className="btn btn-warning">Add to cart</button>
                    </div>
                    <div className="order-item-property col-sm-6  ">
                    <table className="order-info-table">
                    <tr>
                        <th>Name</th>
                        <td>{item.name}</td>
                    </tr>
                    <tr>
                        <th>Price</th>
                        <td>{item.price} ETB</td>
                    </tr>
                    <tr>
                        <th>Amount</th>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th>Payment Type</th>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th>Amount</th>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td>total</td>
                    </tr>
                </table>
                    </div>
                    </div>
                )
                return "";
            })}
            <div className="order-info">
                
                <select className="form-control">
                    <option value=""> choose your place </option>
                    <option value="Chandigarh">Chandigarh</option>
                </select>
                <input type="text" placholder="Address" className="form-control"/>
                <input type="text" placeholder="Reciver Name" className="form-control"/>
                <input type="Email" placeholder="Email" className="form-control"/>
            </div>
        <h3>Related Products</h3>
        <div className="related-product d-flex border border-dark p-2 gap-2">
          <div className="related-product-card border border-dark shadow-sm p-2">
          <div className="related-product-card-img " >
            <img  />
            <p>Image here</p>
          </div>
          <h4>Name</h4> 
          <p>Price</p>
          <button className="btn btn-block btn-danger w-100 shadow">Show</button>
          </div>
          
        </div>
        </Container>
        <footer className="p-4 bg-dark mt-3 text-light">
                 <p>Contact place</p>
            </footer>
        </div>
    )
}