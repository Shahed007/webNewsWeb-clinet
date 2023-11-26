import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import Container from "../../components/container/Container";
import Title from "../../components/title/Title";
import Select from "react-select";
import { useState } from "react";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const AddArticles = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <section className="my-20 ">
      <Container>
        <Title>Add articles</Title>

        <div className="mt-12 shadow-sm border-2 border-gray-200 p-6">
          <form>
            <Input name="title" size="lg" label="Title" />
            <div className="flex sm:flex-row flex-col gap-6 items-center mt-6">
              <div className="w-full">
                <label className="mt-1">Select tag</label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                />
              </div>
              <div className="w-full">
                <label className="mt-1">Select publisher</label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                />
              </div>
            </div>
            <div className="mt-6">
              <input
                className="relative mb-1 m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                type="file"
                id="imageUpload"
                name="image"
                required
              />
              <Typography variant="small" className="text-gray-600 ">
                upload article image
              </Typography>
            </div>
            <div className="my-6">
              <Textarea size="lg" label="Textarea Large" />
            </div>
            <div>
              <Button className="bg-primary_color/80" size="lg">
                Submit Articles
              </Button>
              <p className="text-sm mt-4">
                Note: if admin approve your articles than this articles showed
                on the all articles page
              </p>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default AddArticles;
