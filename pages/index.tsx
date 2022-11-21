import { useQuery } from "@tanstack/react-query";
import { Card } from "../components/Card";
import Container from "../components/Container";

type RosNode = { name: string; uri: string };

export default function Home() {
  const { isLoading, data } = useQuery<{ nodes: RosNode[] } | undefined>({
    queryKey: ["nodesList"],
    queryFn: () =>
      fetch("http://localhost:5000/list_nodes").then((res) => res.json()),
  });

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      {data.nodes.map(({ name }, i) => (
        <Card key={`node-${name}-${i}`} name={name} />
      ))}
    </Container>
  );
}
