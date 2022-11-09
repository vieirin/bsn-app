import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { Card } from "../Card/Card";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  gap: 16px;

  height: 100vh;
  padding: 0 68px;
`;

export type RosNode = { name: string; uri: string };

export const HomePage = ({ nodes }: { nodes: RosNode[] }) => {
  return (
    <Container>
      {nodes.map(({ name }, i) => (
        <Card key={`node-${name}-${i}`} name={name} />
      ))}
    </Container>
  );
};
