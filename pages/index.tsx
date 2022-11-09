import { useQuery } from "@tanstack/react-query";
import { HomePage, RosNode } from "../components/Homepage/Homepage";

export default function Home() {
  const { isLoading, data } = useQuery<{ nodes: RosNode[] } | undefined>({
    queryKey: ["nodesList"],
    queryFn: () =>
      fetch("http://localhost:5000/list_nodes").then((res) => res.json()),
  });

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return <HomePage nodes={data.nodes} />;
}
