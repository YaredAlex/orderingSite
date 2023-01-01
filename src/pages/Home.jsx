import { Container } from "react-bootstrap";
import {useCookies} from 'react-cookie'

const Home =()=>{
 const [cookie,setCookie] = useCookies(['user']);
 const user = JSON.parse(localStorage.getItem('user')) || '' ;

    return(
        <Container className="border-2 border-dark border">
           <p>hello user {user ? user.email: ""}</p> 
            hello cookie user {cookie? cookie.Name:""}
        </Container>
    )
}
export default Home;