import { Input } from "@material-tailwind/react";
import PropTypes from "prop-types";

const SearchInput = ({ openSearch }) => {
  return (
    <div
      className={`absolute top-16 right-8 w-60   bg-transparent z-[100] ${
        openSearch ? "block" : "hidden"
      }`}
    >
      <div
        className="rotate-180 ml-32 "
        style={{
          borderWidth: "12px 8px 0 8px",
          width: "0px",
          height: "0px",
          borderStyle: "solid",
          borderColor: "#8888 transparent transparent transparent",
        }}
      ></div>
      <Input
        type="text"
        placeholder="Search by title"
        className="!border w-full  !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
        labelProps={{
          className: "hidden",
        }}
      />
    </div>
  );
};

SearchInput.propTypes = {
  openSearch: PropTypes.bool.isRequired,
};

export default SearchInput;
