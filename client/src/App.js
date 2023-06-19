import './App.css';
import { Outlet, createBrowserRouter} from "react-router-dom";
import Login from './components/login';
import AdminSignin from './components/admin/adminSignin';
import Signup from './components/signup.jsx';
import NavBar from './components/navbar';
import Home from "./components/home";
import AdminDashbord from "./components/admin/AdminDashbord"; 
import CollectionDashBord from './components/admin/CollectionDashbord';
import OrderDashbord from "./components/admin/OrderDashbord";
import CouponDashbord from "./components/admin/CouponDashbord";
import UsersDashbord from "./components/admin/UsersDashbord";
import NewCollection from "./components/admin/NewCollection";


function App() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  );
}


export const appRoutes =createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/admin/signup",
    element:<AdminSignin/>
  },
  {
    path:"/admin/dashbord",
    element:<AdminDashbord/>,
  },
  {
    path:"/admin/dashbord/collection",
    element:<CollectionDashBord/>
  },
  {
    path: "/admin/dashbord/coupon",
    element: <CouponDashbord/>
  },
  {
    path: "/admin/dashbord/Order",
    element: <OrderDashbord/>
  },
  {
    path: "/admin/dashbord/user",
    element: <UsersDashbord/>
  },
  {
    path:"/admin/collection/:id",
    element:<div>Products of Collection id</div>
  },
  {
    path: "/admin/new/collection",
    element: <NewCollection/>
  }
  
])
export default App;
