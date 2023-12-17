import { NavLink } from "react-router-dom";

const MobileLinks = () => {
  return (
    <ul className="text-text_primary text-lg flex flex-col  gap-4 px-5">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " w-full block  bg-secondary_color   p-2 rounded-md text-white"
              : " w-full block p-2"
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
              ? " w-full block  bg-secondary_color   p-2 rounded-md text-white"
              : " w-full block p-2"
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
              ? " w-full block  bg-secondary_color   p-2 rounded-md text-white"
              : " w-full block p-2"
          }
        >
          Top Writer
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/subscription"
          className={({ isActive }) =>
            isActive
              ? " w-full block  bg-secondary_color   p-2 rounded-md text-white"
              : " w-full block p-2"
          }
        >
          Subscription
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/premium-article"
          className={({ isActive }) =>
            isActive
              ? " w-full block  bg-secondary_color p-2 rounded-md text-white"
              : " w-full block p-2"
          }
        >
          Premium News
        </NavLink>
      </li>
    </ul>
  );
};

export default MobileLinks;
