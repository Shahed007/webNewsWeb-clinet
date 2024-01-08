import Container from "../../components/container/Container";

const AboutUsTitle = ({ children }) => {
  return <h2 className="mb-5 text-lg sm:text-2xl font-semibold">{children}</h2>;
};

const AboutUsParagraph = ({ children }) => {
  return <div>{children}</div>;
};

const divStyle = "bg-white border shadow-sm p-2 rounded-sm";

const AboutUs = () => {
  return (
    <section className="my-20">
      <Container className="space-y-6">
        <div className={divStyle}>
          <AboutUsTitle>About WebNewsWave</AboutUsTitle>
          <AboutUsParagraph>
            Welcome to WebNewsWave, your dynamic hub for staying informed about
            the latest waves of news across the digital landscape. At
            WebNewsWave, we believe in the transformative power of information
            and its ability to shape the way we perceive and engage with the
            world. Our platform is designed to be your reliable source for
            breaking news, thought-provoking insights, and diverse perspectives.
          </AboutUsParagraph>
        </div>
        <div className={divStyle}>
          <AboutUsTitle>Our Mission</AboutUsTitle>
          <AboutUsParagraph>
            WebNewsWave is driven by a mission to deliver news that resonates
            with our audience, transcending geographical boundaries and cultural
            differences. Our team of dedicated journalists and storytellers is
            committed to providing you with a comprehensive and unbiased view of
            the ever-evolving global landscape. We aim to empower our readers
            with the knowledge they need to navigate the complexities of the
            modern world.
          </AboutUsParagraph>
        </div>
        <div className={divStyle}>
          <AboutUsTitle>The WebNewsWave Experience</AboutUsTitle>
          <AboutUsParagraph>
            <p className="mb-3">
              <span className="font-bold">Timely Updates:</span> Stay ahead of
              the curve with our real-time updates on the latest news and
              trends.
            </p>
            <p className="mb-3">
              <span className="font-bold">Diverse Perspectives:</span> Explore a
              mosaic of viewpoints from around the world, fostering a deeper
              understanding of global events.
            </p>
            <p className="mb-3">
              <span className="font-bold">Engaging Content:</span> From breaking
              stories to in-depth features, our content is crafted to captivate,
              inform, and inspire meaningful conversations.
            </p>
          </AboutUsParagraph>
        </div>
        <div className={divStyle}>
          <AboutUsTitle>Connect With Us</AboutUsTitle>
          <AboutUsParagraph>
            <p className="mb-3">
            Join us on this exciting journey of discovery and enlightenment. Follow WebNewsWave on social media, subscribe to our newsletter, and become a part of our vibrant community.


            </p>
            <p className="mb-3">
            Thank you for choosing WebNewsWave as your trusted source for news in the digital age!
            </p>
          </AboutUsParagraph>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
