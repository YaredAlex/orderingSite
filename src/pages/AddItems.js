import { useState } from "react"
import { Container, Stack } from "react-bootstrap"
import upload from './upload.svg'
import noimage from '../noimage.png'
import { collection, doc, setDoc ,addDoc} from "firebase/firestore"; 
import { db ,storage} from "../component/firebaseConfig";
import Swal from "sweetalert2";
import { Spin } from "../component/Spinning";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


export const AddItems =()=>{
const [count,setCount] = useState(0);
const [process,setProcess] = useState(false);
const [file,setFile] = useState("");
const [data,setData] = useState({catagory:"",numberOfOrder:0});
const [active,setActive] = useState(true);
const [send,setSend] = useState(true);
const changeFile = (e)=>{
   console.log(e.target.files[0]);
   setFile(e.target.files[0]);
}
const addFile = async()=>{
    if(file===""){
        Swal.fire("Image","image is not selected","info");
        return; 
       }
    setProcess(true);
    const storageRef = ref(storage, new Date().getTime()+file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed', 
        (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        break;
                    }
       }, 
     (error) => {
        Swal.fire("Error","","error");
    }, 
     () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setData({...data,img:downloadURL});
                setSend(false);
                setProcess(false);
                });
         }
     );
   return;
}
 const addData= async(e)=>{
     e.preventDefault();
     if(data.catagory===""){
     Swal.fire("catagroy","catagory is not selected","info");
     return; 
    }
     else {
      setProcess(true);
     try{
        await addDoc(collection(db, "Items"), data);
        setProcess(false);
        Swal.fire("Add","successfully","success");
     }catch(e){
        console.log(e);
        setProcess(false);
        Swal.fire("Oops!","some thing went wrong","error");
        
     }
  }   
    setFile("");
    setSend(true);
    e.target.reset();
 }
    return(
       <Container>
        {process && <Spin/>}
        <h4 className="text-center mb-5">Add New Items here
                </h4>
           <form className="d-flex justify-content-center flex-wrap" onSubmit={addData}>
           <div className="col">
            <label htmlFor="img"
             className="cursor-pointer add-item-label"> Item image Choose file
            <br/>
            
            <img src={file ? URL.createObjectURL(file):
            noimage} alt="input new" width="200px" height="200px" className="rounded-circle border border-warning d-block item-img" />
            <span className="add-img-span">
                <img src={upload} alt="img" width="60px"/></span></label>
            <input type="file" hidden id="img" onChange={changeFile} accept="image/jpg ,image/png,image/jpeg" name="item-img"/>
           </div>
            <Stack className="gap-2 add-item-input">
                 <select onChange={(e)=>setData({...data,[e.target.id]:e.target.value})} id="catagory" className="form-control"> 
                    <option value="">Select Item catagory</option>
                    <option value="pizza">Pizza</option>
                    <option value="drink">Soft Drink</option>
                    <option value="fried">Fried</option>
                    <option value="energy">Energy Drink</option>
                    <option value="fish">Fish</option>
                    <option value="icecream">IceCream</option>
                    <option value="rice">Rices</option>
                    <option value="burger">Burger</option>
                 </select>
                  
                <label>Item Name : 
                <input type="text" placeholder="ItemName" required  
                className="form-control" id="name" onChange={(e)=>setData({...data,[e.target.id]:e.target.value})}/>
                </label>
                <label>Item price : 
                <input type="number" placeholder="Price"   required
                className="form-control" id="price" onChange={(e)=>setData({...data,[e.target.id]:e.target.value})} />
                </label>
                <textarea   placeholder="Description here" required className="form-control" id="description" onChange={(e)=>setData({...data,[e.target.id]:e.target.value})}/>
                <input type="number" placeholder="rating here" className="form-control" id="rate" min="1" max="5" onChange={(e)=>setData({...data,[e.target.id]:e.target.value})} />
                <button className="btn btn-outline-primary btn-block w-100" disabled={send}>
                    {send ? "Add Image first":"Add Item"}
                </button>
            </Stack>
           </form>
         <button className="btn btn-primary mt-3" disabled={!send}
          onClick={addFile}>Add Image</button>

       </Container>
    )
}