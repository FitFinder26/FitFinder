import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { useSearchParams, useNavigate } from "react-router-dom"; // <-- added useNavigate

/**
 * Minimal mock of a search results page to match the uploaded layout:
 * - left column: large image preview + filters
 * - right column: grid of product cards
 *
 * Replace the mock data + imageUrl handling with your real search results / API calls.
 */

export default function SearchResultPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate(); // <-- added
  const imageUrl =
  searchParams.get("image-url") || "https://picsum.photos/seed/default/300/360";

  const [filters, setFilters] = useState({
    gender: new Set(),
    store: new Set(),
    brand: new Set(),
  });

  const toggleFilter = (group, value) => {
    setFilters((prev) => {
      const next = { ...prev, [group]: new Set(prev[group]) };
      if (next[group].has(value)) next[group].delete(value);
      else next[group].add(value);
      return next;
    });
  };

  // mock products
  const products = useMemo(
    () =>
      new Array(12).fill(0).map((_, i) => ({
        id: i + 1,
        title: `Striped Shirt ${i + 1}`,
        price: (19 + i).toFixed(2),
        seller: ["Amazon", "Shein", "Noon"][i % 3],
        img: `https://picsum.photos/seed/fit-${i + 1}/300/360`,
        description:
      "No description available. In a real app fetch product details from the backend using the id.",
      })),
    []
  );

  // simple client-side filter demo (no API)
  const visible = products.filter((p) => {
    if (filters.store.size && !filters.store.has(p.seller)) return false;
    return true;
  });

  return (
    <PageWrap>
      <Content>
        <Left>
          <PreviewCard>
            {imageUrl ? (
              <PreviewImage src={imageUrl} alt="query" />
            ) : (
              <PreviewPlaceholder>
                 {/* <div>
                  <p>Category: </p>
                  <p>Details: {imageUrl ? "based on uploaded image" : "—"}</p>
                </div> */}
              </PreviewPlaceholder>
            )}
          </PreviewCard>

          <Filters>
            <h3>Filters</h3>

            <FilterSection>
              <h4>Gender</h4>
              {["Male", "Female", "Unisex"].map((g) => (
                <FilterRow key={g} onClick={() => toggleFilter("gender", g)}>
                  <input
                    type="checkbox"
                    readOnly
                    checked={filters.gender.has(g)}
                  />
                  <label>{g}</label>
                </FilterRow>
              ))}
            </FilterSection>

            <FilterSection>
              <h4>Store</h4>
              {["Amazon", "Shein", "Noon"].map((s) => (
                <FilterRow key={s} onClick={() => toggleFilter("store", s)}>
                  <input type="checkbox" readOnly checked={filters.store.has(s)} />
                  <label>{s}</label>
                </FilterRow>
              ))}
            </FilterSection>

            <FilterSection>
              <h4>Brand</h4>
              {["LC Waikiki", "DeFacto", "Nike"].map((b) => (
                <FilterRow key={b} onClick={() => toggleFilter("brand", b)}>
                  <input type="checkbox" readOnly checked={filters.brand.has(b)} />
                  <label>{b}</label>
                </FilterRow>
              ))}
            </FilterSection>
          </Filters>
        </Left>

        <Right>
          <ResultsHeader>
            <SortSelect>
              <label>Sort:</label>
              <select>
                <option>similarity</option>
                <option>lowest price</option>
                <option>highest price</option>
              </select>
            </SortSelect>
          </ResultsHeader>

          <Grid>
            {visible.map((p) => (
              <Card
                key={p.id}
                onClick={() => navigate(`/product/${p.id}`, { state: { product: p } })}
              >
                 <CardImage src={p.img} alt={p.title} />
                 <CardBody>
                   <CardTitle>{p.title}</CardTitle>
                   <CardMeta>
                     <Price>${p.price}</Price>
                     <Seller>Sold by {p.seller}</Seller>
                   </CardMeta>
                 </CardBody>
              </Card>
            ))}
          </Grid>
        </Right>
      </Content>
    </PageWrap>
  );
}

/* Styled components */

const PageWrap = styled.main`
  padding-top: 84px; /* space for fixed navbar */
  min-height: calc(100vh - 84px);
  background: #fafafa;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 1.2rem auto;
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

const Left = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const PreviewCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  min-height: 360px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 320px;
  object-fit: contain;
  border-radius: 8px;
`;

const PreviewPlaceholder = styled.div`
  text-align: center;
  color: #666;
  p {
    margin-top: 0.6rem;
    font-size: 0.9rem;
  }
`;

const Filters = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);

  h3 {
    margin-bottom: 0.5rem;
  }
`;

const FilterSection = styled.div`
  margin-top: 0.8rem;
  h4 {
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    color: #333;
  }
`;

const FilterRow = styled.label`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  cursor: pointer;
  user-select: none;
  margin: 0.35rem 0;
  input {
    width: 16px;
    height: 16px;
  }
`;

const Right = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  padding: 0.2rem 0;
  h2 {
    margin: 0;
    font-size: 1.4rem;
  }
  p {
    margin: 0;
    color: #666;
    font-size: 0.95rem;
  }
`;

const SortSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  label {
    color: #666;
    font-size: 0.95rem;
  }
  select {
    padding: 0.35rem 0.6rem;
    border-radius: 6px;
    border: 1px solid #ddd;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* <- changed to 4 per row */
  gap: 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); /* fallback for narrower screens */
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  cursor: pointer; /* <-- make it clear this is clickable */
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 0.6rem 0.9rem;
`;

const CardTitle = styled.h3`
  font-size: 0.95rem;
  margin: 0 0 0.4rem 0;
  height: 40px;
  overflow: hidden;
  color: #111;
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.span`
  font-weight: 700;
  color: #111;
`;

const Seller = styled.span`
  font-size: 0.85rem;
  color: #666;
`;