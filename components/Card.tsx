import { useRouter } from "next/router";
import styled from "styled-components";

const CardName = styled.p`
  text-align: center;
  color: black;
`;

const CardComponent = styled.div`
  flex-grow: 1;

  background-color: ${(props) => props.theme.colors.negativeBackground};
  border-radius: ${(props) => props.theme.borderRadius};

  width: 150px;
  margin: 8px;

  transition: transform 0.5s;
  -webkit-transition: transform 0.5s;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const Card = ({ name }: { name: string }) => {
  const router = useRouter();

  return (
    <CardComponent onClick={() => router.push("/node/" + name)}>
      <CardName>{name}</CardName>
    </CardComponent>
  );
};
