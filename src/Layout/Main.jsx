import { Outlet } from "react-router-dom";
import Footer from "../pages/Shered/Footer/Footer";
import NavBar from "../pages/Shered/NavBar/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;