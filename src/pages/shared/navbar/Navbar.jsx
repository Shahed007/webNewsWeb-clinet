import { Link, NavLink } from "react-router-dom";
import Container from "../../../components/container/Container";

const links = ["Add Articles", "All Articles", "Subscription", "My Articles"];
const Navbar = () => {
  return (
    <nav>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full  bg-white">
            <Container>
              <div className="navbar justify-between">
                <div className="flex-none lg:hidden">
                  <label
                    htmlFor="my-drawer-3"
                    aria-label="open sidebar"
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
                <Link
                  to="/"
                  className=" lg:px-0 lg:mx-0 text-transparent bg-gradient-to-tr from-primary_color/60 to-secondary_color bg-clip-text text-3xl font-bold"
                >
                  WebNewsWave
                </Link>
                <div className="flex-none hidden lg:block">
                  <ul className="flex items-center gap-6 text-base font-medium">
                    <li className="flex flex-col relative">
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive
                            ? "after:inline-block text-secondary_color relative after:h-1 after:w-full after:bg-secondary_color flex flex-col after:absolute after:-bottom-6"
                            : "after:inline-block relative scale-0 duration-300 hover:scale-100 after:h-1 after:w-full after:bg-secondary_color flex flex-col after:absolute after:-bottom-6"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    {links.map((link, idx) => (
                      <li key={idx} className="flex flex-col relative">
                        <NavLink
                          to={link}
                          className={({ isActive }) =>
                            isActive
                              ? "after:inline-block text-secondary_color relative after:h-1 after:w-full after:bg-secondary_color flex flex-col after:absolute after:-bottom-6"
                              : "after:inline-block hover:text-secondary_color duration-300 relative after:scale-0 after:duration-300 after:hover:scale-100 after:h-1 after:w-full after:bg-secondary_color flex flex-col after:absolute after:-bottom-6"
                          }
                        >
                          {link}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Link
                    className="px-8 shadow-md hover:shadow-inner active:scale-95 hover:bg-secondary_color/70 duration-150 py-3 bg-secondary_color text-lg font-semibold text-white rounded-lg"
                    to="/login"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
