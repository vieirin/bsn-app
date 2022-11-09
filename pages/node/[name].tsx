import { useQuery } from "@tanstack/react-query";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

type TopicData = { name: string; type: string };

export default function Home({ name }: { name: string }) {
  const { isLoading, data } = useQuery<{
    publications: TopicData[];
    services: { name: string }[];
    subscriptions: TopicData[];
  }>({
    queryKey: ["node_info/" + name],
    queryFn: () =>
      fetch("http://localhost:5000/node/" + name).then((res) => res.json()),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data);
  return <div></div>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log(context.params);

  return {
    props: { name: context.params?.name }, // will be passed to the page component as props
  };
}
