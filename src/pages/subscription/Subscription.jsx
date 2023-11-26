import { Typewriter } from "react-simple-typewriter";
import subscriptionBanner from "../../assets/banner/subscription.svg";
import Container from "../../components/container/Container";
import Title from "../../components/title/Title";
import Select from "react-select";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
const options = [
  { value: 1, label: "1 minute" },
  { value: 5, label: "5 days" },
  { value: 10, label: "10 days" },
];
const Subscription = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (selectedOption !== null) {
      const { value } = selectedOption;
      const total = value * 10;
      setPrice(total);
    }
  }, [selectedOption]);
  console.log(price);

  return (
    <section>
      <div className="lg:h-screen  bg-secondary_color/10">
        <Container className="h-full">
          <div className="h-full flex items-center lg:flex-row flex-col">
            <div className="lg:flex-1 w-full lg:pt-0 pt-20  flex justify-center items-center h-full">
              <h1 className="font-popins font-bold text-2xl sm:text-4xl text-text_primary w-4/5 h-20 lg:text-start text-center">
                <Typewriter
                  loop={true}
                  words={["Subscribe to access our premium content"]}
                ></Typewriter>
              </h1>
            </div>
            <div className="w-full lg:flex-1 ">
              <img src={subscriptionBanner} alt="" />
            </div>
          </div>
        </Container>
      </div>
      <div className="my-20 max-w-xl mx-5 p-6 lg:mx-auto bg-white shadow-sm border-2 border-gray-200">
        <Title>Subscribe</Title>
        <div className="mt-12">
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder="Select subscription days"
          />

          <p className="my-6 flex gap-1">
            <span className="text-text_primary font-semibold text-lg">
              PRICE:
            </span>
            <span className="font-medium">${price}</span>
          </p>
          <Button variant="lg">Subscription</Button>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
