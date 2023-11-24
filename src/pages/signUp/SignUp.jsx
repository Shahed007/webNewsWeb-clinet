import { Link } from "react-router-dom";
import authentication from "../../assets/authenticaton/authentication.svg";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
  Checkbox,
} from "@material-tailwind/react";
import { useCountries } from "use-react-countries";
import { useState } from "react";

const SignUp = () => {
  const { countries } = useCountries();
  const [country, setCountry] = useState(0);
  const { name, flags, countryCallingCode } = countries[country];
  return (
    <section className="w-full xl:h-screen px-4 sm:px-7 lg:px-0  flex justify-center items-center">
      <div className="flex my-10 max-w-5xl  w-full mx-auto rounded-lg  shadow-md border border-gray-400 ">
        <div className="lg:flex-1 w-full p-6">
          <div className="flex flex-col sm:flex-row sm:gap-0 gap-6 sm:justify-between items-center mb-6">
            <p className="text-sm font-popins text-text_primary ">
              Have an account?.{" "}
              <Link
                to="/login"
                className="underline hover:text-secondary_color"
              >
                Login
              </Link>
            </p>
            <h1 className="text-3xl font-bold text-text">Sign Up</h1>
          </div>
          <form className="mt-5">
            <div className="flex sm:flex-row flex-col items-center gap-6">
              <Input type="text" color="#03045e" label="Name" required />
              <Input type="email" color="#03045e" label="Email" required />
            </div>
            <div className="relative flex w-full mt-6">
              <Menu placement="bottom-start">
                <MenuHandler>
                  <Button
                    ripple={false}
                    variant="text"
                    color="blue-gray"
                    className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                  >
                    <img
                      src={flags.svg}
                      alt={name}
                      className="h-4 w-4 rounded-full object-cover"
                    />
                    {countryCallingCode}
                  </Button>
                </MenuHandler>
                <MenuList className="max-h-[20rem] max-w-[18rem]">
                  {countries.map(
                    ({ name, flags, countryCallingCode }, index) => {
                      return (
                        <MenuItem
                          key={name}
                          value={name}
                          className="flex items-center gap-2"
                          onClick={() => setCountry(index)}
                        >
                          <img
                            src={flags.svg}
                            alt={name}
                            className="h-5 w-5 rounded-full object-cover"
                          />
                          {name}{" "}
                          <span className="ml-auto">{countryCallingCode}</span>
                        </MenuItem>
                      );
                    }
                  )}
                </MenuList>
              </Menu>
              <Input
                required
                type="#03045e"
                placeholder="Mobile Number"
                className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900 w-full block"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                containerProps={{
                  className: "min-w-0",
                }}
              />
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
                Use at least 6 characters, one uppercase, one lowercase, number
                and one spacial character.
              </Typography>
            </div>
            <div>
              <Checkbox
                label={
                  <Typography
                    color="blue-gray"
                    className="flex font-medium text-[12px] sm:text-base"
                  >
                    I agree with the&nbsp;
                    <span className="text-secondary_color">
                      terms and conditions
                    </span>
                    .
                  </Typography>
                }
              />
            </div>
            <Button
              variant="filled"
              className="w-full bg-primary_color mt-5"
              type="submit"
            >
              Sign Up
            </Button>
          </form>
          <div className="flex justify-center items-center">
            <h4 className="text-center mt-6 text-sm flex items-center gap-1 after:w-[50px] before:w-[50px]  after:block before:block sm:after:w-[160px] sm:before:w-[160px] after:h-[1px] after:bg-gray-500 before:h-[1px] before:bg-gray-500">
              Or sign up with
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
        <div className="lg:flex-1 hidden lg:block">
          <img src={authentication} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
