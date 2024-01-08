import AllPublisher from "./allPubliser/AllPublisher";

import TrendingArticles from "./trendingArticles/TrendingArticles";

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
import LatestNews from "./latestNews/latestNews";
import LeftSiteBar from "./leftsiteBar/leftSiteBar";
import CenterAria from "./centerAria/CenterAria";
import RightSide from "./rightSide/RightSide";
import AdvartiseMent from "./advartiseMent/AdvartiseMent";
import Recomended from "./recomended/Recomended";
import NewsAlert from "./newsAllert/NewsAlert";
import UserReview from "./userReview/UserReview";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = useState("all");
  const [getPublisher, setPublisher] = useState("all");
  const [searchToggle, setSearchToggle] = useState(false);
  const [search, setSearch] = useState("");
  const [openCategory, setOpenCategory] = useState(false);

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
      
      <Statastics></Statastics>
      <Plan></Plan>
      <OfficeLocation></OfficeLocation>
      <TopArticleRighter></TopArticleRighter> */}
      <LatestNews></LatestNews>
      <main className="grid grid-cols-1 xl:grid-cols-12 mx-3 my-12 gap-3 relative">
        <div
          className={`p-2 w-[240px] bg-white absolute top-0  h-screen overflow-y-auto z-[200] duration-300 transition-all ${
            openCategory ? "left-0 duration-300" : "-left-full"
          }`}
        >
          <LeftSiteBar
            category={category}
            setCategory={setCategory}
            getPublisher={getPublisher}
            setPublisher={setPublisher}
            openCategory={openCategory}
            setOpenCategory={setOpenCategory}
          ></LeftSiteBar>
        </div>
        <aside className="xl:col-span-2 hidden xl:block h-screen bg-white border shadow-sm rounded p-2 overflow-y-auto">
          <LeftSiteBar
            category={category}
            setCategory={setCategory}
            getPublisher={getPublisher}
            setPublisher={setPublisher}
          ></LeftSiteBar>
        </aside>
        <section className="xl:col-span-7 col-span-12 xl:h-screen h-auto xl:overflow-y-auto bg-white shadow-sm border rounded-md ">
          <div className="p-3 border-b rounded-t-md shadow-sm flex justify-between items-center ">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setOpenCategory(!openCategory)}
                className="xl:hidden block"
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
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              <h3 className="text-lg font-semibold"> News</h3>
            </div>
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
        <aside className="xl:col-span-3 col-span-12 xl:h-screen flex flex-col justify-between xl:overflow-y-auto">
          <RightSide></RightSide>
        </aside>
      </main>
      <AllPublisher></AllPublisher>
      <TrendingArticles></TrendingArticles>
      <AdvartiseMent img="https://i.ibb.co/CtJb1Xw/49424515662-99d5493404-b-min.jpg"></AdvartiseMent>
      <Recomended></Recomended>
      <AdvartiseMent img="https://i.ibb.co/n07nqBV/social-media-food-banner-ad-design-template-221638-68.jpg"></AdvartiseMent>
      <NewsAlert></NewsAlert>
      <UserReview></UserReview>
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
