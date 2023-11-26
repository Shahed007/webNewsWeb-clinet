import { useState } from "react";
import Container from "../../components/container/Container";
import Title from "../../components/title/Title";
import Select from "react-select";
import { Button, Input } from "@material-tailwind/react";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const AllArticles = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <section className="my-20">
      <Container>
        <Title>All Articles</Title>

        <div className="mt-12">
          <div className="p-6 shadow-sm border-2 border-gray-200 rounded-sm flex items-center lg:flex-row flex-col gap-6">
            <div className=" xl:basis-2/5 lg:basis-1/2 w-full flex sm:flex-row flex-col items-center gap-6">
              <div className="w-full">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  placeholder="Filter by tags"
                />
              </div>
              <div className="w-full">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  placeholder="Filter by publisher"
                />
              </div>
            </div>
            <div className="lg:flex-1 w-full sm:flex-row flex-col flex items-center gap-6">
              <div className="flex items-center w-full">
                <Input
                  type="text"
                  placeholder="Search by title"
                  className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                  labelProps={{
                    className: "hidden",
                  }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 -ml-10 relative z-50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <Button>Search</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AllArticles;
