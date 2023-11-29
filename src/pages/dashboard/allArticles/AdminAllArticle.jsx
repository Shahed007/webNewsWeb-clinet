import AdminArticleCard from "../../../components/card/AdminArticleCard";
import PageError from "../../../components/error/PageError";
import LoadingAnimation from "../../../components/loadingAnimation/LoadingAnimation";
import Title from "../../../components/title/Title";
import { useAllArticle } from "../../../hooks/api";

const AdminAllArticle = () => {
  const { isLoading, error, allArticles, refetch } = useAllArticle();
  if (isLoading) return <LoadingAnimation />;
  if (error) return <PageError err={error} />;

  return (
    <section className="my-20 overflow-y-auto ">
      <Title>All Article</Title>

      <div className="mt-12 grid grid-cols-2  gap-6 ">
        {allArticles?.map((data) => (
          <AdminArticleCard
            key={data._id}
            data={data}
            refetch={refetch}
          ></AdminArticleCard>
        ))}
      </div>
    </section>
  );
};

export default AdminAllArticle;
