import SiteTitle from "../../components/siteTitle/SiteTitle";
import Title from "../../components/title/Title";
import { Chart } from "react-google-charts";
import { useAllArticle } from "../../hooks/api";
import LoadingAnimation from "../../components/loadingAnimation/LoadingAnimation";

const Dashboard = () => {
  const { isLoading, error, allArticles } = useAllArticle();
  if (isLoading) return <LoadingAnimation />;

  const transformArticleForPieChart = () => {
    const articleData = allArticles.reduce((acc, article) => {
      const { publisher } = article;

      if (!acc[publisher]) {
        acc[publisher] = 1;
      } else {
        acc[publisher] += 1;
      }

      return acc;
    }, {});

    const publisherData = [["Publisher", "Number of Articles"]];

    for (const [publisher, count] of Object.entries(articleData)) {
      publisherData.push([publisher, count]);
    }

    return publisherData;
  };

  const pieChart = transformArticleForPieChart();

  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const options = {
    title: "Published Articles",
  };

  const dataOld = [
    ["Name", "Popularity"],
    ["Cesar", 250],
    ["Rachel", 4200],
    ["Patrick", 2900],
    ["Eric", 8200],
  ];

  const dataNew = [
    ["Name", "Popularity"],
    ["Cesar", 370],
    ["Rachel", 600],
    ["Patrick", 700],
    ["Eric", 1500],
  ];

  const diffdata = {
    old: dataOld,
    new: dataNew,
  };

  const options2 = {
    legend: { position: "top" },
  };

  const data2 = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ];
  const options3 = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
  };

  return (
    <>
      <SiteTitle page="Dashboard"></SiteTitle>
      <section className="p-6 shadow-sm border-2 border-gray-200 rounded-sm">
        <Title>Analytics</Title>
        <div className="mt-12">
          <Chart
            chartType="PieChart"
            data={pieChart}
            options={options}
            width={"100%"}
            height={"400px"}
          />
        </div>
        <div className="mt-6">
          <Chart
            chartType="BarChart"
            width="100%"
            height="400px"
            data={data}
            options={options2}
          />
        </div>
        <div className="mt-6">
          <Chart
            chartType="Line"
            width="100%"
            height="400px"
            data={data2}
            options={options}
          />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
