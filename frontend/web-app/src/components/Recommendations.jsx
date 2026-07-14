import styled, { keyframes } from "styled-components";
import LazyMount from "./LazyMount";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Recommendation({
  categoricalProducts = { category: [{ imageURL: "www.example.com" }] },
}) {
  const navigator = useNavigate();

  return (
    <LazyMount>
      <Container>
        <Title>Most Searched for Items</Title>

        <ScrollArea>
          {Object.entries(categoricalProducts).map(([category, items]) => (
            <Item
              key={category}
              onClick={() =>
                navigator("/search-result", {
                  state: {
                    products: categoricalProducts[category],
                    searchingPeice: categoricalProducts[category][0].imageURL,
                  },
                })
              }
            >
              <ItemImage src={items[0].imageURL} alt={category} />
              <ItemLabel>{category}</ItemLabel>
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
  margin: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: ${slideLeft} 1s;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

const ScrollArea = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 24px;
  padding: 16px 0;
  overflow-x: scroll;
  scrollbar-width: none;
  width: 100vw;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.div`
  width: 140px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 14px;
`;

const ItemLabel = styled.span`
  font-size: 14px;
  color: #333;
`;
