import PropTypes from "prop-types";
import { useAdmin, useNotification } from "../../../hooks/api";
import { Avatar, Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const SearchAndNotification = ({
  setOpenNotification,
  openNotification,
  user,
  handleLogout,
}) => {
  const { data } = useAdmin();
  const [userMenu, setUserMenu] = useState(false);
  const { notification } = useNotification();

  return (
    <>
      <div className="flex items-center text-text_primary gap-6">
        <div className="">
          <button
            className={`relative cursor-pointer h-10 w-10 active:scale-95 flex justify-center items-center rounded-full duration-200 hover:bg-secondary_color hover:text-white  hover:shadow-md ${
              openNotification ? "bg-secondary_color  shadow-md text-white" : ""
            }`}
            onClick={() => setOpenNotification(!openNotification)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 drop-shadow-md"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
              />
            </svg>
            <span className="flex absolute h-3 w-3 rounded-full top-[2px] right-0 bg-primary_color  justify-center items-center">
              <small className="text-white text-[10px]">
                {notification?.length}
              </small>
            </span>
          </button>
        </div>
        {user ? (
          <>
            <Avatar
              onClick={() => setUserMenu(!userMenu)}
              className="drop-shadow-md relative cursor-pointer"
              src={user?.photoURL}
              alt="avatar"
              size="md"
            />
            <div
              className={`absolute top-16 w-64 right-0 duration-300 transition-all ${
                userMenu ? "scale-100" : "scale-0"
              } bg-white shadow-sm rounded-b-md border`}
            >
              <div className="p-3">
                <h4 className="text-center font-medium">
                  {user?.displayName} (
                  <span className="text-sm">
                    {data?.roll !== "admin" ? "guest" : data.roll}
                  </span>
                  )
                </h4>
                <div className="py-4 text-center ">
                  {data?.roll === "admin" ? (
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        isActive
                          ? "border-t-[2px] h-full  border-b-[2px]  py-[6px] border-t-secondary_color border-b-secondary_color text-secondary_color "
                          : "border-t-[2px] h-full  border-b-[2px]  py-5 border-t-transparent border-b-transparent hover:py-[6px] hover:border-t-secondary_color duration-200 hover:text-secondary_color hover:border-b-secondary_color "
                      }
                    >
                      Dashboard
                    </NavLink>
                  ) : (
                    <NavLink
                      to="/my-Articles"
                      className={({ isActive }) =>
                        isActive
                          ? "border-t-[2px] h-full  border-b-[2px]  py-[6px] border-t-secondary_color border-b-secondary_color text-secondary_color "
                          : "border-t-[2px] h-full  border-b-[2px]  py-5 border-t-transparent border-b-transparent hover:py-[6px] hover:border-t-secondary_color duration-200 hover:text-secondary_color hover:border-b-secondary_color "
                      }
                    >
                      My Articles
                    </NavLink>
                  )}
                </div>
               
                <div className="flex ">
                  <Button
                    onClick={handleLogout}
                    size="lg"
                    className="w-full bg-secondary_color"
                  >
                    Logout
                  </Button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "border-t-[2px] h-full  border-b-[2px]  py-[6px] border-t-secondary_color border-b-secondary_color text-secondary_color "
                : "border-t-[2px] h-full  border-b-[2px]  py-5 border-t-transparent border-b-transparent hover:py-[6px] hover:border-t-secondary_color duration-200 hover:text-secondary_color hover:border-b-secondary_color "
            }
          >
            Login
          </NavLink>
        )}
      </div>
    </>
  );
};

SearchAndNotification.propTypes = {
  setOpenNotification: PropTypes.func.isRequired,
  openNotification: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default SearchAndNotification;
