import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { auth } from "../component/firebaseConfig";
import {UserContext }from "../context/UserContext";
import {useCookies} from 'react-cookie'
import { useNavigate } from "react-router-dom";
import SpinLoading from "../component/Spinning";
import { Link } from "react-router-dom";

const Login =()=>{
    const navigate = useNavigate();
    const [error,setError] = useState(false);
    const [message,setMessage] = useState("");
    const [data,setData] = useState({});
    const [cookie,setCookie] = useCookies(['user']);
    const [loading,setLoading] = useState(false);
    const onchange=(e)=>{
        const id = e.target.id;
        const value = e.target.value;
        setData({...data,[id]:value});
    }
 const {currentUser,dispatch} = useContext(UserContext);
 const handleSubmit= async(e)=>{
   e.preventDefault();
   setLoading(true);
   try{
         const res = await signInWithEmailAndPassword(auth,data.email,data.password);
         const user = {
            email:res.user.email,
            name:res.user.displayName,
            uid:res.user.uid
        }
        setCookie('name',res.user.email,{path:'/',maxAge:60*60*24});
        setCookie('uid',res.user.uid,{path:'/'});
         dispatch({
            type:'LOGIN',
            payload:user,
         })
         setLoading(false);
         navigate("/");

   }
   catch(error){
    if(error.code==="auth/wrong-password")
    setMessage("Wrong password!");
    else if(error.code==="auth/user-not-found")
    setMessage("Invalid user name!");
    else if(error.code==="auth/too-many-requests")
    setMessage("to many request please try later!")
    setError(true);
    console.log(error.code);
    setLoading(false);
    e.target[1].value="";
   }
   
 }

    return(
        <Container className="mt-5">
            {loading&&<SpinLoading/>}
            <p>current user is: {currentUser? currentUser.email:""}</p>
            <h3 className="text-center">Log In</h3>
            <form onSubmit={handleSubmit} style={{maxWidth:"400px"}} 
              className="d-flex flex-column border border-dark gap-3 mx-auto p-2 rounded">
                <input type='email' placeholder="user email" onChange={onchange} id="email" required
                className="form-control"/>
                <input type='password' placeholder="password" id="password" onChange={onchange} required
                className="form-control"/>
                {error && <div className="bg-danger my-1 rounded text-light p-1">error occured {message}</div>}
               <Button variant="outline-danger" className="mx-auto" type="submit">Login</Button>
               <p>You don't have account <Link to="/signin">Create account</Link></p>
            </form>
        </Container>
    )
}

export default Login;