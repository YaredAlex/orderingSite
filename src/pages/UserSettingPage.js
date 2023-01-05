import { useContext } from "react"
import { Container } from "react-bootstrap"
import { UserContext } from "../context/UserContext"


const UserSetting = ()=>{
    const {currentUser} = useContext(UserContext);
    return(
        <Container className="d-flex justify-content-center align-items-center" style={{height:"80vh"}}>
            <div className="user-profile-setting">
                <div className="user-profile-image">
                    <img src="./user.png" alt="user"/>
                </div>
                <div className="user-profile-property mt-2 ">
                    <p className="border-bottom p-2  m-0">Email : {currentUser.email}</p>
                    <p className="border-bottom p-2  m-0">PhoneNumber :{}</p>
                    <p className="border-bottom p-2  m-0" >Country : {}</p>
                    <p className="border-bottom p-2  m-0">Address : {}</p>
                </div>
            </div>
        </Container>
    )
}
export default UserSetting;