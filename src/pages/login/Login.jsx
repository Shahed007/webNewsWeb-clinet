import { Link } from "react-router-dom";
import authentication from "../../assets/authenticaton/authentication.svg";
import { Input, Button, Typography } from "@material-tailwind/react";

const Login = () => {
  return (
    <section className="w-full xl:h-screen px-4 sm:px-7 lg:px-0  flex justify-center items-center">
      <div className="flex items-center my-10 lg:max-w-5xl  w-full mx-auto rounded-lg  shadow-md border border-gray-400 ">
        <div className="lg:flex-1 w-full p-6">
          <div className="flex flex-col sm:flex-row sm:gap-0 gap-6 sm:justify-between items-center mb-6">
            <p className="text-sm font-popins text-text_primary ">
              New to WebNewsWave?.{" "}
              <Link
                to="/signUp"
                className="underline hover:text-secondary_color"
              >
                Sign Up
              </Link>
            </p>
            <h1 className="text-3xl font-bold text-text">Login</h1>
          </div>
          <form className="mt-5">
            <div className="">
              <Input type="email" color="#03045e" label="Email" required />
            </div>
            <div className="mt-6">
              <Input
                type="password"
                color="#03045e"
                label="Password"
                required
              />
              <Typography
                variant="small"
                color="gray"
                className="mt-2 flex items-center gap-1 font-normal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-mt-px h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </Typography>
            </div>
            <Button
              variant="filled"
              className="w-full bg-primary_color mt-5"
              type="submit"
            >
              Login
            </Button>
          </form>
          <div className="flex justify-center items-center">
            <h4 className="text-center mt-6 text-sm flex items-center gap-1 after:w-[50px] before:w-[50px]  after:block before:block sm:after:w-[160px] sm:before:w-[160px] after:h-[1px] after:bg-gray-500 before:h-[1px] before:bg-gray-500">
              Or login with
            </h4>
          </div>
          <div className="flex flex-col items-center gap-4 mt-5">
            <Button
              size="lg"
              variant="outlined"
              color="blue-gray"
              className="flex items-center gap-3 sm:text-base text-sm"
            >
              <img
                src="https://docs.material-tailwind.com/icons/google.svg"
                alt="metamask"
                className="h-6 w-6"
              />
              <span className="sm:inline-block hidden">
                Continue with Google
              </span>
            </Button>
          </div>
        </div>
        <div className="md:flex-1 hidden md:block">
          <img src={authentication} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Login;
