import { Link } from "react-router-dom";
import Container from "../../../components/container/Container";
import PropTypes from "prop-types";

const AdvartiseMent = ({ img }) => {
  return (
    <section className="mt-20">
      <Container>
        <div className="w-full border shadow-sm p-2 rounded-sm ">
          <div className="h-48 w-4/5 mx-auto rounded-sm relative">
            <Link to="#">
              <img
                className="h-full w-full rounded-sm object-cover"
                src={img}
                alt=""
              />
            </Link>
            <button className="absolute top-0 right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-secondary_color"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

AdvartiseMent.propTypes = {
  img: PropTypes.string,
};

export default AdvartiseMent;
