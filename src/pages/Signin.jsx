import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Button, Container } from "react-bootstrap"
import { auth } from "../component/firebaseConfig";

const Signin = ()=>{
  const [error , setError] = useState(false);
  const [data,setData] = useState({});
   const onsubmit =async(e)=>{
          e.preventDefault();
          try{
            console.log(data);
             const res = await createUserWithEmailAndPassword(auth,data.email,data.password);
             console.log("user created")
             console.log(res);

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
        <Container className="border border-2 border-dark mt-5 p-2">
            <p className="text-center">sign in </p>
            <form onSubmit={onsubmit}  
            className="d-flex mx-auto border border-dark flex-column p-2 rounded gap-3" style={{maxWidth:"400px"}}>
                {error&&<div>{error}</div>}
                      <input type='email' className="form-control" 
                      placeholder="email" required onChange={onchange} id="email"/>
                      <input type='password' className="form-control" 
                      placeholder="Your password" required onChange={onchange} id="password" />
                      <Button variant="outline-secondary" size="lg" 
                      className="mx-auto" type="submit">
                        Sign in
                      </Button>
            </form>
        </Container>
    )
}

export default Signin;