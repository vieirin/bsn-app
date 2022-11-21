import { FC, ReactNode, useState } from "react";
import styled from "styled-components";
import { TopicData } from "../pages/node/[name]";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;

  background-color: ${(props) => props.theme.colors.negativeBackground};
  border-radius: ${(props) => props.theme.borderRadius};
`;

const InfoTitle = styled.div`
  color: black;
  text-align: center;
  width: 100%;
  text-transform: capitalize;
  padding: 4px 0;
`;

const Separator = styled.div`
  width: 90%;
  min-height: 2px;
  background-color: grey;
  margin-top: 2px;
  margin-bottom: 12px;
`;

const TopicRep = styled.div<{ active?: boolean }>`
  :hover {
    background-color: ${(props) => props.theme.colors.hover};
    color: black;
    cursor: pointer;
  }
  background-color: ${(props) =>
    props.active ? props.theme.colors.selected : "inherit"};
  color: ${(props) => (props.active ? "white" : "black")};
  padding: 8px;
  margin: 0 8px;
`;

const TopicContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding-bottom: 8px;
`;

type TopicInfo = Omit<TopicData, "type"> & { type?: string };

const NodeInfo: FC<{
  type: "publication" | "subscription" | "service";
  info: TopicInfo[];
}> = ({ type, info }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <Container>
      <InfoTitle>{type}</InfoTitle>
      <Separator />
      <TopicContainer>
        {info.map((topic, idx) => (
          <TopicRep
            key={`${type}-${topic.name}${idx}`}
            onClick={() =>
              setSelectedIndex((oldIdx) => (oldIdx === idx ? -1 : idx))
            }
            active={idx === selectedIndex}
          >
            {topic.name}
          </TopicRep>
        ))}
      </TopicContainer>
    </Container>
  );
};

export default NodeInfo;
