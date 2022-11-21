import { useQuery } from "@tanstack/react-query";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import styled from "styled-components";
import NodeInfo from "../../components/NodeInfo";

export type TopicData = { name: string; type: string };

const PageContainer = styled.div`
  padding: 16px;
  display: flex;
  min-height: 100vh;
`;

const InfoSelectors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default function Topic({ name }: { name: string }) {
  const { isLoading, data } = useQuery<{
    publication: TopicData[];
    services: { name: string; type: undefined }[];
    subscription: TopicData[];
  }>({
    queryKey: ["node_info/" + name],
    queryFn: () =>
      fetch("http://localhost:5000/node/" + name).then((res) => res.json()),
  });

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }
  console.log(data);
  return (
    <PageContainer>
      <InfoSelectors>
        <NodeInfo type="publication" info={data.publication} />
        <NodeInfo type="service" info={data.services} />
        <NodeInfo type="subscription" info={data.subscription} />
      </InfoSelectors>
    </PageContainer>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: { name: context.params?.name }, // will be passed to the page component as props
  };
}
