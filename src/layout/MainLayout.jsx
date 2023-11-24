import { Outlet } from "react-router-dom";

import Footer from "../pages/shared/footer/Footer";
import { StickyNavbar } from "../pages/shared/navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="font-inter h-full overflow-x-hidden">
      <header className="shadow-md h-full  z-[70] ">
        <StickyNavbar></StickyNavbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
