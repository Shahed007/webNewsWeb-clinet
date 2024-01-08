import { NavLink } from "react-router-dom";

const DesktopLink = () => {
  return (
    <ul className="text-text_primary text-base flex items-center h-full gap-10 desktop-navbar ">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-t-[2px] h-full  border-b-[2px]  py-[6px] border-t-secondary_color border-b-secondary_color text-secondary_color "
              : "border-t-[2px] h-full  border-b-[2px]  py-5 border-t-transparent border-b-transparent hover:py-[6px] hover:border-t-secondary_color duration-200 hover:text-secondary_color hover:border-b-secondary_color "
          }
        >
          Home
        </NavLink>
      </li>

      <li className="">
        <NavLink
          to="/top-writer"
          className={({ isActive }) =>
            isActive
              ? "border-t-[2px] h-full  border-b-[2px]  py-[6px] border-t-secondary_color border-b-secondary_color text-secondary_color "
              : "border-t-[2px] h-full  border-b-[2px]  py-5 border-t-transparent border-b-transparent hover:py-[6px] hover:border-t-secondary_color duration-200 hover:text-secondary_color hover:border-b-secondary_color "
          }
        >
          Top Writer
        </NavLink>
      </li>
      <li>
        <NavLink
          to="subscription"
          className={({ isActive }) =>
            isActive
              ? "border-t-[2px] h-full  border-b-[2px]  py-[6px] border-t-secondary_color border-b-secondary_color text-secondary_color "
              : "border-t-[2px] h-full  border-b-[2px]  py-5 border-t-transparent border-b-transparent hover:py-[6px] hover:border-t-secondary_color duration-200 hover:text-secondary_color hover:border-b-secondary_color "
          }
        >
          Subscription
        </NavLink>
      </li>
      <li className="relative group">
        <NavLink
          to="/premium-Articles"
          className={({ isActive }) =>
            isActive
              ? "border-t-[2px] h-full   border-b-[2px]  py-[6px] border-t-secondary_color border-b-secondary_color text-secondary_color "
              : "border-t-[2px] h-full   border-b-[2px]  py-5 border-t-transparent border-b-transparent hover:py-[6px] hover:border-t-secondary_color duration-200 hover:text-secondary_color hover:border-b-secondary_color "
          }
        >
          <span>Premium News</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 inline-block ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </NavLink>
        <ul className="bg-white border shadow-sm w-[200px] absolute top-10 left-0 p-4 space-y-6 scale-0 group-hover:scale-100 duration-400 transition-all">
          <li>
            <NavLink
              to="/premium-Articles"
              className={({ isActive }) =>
                isActive
                  ? "border-t-[2px] h-full  border-b-[2px]  py-[6px] border-t-secondary_color border-b-secondary_color text-secondary_color "
                  : "border-t-[2px] h-full  border-b-[2px]  py-5 border-t-transparent border-b-transparent hover:py-[6px] hover:border-t-secondary_color duration-200 hover:text-secondary_color hover:border-b-secondary_color "
              }
            >
              Premium News
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-Articles"
              className={({ isActive }) =>
                isActive
                  ? "border-t-[2px] h-full   border-b-[2px]  py-[6px] border-t-secondary_color border-b-secondary_color text-secondary_color "
                  : "border-t-[2px] h-full  border-b-[2px]  py-5 border-t-transparent border-b-transparent hover:py-[6px] hover:border-t-secondary_color duration-200 hover:text-secondary_color hover:border-b-secondary_color "
              }
            >
              Add Article
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive
              ? "border-t-[2px] h-full   border-b-[2px]  py-[6px] border-t-secondary_color border-b-secondary_color text-secondary_color "
              : "border-t-[2px] h-full  border-b-[2px]  py-5 border-t-transparent border-b-transparent hover:py-[6px] hover:border-t-secondary_color duration-200 hover:text-secondary_color hover:border-b-secondary_color "
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive
              ? "border-t-[2px] h-full   border-b-[2px]  py-[6px] border-t-secondary_color border-b-secondary_color text-secondary_color "
              : "border-t-[2px] h-full  border-b-[2px]  py-5 border-t-transparent border-b-transparent hover:py-[6px] hover:border-t-secondary_color duration-200 hover:text-secondary_color hover:border-b-secondary_color "
          }
        >
          Contact Us
        </NavLink>
      </li>
    </ul>
  );
};

export default DesktopLink;
