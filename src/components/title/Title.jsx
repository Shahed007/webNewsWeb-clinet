import PropTypes from "prop-types";

const Title = ({ children, className }) => {
  return (
    <div
      className={`flex justify-center items-center font-popins ${className}`}
    >
      <h2 className="border-b-4 border-b-secondary_color text-xl sm:text-3xl font-semibold uppercase">
        {children}
      </h2>
    </div>
  );
};

export default Title;

Title.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
