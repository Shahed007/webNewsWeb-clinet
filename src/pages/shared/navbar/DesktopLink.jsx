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
      <li>
        <NavLink
          to="/video"
          className={({ isActive }) =>
            isActive
              ? "border-t-[2px] h-full   border-b-[2px]  py-[6px] border-t-secondary_color border-b-secondary_color text-secondary_color "
              : "border-t-[2px] h-full  border-b-[2px]  py-5 border-t-transparent border-b-transparent hover:py-[6px] hover:border-t-secondary_color duration-200 hover:text-secondary_color hover:border-b-secondary_color "
          }
        >
          Video
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
    </ul>
  );
};

export default DesktopLink;
