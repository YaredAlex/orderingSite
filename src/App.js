import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './component/NavBar';
import Login from './pages/Login';
import Signin from './pages/Signin';
import PageNotFound from './pages/PageNotFound';
import { AddItems } from './pages/AddItems';
import { Order } from './pages/Order';
import CatagoryPage from './pages/CatagoryPage';
import OrderNow from './pages/OrderNow';
function App() {
  
  return (
      <BrowserRouter>
      <NavBar/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login/>} />
         <Route path="/signin" element={<Signin/>} />
         <Route path="/additem" element={<AddItems/>} />
         <Route path="/order/:id" element={<Order/>} />
         <Route path="/catagory/:catagory" element={<CatagoryPage/>} />
         <Route path="/ordernow" element={<OrderNow/>} />
         <Route path="*" element={<PageNotFound/>}/>

       </Routes>
      
      </BrowserRouter>
  );
}

export default App;
