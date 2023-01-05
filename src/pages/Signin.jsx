import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Button, Container } from "react-bootstrap"
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../component/firebaseConfig";
import SpinLoading from "../component/Spinning";

const Signin = ()=>{
  const [error , setError] = useState(false);
  const [data,setData] = useState({});
  const [cookie,setCookie] = useCookies(['user']);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
   const onsubmit =async(e)=>{
          e.preventDefault();
          setLoading(true);
          try{
            console.log(data);
             const res = await createUserWithEmailAndPassword(auth,data.email,data.password);
             console.log(res);
            const userData = {uid:res.user.uid,name:res.user.displayName,email:res.user.email}
            setCookie('name',res.user.email,{path:"/"});
            navigate("/");
          }catch(err){
            setError(err.message);
            console.log("error in error")
            console.log(err);
          }
   }
   const onchange = (e)=>{
     setData({...data,[e.target.id]:e.target.value});
   }
    return (
        <Container className="border  mt-5 p-2">
          {loading&&<SpinLoading/>}
            <h3 className="text-center">Sign Up</h3>
            <form onSubmit={onsubmit}  
            className="d-flex mx-auto border border-dark flex-column p-2 rounded gap-3" style={{maxWidth:"400px"}}>
                {error&&<div>{error}</div>}
                      <input type='email' className="form-control" 
                      placeholder="Email" required onChange={onchange} id="email"/>
                      <input type='password' className="form-control" 
                      placeholder="Password" required onChange={onchange} id="password" />
                      <Button variant="outline-danger"  
                      className="mx-auto" type="submit">
                        Sign in
                      </Button>
                    <p>already have an account <Link to="/login">Login</Link></p>
            </form>
        </Container>
    )
}

export default Signin;