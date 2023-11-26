import Title from "../../../components/title/Title";
import allUser from "../../../assets/icon/teamwork.png";
import normalUser from "../../../assets/icon/group.png";
import premiumUser from "../../../assets/icon/premium.png";
import CountUp from "react-countup";

const Statastics = () => {
  return (
    <section className="mt-20">
      <Title>Statistic</Title>
      <div className="mt-12  max-w-5xl mx-auto xl:px-0 px-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center justify-center p-4 ring-1 ring-gray-500 rounded ">
            <img className="h-24 w-24" src={allUser} alt="all User" />
            <h2 className="font-popins font-semibold text-xl text-text_primary mt-4">
              ALL USER
            </h2>
            <CountUp
              start={0}
              end={100}
              duration={2.75}
              className="mt-5 font-popins text-xl font-semibold text-secondary_color"
            ></CountUp>
          </div>
          <div className="flex flex-col items-center justify-center p-4 ring-1 ring-gray-500 rounded ">
            <img className="h-24 w-24" src={normalUser} alt="all User" />
            <h2 className="font-popins font-semibold text-xl text-text_primary mt-4">
              NORMAL USER
            </h2>
            <CountUp
              start={0}
              end={90}
              duration={2.75}
              className="mt-5 font-popins text-xl font-semibold text-secondary_color"
            ></CountUp>
          </div>
          <div className="flex flex-col items-center justify-center p-4 ring-1 ring-gray-500 rounded ">
            <img className="h-24 w-24" src={premiumUser} alt="all User" />
            <h2 className="font-popins font-semibold text-xl text-text_primary mt-4">
              PREMIUM USER
            </h2>
            <CountUp
              start={0}
              end={10}
              duration={2.75}
              className="mt-5 font-popins text-xl font-semibold text-secondary_color"
            ></CountUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statastics;
