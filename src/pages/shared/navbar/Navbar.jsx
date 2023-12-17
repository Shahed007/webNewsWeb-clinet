import { Navbar, Button, IconButton, Drawer } from "@material-tailwind/react";
import Container from "../../../components/container/Container";
import Logo from "../../../components/logo/Logo";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { useAdmin, useNotification } from "../../../hooks/api";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import subscriptionChecker from "../../../utils/subscriptionCheker";
import { useEffect } from "react";
import { useState } from "react";
import DesktopLink from "./DesktopLink";
import SearchAndNotification from "./SearchAndNotification";
import MobileLinks from "./mobileLinks";
import NotificationPanel from "./NotificationPanel";
import SearchInput from "./SearchInput";

export function StickyNavbar() {
  const axiosSecure = useAxiosSecure();
  const { data, refetch } = useAdmin();
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const { user, logout } = useAuth();
  const [openSearch, setOpenSearch] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  subscriptionChecker(data, refetch, user);
  const { notification, isLoading } = useNotification();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  const handleLogout = () => {
    logout().then(() => {
      axiosSecure.get("/clearAccessToken").then((res) => {
        if (res.data.success) {
          toast.success("Logout successful");
        }
      });
    });
  };

  return (
    <>
      <Navbar className="sticky top-0 z-10 max-w-full py-0  h-16   px-0 ">
        <Container className="h-full">
          <div className="flex items-center justify-between h-full">
            <button
              onClick={openDrawer}
              className={`${
                open
                  ? " bg-secondary_color text-white shadow-md"
                  : "hover:bg-secondary_color hover:text-white active:scale-95"
              } xl:hidden flex h-10 w-10 rounded-full duration-200 justify-center items-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-text_primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <div className="xl:block hidden">
              <Logo></Logo>
            </div>
            <div className="xl:block hidden">
              <DesktopLink></DesktopLink>
            </div>

            <SearchAndNotification
              setOpenSearch={setOpenSearch}
              openSearch={openSearch}
              setOpenNotification={setOpenNotification}
              openNotification={openNotification}
              user={user}
              handleLogout={user}
            ></SearchAndNotification>
          </div>
        </Container>
      </Navbar>

      <Drawer open={open} onClose={closeDrawer} className="h-full ">
        <div className="mb-2 flex justify-between   p-4">
          <Logo />
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-7 w-7 text-secondary_color"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>

        <MobileLinks></MobileLinks>
      </Drawer>
      <SearchInput openSearch={openSearch}></SearchInput>
      <NotificationPanel
        isLoading={isLoading}
        notification={notification}
        openNotification={openNotification}
      ></NotificationPanel>
    </>
  );
}
