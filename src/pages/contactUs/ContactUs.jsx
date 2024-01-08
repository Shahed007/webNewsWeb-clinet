import { Button, Input, Textarea } from "@material-tailwind/react";
import Title from "../../components/title/Title";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Message sended successfully");
  };
  return (
    <section className="my-20 max-w-3xl px-4 mx-auto  shadow-sm border rounded-sm">
      <form onSubmit={handleSubmit} className="relative z-50 p-4 space-y-6">
        <Title>Contact with us</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            required
            color="blue"
            label="Full Name"
            className="shadow-sm "
          />
          <Input
            required
            color="blue"
            label="Email"
            type="email"
            className="shadow-sm "
          />
        </div>
        <Input required color="blue" label="Subject" className="shadow-sm " />
        <Textarea required color="blue" label="Message" />
        <div className="flex justify-center items-center">
          <Button type="submit" size="lg" className="bg-secondary_color w-4/6">
            Send
          </Button>
        </div>
      </form>

      <div className="my-3 flex justify-between sm:flex-row flex-col gap-6 items-center">
        <div>
          <h3>Mobile:</h3>
          <p className="mb-3">+880 01783970327</p>
          <h3>Email:</h3>
          <p>mdshahed.contacts@gmail.com</p>
        </div>
        <div className="flex gap-5 items-center">
          <Link
            target="_blank"
            to="https://www.facebook.com/shahed.king.771"
            className="text-3xl "
          >
            <FaFacebook />
          </Link>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/md-shahed"
            className="text-3xl "
          >
            <FaLinkedin />
          </Link>
          <Link
            target="_blank"
            to="https://github.com/Shahed007"
            className="text-3xl "
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
