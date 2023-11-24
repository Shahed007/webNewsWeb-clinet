import Container from "../../../components/container/Container";

const Footer = () => {
  return (
    <footer className="bg-text_primary py-20  ">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-2">
            <h2 className="text-4xl text-white">Don&apos;t Miss Out</h2>
          </div>
          <div></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
