import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { auth } from "../component/firebaseConfig";
import {UserContext }from "../context/UserContext";
import {useCookies} from 'react-cookie'

const Login =()=>{
    
    const [error,setError] = useState(false);
    const [data,setData] = useState({});
    const [cookie,setCookie] = useCookies(['user']);
    const onchange=(e)=>{
        const id = e.target.id;
        const value = e.target.value;
        setData({...data,[id]:value});
    }
 const {currentUser,dispatch} = useContext(UserContext);
 const handleSubmit= async(e)=>{
   e.preventDefault();
   console.log("submiting");
   try{
         const res = await signInWithEmailAndPassword(auth,data.email,data.password);
         console.log(res);
         const user = {
            email:res.user.email,
            name:res.user.displayName
        }
        setCookie('Name',res.user.email,{path:'/'});
         dispatch({
            type:'LOGIN',
            payload:user,
         })
        
         localStorage.setItem('user',JSON.stringify(user));
         console.log("current user is ",res.user.email)

   }
   catch(error){
    setError(error);
    console.log(error);
   }
 }

    return(
        <Container className="mt-5">
            <p>current user is: {currentUser? currentUser.email:""}</p>
            <form onSubmit={handleSubmit} style={{maxWidth:"400px"}} 
              className="d-flex flex-column border border-dark gap-3 mx-auto mt-5 p-2 rounded">
                <input type='email' placeholder="Your email" onChange={onchange} id="email" required
                className="form-control"/>
                <input type='password' placeholder="password" id="password" onChange={onchange} required
                className="form-control"/>
                {error && <div className="bg-danger my-1 rounded">error occured invalid password or user name</div>}
               <Button variant="outline-primary" className="mx-auto" type="submit">Login</Button>
            </form>
        </Container>
    )
}

export default Login;