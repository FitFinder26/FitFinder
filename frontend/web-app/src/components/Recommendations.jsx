import styled, { keyframes } from "styled-components";
import LazyMount from "./LazyMount";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function Recommendation({
  categoricalProducts = null,
  loading = false,
}) {
  const navigator = useNavigate();
  // const isLoading =
  //   loading ||
  //   !categoricalProducts ||
  //   Object.keys(categoricalProducts).length === 0;

  return (
    <LazyMount>
      <Container aria-busy={loading}>
        <Title>Most Searched for Items</Title>
        {loading && (
          <VisuallyHidden role="status">
            Loading recommendations…
          </VisuallyHidden>
        )}

        <ScrollArea>
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <SkeletonItem key={i} aria-hidden>
                  <SkeletonImage />
                  <SkeletonLabel />
                </SkeletonItem>
              ))
            : Object.entries(categoricalProducts).map(([category, items]) => (
                <Item
                  key={category}
                  onClick={() =>
                    navigator("/search-result", {
                      state: {
                        products: categoricalProducts[category],
                        searchingPeice:
                          categoricalProducts[category][0].imageURL,
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
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: ${slideLeft} 1s;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 1rem;
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
  color: var(--text-color);
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const SkeletonItem = styled.div`
  width: 140px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const SkeletonImage = styled.div`
  width: 100%;
  height: 140px;
  border-radius: 14px;
  background: var(--skeleton-loader-bg);
  background-size: 200% 100%;
  animation: ${shimmer} 1.2s linear infinite;
`;

const SkeletonLabel = styled.div`
  width: 70px;
  height: 14px;
  border-radius: 6px;
  background: var(--skeleton-loader-bg);
  background-size: 200% 100%;
  animation: ${shimmer} 1.2s linear infinite;
`;

const VisuallyHidden = styled.span`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`;
