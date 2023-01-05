import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"



export const LogoutMessage = ({setShow})=>{
   const navigate = useNavigate();
   const [,,removeCookie] = useCookies(['user']);
    const logout = () =>{
        setShow(false);
        removeCookie('name',{path:'/'});
        navigate("/login");
    }

    return(
        <div className="d-flex justify-content-center align-items-center spinning-cont" onClick={()=>setShow(false)}>
            <div className="bg-light p-1 rounded logout-message">
            <h3>Are you sure!</h3>
            <hr/>
            <div className="d-flex gap-1 mt-3 ">
            <button onClick={logout}
            className="btn btn-outline-danger btn-block me-auto">Continou</button>
            <button onClick={()=>setShow(false)} 
            className="btn btn-danger btn-block">Cancle</button>
            </div>
            </div>
        </div>
    )
}