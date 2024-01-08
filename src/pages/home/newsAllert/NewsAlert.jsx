import { Input } from "@material-tailwind/react";
import Title from "../../../components/title/Title";

const NewsAlert = () => {
  return (
    <section className="my-20 max-w-xl mx-auto px-4">
      <Title className="mb-12">Get News Alert</Title>
      <div className="flex gap-1 items-center">
        <Input color="blue" label="Enter Email" />
        <button className="bg-secondary_color active:scale-95 px-3 py-2 text-white rounded-md">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default NewsAlert;
