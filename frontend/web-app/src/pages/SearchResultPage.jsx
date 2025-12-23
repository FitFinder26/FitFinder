import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom"; // <-- added useNavigate

export default function SearchResultPage() {
  const [categories, setCategories] = useState([]);
  const [stores, setStores] = useState([]);
  const [sortOrder, setSortOrder] = useState("similarity");
  const location = useLocation();
  const { products } = location.state || []; // get products from navigation state
  const navigate = useNavigate(); // <-- added
  const searchingPeice = location.state?.searchingPeice || null;

  const [filters, setFilters] = useState({
    category: new Set(),
    store: new Set(),
  });

  useEffect(() => {
    console.log(products);
    extractCategoryFromData();
    settingSellers();
    extractStoresFromData();
  }, []);

  const extractCategoryFromData = () => {
    let extractedCategories = [];
    products.forEach((product) => {
      if (product.category && !extractedCategories.includes(product.category)) {
        extractedCategories.push(product.category);
      }
    });
    setCategories(extractedCategories);
  };

  const getWebsiteName = (url) => {
    const { hostname } = new URL(url);

    return hostname
      .replace(/^www\./, "") // remove www.
      .split(".")[0] // take main name
      .replace(/-/g, " "); // optional formatting
  };

  const extractStoresFromData = () => {
    let extractedStores = [];
    products.forEach((product) => {
      if (!extractedStores.includes(product.seller))
        extractedStores.push(product.seller);
    });
    setStores(extractedStores);
  };

  const settingSellers = () => {
    products.forEach((product) => {
      product.seller = getWebsiteName(product.itemWebURL);
    });
    console.log(products);
  };

  const toggleFilter = (group, value) => {
    setFilters((prev) => {
      const next = { ...prev, [group]: new Set(prev[group]) };
      if (next[group].has(value)) next[group].delete(value);
      else next[group].add(value);
      return next;
    });
  };

  // simple client-side filter demo (no API)
  const visible = products.filter((p) => {
    if (filters.store.size && !filters.store.has(p.seller)) return false;
    if (filters.category.size && !filters.category.has(p.category))
      return false;
    return true;
  });

  visible.sort((a, b) => {
    if (sortOrder === "lowest_price") return a.price - b.price;
    if (sortOrder === "highest_price") return b.price - a.price;
    return 0; // similarity or default
  });

  return (
    <PageWrap>
      <Content>
        <Left>
          <PreviewCard>
            {searchingPeice ? (
              <PreviewImage src={searchingPeice} alt="query" />
            ) : (
              <PreviewPlaceholder>
                <div>
                  <p>Segmented Image</p>
                </div>
              </PreviewPlaceholder>
            )}
          </PreviewCard>

          <Filters>
            <h3>Filters</h3>

            <FilterSection>
              <h4>Category</h4>
              {categories.map((g) => (
                <FilterRow key={g} onClick={() => toggleFilter("category", g)}>
                  <input
                    type="checkbox"
                    readOnly
                    checked={filters.category.has(g)}
                  />
                  <label>{g}</label>
                </FilterRow>
              ))}
            </FilterSection>

            <FilterSection>
              <h4>Store</h4>
              {stores.map((s) => (
                <FilterRow key={s} onClick={() => toggleFilter("store", s)}>
                  <input
                    type="checkbox"
                    readOnly
                    checked={filters.store.has(s)}
                  />
                  <label>{s}</label>
                </FilterRow>
              ))}
            </FilterSection>
          </Filters>
        </Left>

        <Right>
          <ResultsHeader>
            <SortSelect>
              <label>Sort:</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value={"similarity"}>similarity</option>
                <option value={"lowest_price"}>lowest price</option>
                <option value={"highest_price"}>highest price</option>
              </select>
            </SortSelect>
          </ResultsHeader>

          <Grid>
            {visible.map((p) => (
              <Card
                key={p.item_id}
                onClick={() =>
                  navigate(`/product/${p.item_id}`, {
                    state: {
                      product: p,
                      similarProducts: visible.filter(
                        (similar) => similar.category == p.category
                      ),
                    },
                  })
                }
              >
                <CardImage src={p.imageURL} alt={p.title} />
                <CardBody>
                  <CardTitle>{p.title}</CardTitle>
                  <CardMeta>
                    <Price>
                      {p.price} {p.currency}
                    </Price>
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
  transition: all 0.3s ease;
  &:hover {
    scale: 1.02;
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.1);
  }
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
