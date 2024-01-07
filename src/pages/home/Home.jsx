import AllPublisher from "./allPubliser/AllPublisher";
import HeroSection from "./heroSection/HeroSection";
import TrendingArticles from "./trendingArticles/TrendingArticles";
import Statastics from "./statastics/Statastics";
import Plan from "./plan/Plan";
import SiteTitle from "../../components/siteTitle/SiteTitle";
import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import OfficeLocation from "./officeLocation/OfficeLocation";
import TopArticleRighter from "./topArticleRitghter/TopArticleRighter";
import LatestNews from "./latestNews/latestNews";
import LeftSiteBar from "./leftsiteBar/leftSiteBar";
import CenterAria from "./centerAria/CenterAria";
import RightSide from "./rightSide/RightSide";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = useState("all");
  const [getPublisher, setPublisher] = useState("all");
  const [searchToggle, setSearchToggle] = useState(false);
  const [search, setSearch] = useState("");

  const handleOpen = () => setOpen(!open);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.searchText.value);
  };

  useEffect(() => {
    const openSubscription = setTimeout(() => setOpen(true), 10000);
    return () => clearTimeout(openSubscription);
  }, []);
  return (
    <>
      <SiteTitle page="Home"></SiteTitle>
      {/* <HeroSection></HeroSection>
      <TrendingArticles></TrendingArticles>
      <AllPublisher></AllPublisher>
      <Statastics></Statastics>
      <Plan></Plan>
      <OfficeLocation></OfficeLocation>
      <TopArticleRighter></TopArticleRighter> */}
      <LatestNews></LatestNews>
      <main className="grid grid-cols-1 lg:grid-cols-12 mx-3 my-12 gap-3">
        <aside className="col-span-2 h-screen bg-white border shadow-sm rounded p-2 overflow-y-auto">
          <LeftSiteBar
            category={category}
            setCategory={setCategory}
            getPublisher={getPublisher}
            setPublisher={setPublisher}
          ></LeftSiteBar>
        </aside>
        <section className="col-span-7 h-screen overflow-y-auto bg-white shadow-sm border rounded-md ">
          <div className="p-3 border-b rounded-t-md shadow-sm flex justify-between items-center ">
            <h3 className="text-lg font-semibold"> News</h3>
            <button
              className="h-10 w-10 flex justify-center items-center text-white shadow-sm border rounded-full bg-secondary_color"
              onClick={() => setSearchToggle(!searchToggle)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
          <div
            className={`overflow-hidden max-h-0 transition-all duration-700 shadow-sm border rounded-b-sm ${
              searchToggle ? "max-h-screen" : ""
            }`}
          >
            <form
              onSubmit={handleSearch}
              className="px-4 py-2 flex items-center gap-2"
            >
              <Input name="searchText" color="blue" label="Search Title" />
              <button className="p-2 bg-secondary_color text-white rounded-md font-medium duration-200 hover:bg-secondary_color/70 active:scale-95">
                Search
              </button>
            </form>
          </div>

          <CenterAria
            search={search}
            getTag={category}
            getPublisher={getPublisher}
          ></CenterAria>
        </section>
        <aside className="col-span-3 h-screen">
          <RightSide></RightSide>
        </aside>
      </main>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="text-center">🚀 Why Go Premium?</DialogHeader>
        <DialogBody>
          <p>
            🌐 Unlimited Access: Dive deep into a treasure trove of articles, no
            restrictions!
          </p>
          <p>
            🚫 Ad-Free Experience: Say goodbye to interruptions and enjoy
            seamless reading.
          </p>
          <p>
            🎁 Exclusive Content: Be the first to savor in-depth stories and
            behind-the-scenes insights.
          </p>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Link to="/subscription">
            <Button variant="gradient" color="green">
              <span>go to subscription page</span>
            </Button>
          </Link>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default Home;
