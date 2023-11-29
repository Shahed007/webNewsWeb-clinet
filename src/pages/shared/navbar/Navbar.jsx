import React from "react";
import {
  Navbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Avatar,
} from "@material-tailwind/react";
import Container from "../../../components/container/Container";
import Logo from "../../../components/logo/Logo";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { useAdmin } from "../../../hooks/api";
import moment from "moment";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

export function StickyNavbar() {
  const axios = useAxiosPublic();
  const { data, refetch } = useAdmin();
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const { user, logout } = useAuth();

  if (data && user) {
    const lastLoginTimeString = moment(
      parseInt(user?.metadata.lastLoginAt)
    ).format("YYYY-MM-DD HH:mm:ss");

  
    const subscriptionTimeString = data.time;
  

    const lastLoginTime = moment(lastLoginTimeString);
    const subscriptionTime = moment(
      subscriptionTimeString,
      "YYYY-MM-DD HH:mm:ss"
    );

    if (!lastLoginTime.isBefore(subscriptionTime)) {
      const update = async () => {
        const res = await axios.patch(`/user/${user?.email}`, {
          premiumTaken: "no",
        });
        if (res.data.success) {
          refetch();
        }
      };
      update();
    } 
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  const navLinksDesktop = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "after:inline-block after:absolute after:-bottom-[29px] duration-300 text-secondary_color relative after:bg-secondary_color after:h-1 after:w-full flex flex-col"
              : "after:inline-block after:absolute after:scale-0 after:duration-300 hover:after:scale-100 after:-bottom-[29px] duration-300 hover:text-secondary_color relative after:bg-secondary_color after:h-1 after:w-full flex flex-col"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-Articles"
          className={({ isActive }) =>
            isActive
              ? "after:inline-block after:absolute after:-bottom-[29px] duration-300 text-secondary_color relative after:bg-secondary_color after:h-1 after:w-full flex flex-col"
              : "after:inline-block after:absolute after:scale-0 after:duration-300 hover:after:scale-100 after:-bottom-[29px] duration-300 hover:text-secondary_color relative after:bg-secondary_color after:h-1 after:w-full flex flex-col"
          }
        >
          Add Articles
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-Articles"
          className={({ isActive }) =>
            isActive
              ? "after:inline-block after:absolute after:-bottom-[29px] duration-300 text-secondary_color relative after:bg-secondary_color after:h-1 after:w-full flex flex-col"
              : "after:inline-block after:absolute after:scale-0 after:duration-300 hover:after:scale-100 after:-bottom-[29px] duration-300 hover:text-secondary_color relative after:bg-secondary_color after:h-1 after:w-full flex flex-col"
          }
        >
          All Articles
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/subscription"
          className={({ isActive }) =>
            isActive
              ? "after:inline-block after:absolute after:-bottom-[29px] duration-300 text-secondary_color relative after:bg-secondary_color after:h-1 after:w-full flex flex-col"
              : "after:inline-block after:absolute after:scale-0 after:duration-300 hover:after:scale-100 after:-bottom-[29px] duration-300 hover:text-secondary_color relative after:bg-secondary_color after:h-1 after:w-full flex flex-col"
          }
        >
          Subscription
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/my-Articles"
          className={({ isActive }) =>
            isActive
              ? "after:inline-block after:absolute after:-bottom-[29px] duration-300 text-secondary_color relative after:bg-secondary_color after:h-1 after:w-full flex flex-col"
              : "after:inline-block after:absolute after:scale-0 after:duration-300 hover:after:scale-100 after:-bottom-[29px] duration-300 hover:text-secondary_color relative after:bg-secondary_color after:h-1 after:w-full flex flex-col"
          }
        >
          My Articles
        </NavLink>
      </li>
      <li className={`${data?.roll === "admin" ? "inline-block" : "hidden"}`}>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "after:inline-block after:absolute after:-bottom-[29px] duration-300 text-secondary_color relative after:bg-secondary_color after:h-1 after:w-full flex flex-col"
              : "after:inline-block after:absolute after:scale-0 after:duration-300 hover:after:scale-100 after:-bottom-[29px] duration-300 hover:text-secondary_color relative after:bg-secondary_color after:h-1 after:w-full flex flex-col"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li
        className={`${
          data?.premiumTaken === "yeas" ? "inline-block" : "hidden"
        }`}
      >
        <NavLink
          to="/premium-Articles"
          className={({ isActive }) =>
            isActive
              ? "after:inline-block after:absolute after:-bottom-[29px] duration-300 text-secondary_color relative after:bg-secondary_color after:h-1 after:w-full flex flex-col"
              : "after:inline-block after:absolute after:scale-0 after:duration-300 hover:after:scale-100 after:-bottom-[29px] duration-300 hover:text-secondary_color relative after:bg-secondary_color after:h-1 after:w-full flex flex-col"
          }
        >
          Premium Article
        </NavLink>
      </li>
    </>
  );
  const navLinksMobiles = (
    <>
      <ListItem className="w-full h-full p-0 ">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-base font-medium bg-secondary_color block w-full h-full p-2 rounded-lg text-white shadow-md"
              : "text-base font-medium duration-150 hover:bg-secondary_color block w-full h-full p-2 rounded-lg hover:text-white hover:shadow-md"
          }
          to="/"
        >
          Home
        </NavLink>
      </ListItem>
      <ListItem className="w-full h-full p-0 ">
        <NavLink
          to="/add-Articles"
          className={({ isActive }) =>
            isActive
              ? "text-base font-medium bg-secondary_color block w-full h-full p-2 rounded-lg text-white shadow-md"
              : "text-base font-medium duration-150 hover:bg-secondary_color block w-full h-full p-2 rounded-lg hover:text-white hover:shadow-md"
          }
        >
          Add Articles
        </NavLink>
      </ListItem>
      <ListItem className="w-full h-full p-0 ">
        <NavLink
          to="/all-Articles"
          className={({ isActive }) =>
            isActive
              ? "text-base font-medium bg-secondary_color block w-full h-full p-2 rounded-lg text-white shadow-md"
              : "text-base font-medium duration-150 hover:bg-secondary_color block w-full h-full p-2 rounded-lg hover:text-white hover:shadow-md"
          }
        >
          All Articles
        </NavLink>
      </ListItem>
      <ListItem className="w-full h-full p-0 ">
        <NavLink
          to="/my-Articles"
          className={({ isActive }) =>
            isActive
              ? "text-base font-medium bg-secondary_color block w-full h-full p-2 rounded-lg text-white shadow-md"
              : "text-base font-medium duration-150 hover:bg-secondary_color block w-full h-full p-2 rounded-lg hover:text-white hover:shadow-md"
          }
        >
          My Articles
        </NavLink>
      </ListItem>
      <ListItem
        className={`${
          data?.roll === "admin" ? "inline-block w-full h-full" : "hidden"
        }`}
      >
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "after:inline-block after:absolute after:-bottom-[29px] duration-300 text-secondary_color relative after:bg-secondary_color after:h-1 after:w-full flex flex-col"
              : "after:inline-block after:absolute after:scale-0 after:duration-300 hover:after:scale-100 after:-bottom-[29px] duration-300 hover:text-secondary_color relative after:bg-secondary_color after:h-1 after:w-full flex flex-col"
          }
        >
          Dashboard
        </NavLink>
      </ListItem>
    </>
  );

  return (
    <>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 ">
        <Container>
          <div className="flex items-center justify-between text-blue-gray-900">
            <div className="mr-4 cursor-pointer py-1.5 font-medium">
              <div className="hidden lg:block">
                <Logo></Logo>
              </div>

              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={openDrawer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </IconButton>
            </div>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">
                <ul className="flex items-center gap-6">{navLinksDesktop}</ul>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-x-1">
                {user ? (
                  <div className="flex gap-3">
                    <Link to="/profile">
                      <Avatar
                        src={user?.photoURL}
                        alt={`image of ${user?.displayName}`}
                        size="md"
                        className="active:scale-95"
                      />
                    </Link>
                    <Button
                      onClick={() =>
                        logout().then(() => toast.success("Logout successful"))
                      }
                      size="sm"
                      className="bg-secondary_color"
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Link to="/login">
                    <Button
                      variant="filled"
                      size="lg"
                      className="inline-block bg-secondary_color"
                    >
                      Log In
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Navbar>

      <Drawer open={open} onClose={closeDrawer} className="h-full">
        <div className="mb-2 flex items-center justify-between p-4">
          <Logo></Logo>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List className="w-full gap-0">{navLinksMobiles}</List>
      </Drawer>
    </>
  );
}
