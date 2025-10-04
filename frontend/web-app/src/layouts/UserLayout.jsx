import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const UserLayout = ()=>{
    return (
        <>
            <Navbar><p>I am Ibrahim</p></Navbar>
            <Outlet/>
        </>
    );
};
export default UserLayout;