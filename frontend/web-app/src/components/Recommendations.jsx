import styled, { keyframes } from "styled-components";
import LazyMount from "./LazyMount";
import { useState } from "react";

export default function Recommendation() {
  const [catigory, setCatigory] = useState("Neutral Fashion");
  const categories = [
    { label: "Tops", image: "" },
    { label: "Jackets & Coats", image: "" },
    { label: "Trousers", image: "" },
    { label: "Shoes", image: "" },
    { label: "Suits", image: "" },
    { label: "Shorts", image: "" },
    { label: "Bags", image: "" }
  ];

  return (
    <LazyMount>
    <Container>
      <Title>Shop for Items You Like</Title>

      <Tabs>
        <Tab active={catigory === "Neutral Fashion"} onClick={() => setCatigory("Neutral Fashion")}>Neutral Fashion</Tab>
        <Tab active={catigory === "Women Fashion"} onClick={() => setCatigory("Women Fashion")}>Women Fashion</Tab>
        <Tab active={catigory === "Men Fashion"} onClick={() => setCatigory("Men Fashion")}>Men Fashion</Tab>
      </Tabs>

      <ScrollArea>
        <UploadBox title="Upload Photo">📷</UploadBox>

        {categories.map((item, idx) => (
          <Item key={idx}>
            <ItemImage />
            <ItemLabel>{item.label}</ItemLabel>
          </Item>
        ))}
      </ScrollArea>
    </Container>
    </LazyMount>
  );
}

const slideLeft = keyframes`
    from{
        opacity: 0.5;
        transform: translateX(10%);
    }  
    to{
        opacity: 1;
        transform: translateX(0%);
    }
`;


const Container = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: ${slideLeft} 1s;

`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

const Tabs = styled.div`
  display: flex;
  gap: 24px;
  font-weight: 500;
  color: #555;
`;

const Tab = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  padding-bottom: 4px;
  cursor: pointer;
  ${({ active }) =>
    active && `
      color: black;
      border-bottom: 2px solid black;
    `}
`;

const ScrollArea = styled.div`
  display: flex;
  gap: 24px;
  padding: 16px 0;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const UploadBox = styled.div`
  min-width: 120px;
  height: 140px;
  border: 1px solid #ccc;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #aaa;
  cursor: pointer;
  &:hover {
    font-size: 2.1rem;
  }
`;

const Item = styled.div`
  min-width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const ItemImage = styled.div`
  width: 100%;
  height: 140px;
  background: #ddd;
  border-radius: 14px;
`;

const ItemLabel = styled.span`
  font-size: 14px;
  color: #333;
`;