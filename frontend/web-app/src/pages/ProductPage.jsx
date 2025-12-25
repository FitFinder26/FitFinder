import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { AiFillHeart } from "react-icons/ai";
import { favoriteService } from "../../../shared/services/favoriteService";

export default function ProductPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  // Prefer product object passed via navigate state to avoid extra API call
  const product = location.state?.product || {
    item_id: id,
    title: `Product ${id}`,
    price: "0.00",
    seller: "Unknown",
    imageURL: `https://picsum.photos/seed/product-${id}/600/720`,
    description:
      "No description available. In a real app fetch product details from the backend using the id.",
  };

  const similar = location.state?.similarProducts || [];

  console.log("Product data:", product);

  const rawDescription = product.description;
  const [featuresPart, paragraphPart] = rawDescription.split(" Description ");
  const [liked, setLiked] = useState(false);

  const features = featuresPart
    .split("•")
    .map((item) => item.trim())
    .filter(Boolean);

  const toggleFavorite = async () => {
    favoriteService
      .toggleFavorite(product.item_id, !liked)
      .then((response) => {
        if (response.ok) {
          setLiked((prev) => !prev);
        } else throw Error("Failed to add to favorite");
      })
      .catch((error) => {
        console.error("Something went wrong in setting as favorite: ", error);
        throw error;
      });
  };

  return (
    <PageWrap>
      <Container>
        <LeftColumn>
          <ImageWrapper>
            <MainImage src={product.imageURL} alt={product.title} />
            <LikeButton onClick={toggleFavorite}>
              {!liked ? <Heart /> : <AiFillHeart size={25} />}
            </LikeButton>
          </ImageWrapper>
        </LeftColumn>

        <RightColumn>
          <TitleRow>
            <h1>{product.title}</h1>
            <PriceTag>${product.price}</PriceTag>
          </TitleRow>

          <Meta>
            <span>Seller: {product?.seller || "Unknown"}</span>
          </Meta>

          <ProductDescription>
            <FeaturesList>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </FeaturesList>

            {paragraphPart && (
              <DescriptionText>{paragraphPart}</DescriptionText>
            )}
          </ProductDescription>

          <Actions>
            <SecondaryButton onClick={() => navigate(-1)}>Back</SecondaryButton>
            <PrimaryButton
              onClick={() =>
                window.open(product.itemWebURL, "_blank", "noopener,noreferrer")
              }
            >
              Go to Store
            </PrimaryButton>
          </Actions>
        </RightColumn>
      </Container>
      {/* Similar products section */}
      <SimilarSection>
        <SectionHeader>
          <h3>Similar products</h3>
        </SectionHeader>

        <SimilarGrid>
          {similar.map((p) => (
            <SimilarCard
              key={p.id}
              onClick={() =>
                navigate(`/product/${p.id}`, {
                  state: { product: p, similar: similar },
                })
              }
            >
              <SimilarImg src={p.imageURL} alt={p.title} />
              <SimilarBody>
                <SimilarTitle>{p.title}</SimilarTitle>
                <SimilarMeta>
                  <span>${p.price}</span>
                  <small>Sold by {p.seller}</small>
                </SimilarMeta>
              </SimilarBody>
            </SimilarCard>
          ))}
        </SimilarGrid>
      </SimilarSection>
    </PageWrap>
  );
}

/* Styled components */

const PageWrap = styled.main`
  padding-top: 84px;
  min-height: calc(100vh - 84px);
  background: #fafafa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 1.2rem auto;
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

const LeftColumn = styled.div``;

const ImageWrapper = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
`;

const MainImage = styled.img`
  width: 100%;
  max-height: 420px; /* <- reduced from 620px */
  height: auto; /* keep aspect ratio */
  object-fit: contain;
  border-radius: 8px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  h1 {
    margin: 0;
    font-size: 1.3rem;
  }
`;

const PriceTag = styled.span`
  font-weight: 800;
  font-size: 1.2rem;
`;

const Meta = styled.div`
  color: #666;
  font-size: 0.95rem;
  display: flex;
  gap: 1rem;
`;

const ProductDescription = styled.div`
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.25rem 0;

  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.6rem;
    line-height: 1.45;
    color: #374151;

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      color: #6366f1; /* subtle accent */
      font-size: 1.2rem;
      line-height: 1;
    }
  }
`;

const DescriptionText = styled.p`
  margin: 0;
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const PrimaryButton = styled.button`
  background: #4d96ff;
  color: white;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2563eb;
    scale: 1.02;
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  border: 1px solid #ddd;
  padding: 0.55rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f3f4f6;
    transform: translateX(-1rem);
  }
`;

/* Similar products styles */

const SimilarSection = styled.section`
  max-width: 1200px;
  margin: 1rem auto 3rem;
  padding: 0 0.5rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.6rem;
  h3 {
    margin: 0;
    font-size: 1.1rem;
  }
`;

const SimilarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

const SimilarCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    scale: 1.02;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
`;

const SimilarImg = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
`;

const SimilarBody = styled.div`
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const SimilarTitle = styled.h4`
  margin: 0;
  font-size: 0.95rem;
  height: 38px;
  overflow: hidden;
`;

const SimilarMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  font-size: 0.9rem;
`;

const LikeButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: red;
  margin: 1rem;
`;
