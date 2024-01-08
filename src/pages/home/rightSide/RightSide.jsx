import Tottenham_Hotspur from "../../../assets/logo/Tottenham-Hotspur.png";
import Real_Madrid from "../../../assets/logo/Real-Madrid.png";

const RightSide = () => {
  return (
    <>
      <div className="bg-white rounded-md border shadow-sm p-3  mb-6">
        <h3 className="text-lg font-semibold p-2 border-b shadow-sm">
          Sports News
        </h3>
        <div className="mt-4">
          <div className="flex gap-4 items-center">
            <img
              className="h-[60px] w-[60px] object-cover"
              src={Tottenham_Hotspur}
              alt="Totenham hotsupr"
            />
            <h4 className="text-base font-medium">Tottenham Hotspur</h4>
          </div>
          <div className="flex gap-4 items-center  my-3">
            <p className="text-secondary_color font-semibold text-base">VS</p>
            <p className="text-sm">Full Time</p>
          </div>
          <div className="flex gap-4 items-center">
            <img
              className=" w-[60px] object-cover"
              src={Real_Madrid}
              alt="Totenham hotsupr"
            />
            <h4 className="text-base font-medium">Real Madrid</h4>
          </div>
          <p className="text-sm mt-3">
            Get statistic for the Real madrid vs. Tottenham Hotspur 2024 Audi
            Cup, Semifinals football match now.
          </p>
        </div>
      </div>
      <div className="bg-white shadow-sm border rounded-md p-3 ">
        <h3 className="text-lg font-semibold p-2 border rounded-md shadow-sm">
          Political News
        </h3>
        <div className="flex gap-3 mt-4 items-center">
          <img
            className="h-20 rounded-md w-20 object-cover drop-shadow-md"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/220px-President_Barack_Obama.jpg"
            alt=""
          />
          <h2>Obama looms over divided by the Demoscratic primary</h2>
        </div>
        <div className="flex gap-3 mt-4 items-center">
          <img
            className="h-20 rounded-md w-20 object-cover drop-shadow-md"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/220px-Donald_Trump_official_portrait.jpg"
            alt=""
          />
          <h2>Trump 'well aware' of Boris Johnoson' to not interfere</h2>
        </div>
      </div>
    </>
  );
};

export default RightSide;
