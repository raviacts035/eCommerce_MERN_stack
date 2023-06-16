import './App.css';
import { Outlet, createBrowserRouter} from "react-router-dom";
import Login from './components/login';
import AdminSignin from './components/adminSignin';
import Signup from './components/signup.jsx';
import NavBar from './components/navbar';
import Home from "./components/home";
import AdminDashbord from "./components/AdminDashbord"; 


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
  }
  
])
export default App;
