import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="max-w-7xl mx-auto lg:px-5 px-4">{children}</div>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.node,
};
