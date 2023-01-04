import { collection, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { ItemsContext} from '../context/ItemsContext'


export const LoadItems =()=>{
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
    const {dispatch} = useContext(ItemsContext);
    dispatch({
        type:"SET_ITEMS",
        payload: element
    })
}