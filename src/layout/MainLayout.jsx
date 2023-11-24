import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="font-inter ">
      <header className="shadow-md relative z-[70]">
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default MainLayout;
