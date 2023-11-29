import SiteTitle from "../../components/siteTitle/SiteTitle";
import Title from "../../components/title/Title";
import { Chart } from "react-google-charts";
import { useAllArticle } from "../../hooks/api";
import LoadingAnimation from "../../components/loadingAnimation/LoadingAnimation";

const Dashboard = () => {
  const { isLoading, error, allArticles } = useAllArticle();
  if (isLoading) return <LoadingAnimation />;

  const transformArticleForPublisherPieChart = () => {
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

  const pieChart = transformArticleForPublisherPieChart();

  const transformDataForHistogram = () => {
    const histogramData = [["Publisher", "Premium Articles"]];

    const premiumCounts = allArticles.reduce((acc, article) => {
      const { publisher, premium } = article;

      if (premium) {
        acc[publisher] = (acc[publisher] || 0) + 1;
      }

      return acc;
    }, {});

    for (const [publisher, count] of Object.entries(premiumCounts)) {
      histogramData.push([publisher, count]);
    }

    return histogramData;
  };

  const histrogram = transformDataForHistogram();

  const viewers = [
    ["Title", "Viewers"],
    ...allArticles.map((item) => [item.title, item.viewers]),
  ];

  return (
    <>
      <SiteTitle page="Dashboard"></SiteTitle>
      <section className="p-6 shadow-sm border-2 border-gray-200 rounded-sm">
        <Title>Analytics</Title>
        <div className="mt-12">
          <Chart
            chartType="PieChart"
            data={pieChart}
            width={"100%"}
            height={"400px"}
          />
        </div>
        <div className="mt-6">
          <Chart
            chartType="BarChart"
            width="100%"
            height="400px"
            data={viewers}
          />
        </div>
        <div className="mt-6">
          <Chart
            chartType="Histogram"
            width="100%"
            height="400px"
            data={histrogram}
          />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
