import Container from "../../../components/container/Container";

const AdvartiseMent = () => {
  return (
    <section className="mt-20">
      <Container>
        <div className="w-full border shadow-sm p-2 rounded-sm ">
          <div className="h-48 w-4/5 mx-auto rounded-sm relative">
            <img
              className="h-full w-full rounded-sm"
              src="https://i.ibb.co/CtJb1Xw/49424515662-99d5493404-b-min.jpg"
              alt=""
            />
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

export default AdvartiseMent;
