import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import noDataFound from "../assets/noDataFound.svg";
import { AiFillHeart } from "react-icons/ai";
import { useDevice } from "../providers/DeviceProvider";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../locales/namespaces";

/* ---------------------------------------------
   Image with Skeleton + Fade + Error Fallback
----------------------------------------------*/
function CardImageWithLoader({ src, alt, t }) {
  const [status, setStatus] = useState("loading");

  return (
    <ImageWrapper>
      {status === "loading" && <ImageSkeleton />}
      {status === "error" && <ImageFallback>{t("noImage")}</ImageFallback>}

      <img
        src={src}
        alt={alt}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
        style={{
          opacity: status === "loaded" ? 1 : 0,
        }}
      />
    </ImageWrapper>
  );
}

export default function SearchResultPage() {
  const { device } = useDevice();
  const { t } = useTranslation(NAMESPACES.search);
  const { t: tCommon } = useTranslation(NAMESPACES.common);
  const [categories, setCategories] = useState([]);
  const [stores, setStores] = useState([]);
  const [sortOrder, setSortOrder] = useState("similarity");
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(device !== "mobile");

  const location = useLocation();
  const navigate = useNavigate();

  const searchingPeice = location.state?.searchingPeice || null;

  const [filters, setFilters] = useState({
    category: new Set(),
    store: new Set(),
  });

  useEffect(() => {
    setShowFilters(device !== "mobile");
  }, [device]);

  /* ------------------ Simulate fetching products ------------------ */
  useEffect(() => {
    const productsFromState = location.state?.products || [];
    // simulate async fetch
    setTimeout(() => {
      const productsCopy = JSON.parse(JSON.stringify(productsFromState));
      settingSellers(productsCopy);
      extractCategoryFromData(productsCopy);
      extractStoresFromData(productsCopy);
      setProducts(productsCopy);
      setLoading(false);
    }, 500); // simulate delay
  }, []);

  const extractCategoryFromData = (prods) => {
    const extracted = [];
    prods.forEach((p) => {
      if (p.category && !extracted.includes(p.category)) {
        extracted.push(p.category);
      }
    });
    setCategories(extracted);
  };

  const extractStoresFromData = (prods) => {
    const extracted = [];
    prods.forEach((p) => {
      if (!extracted.includes(p.seller)) extracted.push(p.seller);
    });
    setStores(extracted);
  };

  const getWebsiteName = (url) => {
    const { hostname } = new URL(url);
    return hostname
      .replace(/^www\./, "")
      .split(".")[0]
      .replace(/-/g, " ");
  };

  const settingSellers = (prods) => {
    prods.forEach((p) => {
      p.seller = getWebsiteName(p.itemWebURL);
    });
  };

  const toggleFilter = (group, value) => {
    setFilters((prev) => {
      const next = { ...prev, [group]: new Set(prev[group]) };
      next[group].has(value)
        ? next[group].delete(value)
        : next[group].add(value);
      return next;
    });
  };

  /* ------------------ Filter + Sort ------------------ */
  const visible = products
    .filter((p) => {
      if (filters.store.size && !filters.store.has(p.seller)) return false;
      if (filters.category.size && !filters.category.has(p.category))
        return false;
      return true;
    })
    .sort((a, b) => {
      if (sortOrder === "lowest_price") return a.price - b.price;
      if (sortOrder === "highest_price") return b.price - a.price;
      return 0;
    });

  /* ------------------ Render ------------------ */
  return (
    <PageWrap>
      <Content device={device}>
        <Left device={device}>
          <PreviewCard>
            {searchingPeice ? (
              <PreviewImage src={searchingPeice} alt={t("previewAlt")} />
            ) : (
              <PreviewPlaceholder>{t("segmentedImage")}</PreviewPlaceholder>
            )}
          </PreviewCard>

          <FilterHeader>
            <h3>{t("filters")}</h3>
            {device !== "desktop" && (
              <FilterToggle onClick={() => setShowFilters((v) => !v)}>
                {showFilters ? t("hide") : t("show")}
              </FilterToggle>
            )}
          </FilterHeader>

          {showFilters && (
            <Filters device={device}>
              <FilterSection>
                <h4>{t("category")}</h4>
                {categories.map((c) => (
                  <FilterRow
                    key={c}
                    onClick={() => toggleFilter("category", c)}
                  >
                    <input
                      type="checkbox"
                      readOnly
                      checked={filters.category.has(c)}
                    />
                    <label>{c}</label>
                  </FilterRow>
                ))}
              </FilterSection>

              <FilterSection>
                <h4>{t("store")}</h4>
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
          )}
        </Left>

        <Right>
          <ResultsHeader>
            <SortSelect>
              <label>{t("sort")}</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="similarity">{t("sortSimilarity")}</option>
                <option value="lowest_price">{t("sortLowest")}</option>
                <option value="highest_price">{t("sortHighest")}</option>
              </select>
            </SortSelect>
          </ResultsHeader>

          <Grid device={device}>
            {loading
              ? Array.from({ length: 8 }).map((_, idx) => (
                  <Card key={idx}>
                    <ImageWrapper>
                      <ImageSkeleton />
                    </ImageWrapper>
                    <CardBody>
                      <CardTitle>{tCommon("loading")}</CardTitle>
                      <CardMeta>
                        <Price>--</Price>
                        <Seller>--</Seller>
                      </CardMeta>
                    </CardBody>
                  </Card>
                ))
              : visible.map((p) => (
                  <Card
                    key={p.item_id}
                    onClick={() =>
                      navigate(`/product/${p.item_id}`, {
                        state: {
                          product: p,
                          similarProducts: visible.filter(
                            (x) => x.category === p.category
                          ),
                        },
                      })
                    }
                  >
                    <CardImageWithLoader src={p.imageURL} alt={p.title} t={t} />
                    {p.favorite && (
                      <LikeButton
                        aria-label={t("removeFavoriteLabel")}
                        title={t("removeFavoriteLabel")}
                      >
                        <AiFillHeart size={25} />
                      </LikeButton>
                    )}
                    <CardBody>
                      <CardTitle>{p.title}</CardTitle>
                      <CardMeta>
                        <Price>
                          {p.price} {p.currency}
                        </Price>
                        <Seller>{p.seller}</Seller>
                      </CardMeta>
                    </CardBody>
                  </Card>
                ))}
          </Grid>
          {visible.length === 0 && !loading && (
            <img src={noDataFound} alt={t("noResultsAlt")} />
          )}
        </Right>
      </Content>
    </PageWrap>
  );
}

/* ---------------------------------------------
   Styled Components
----------------------------------------------*/

const PageWrap = styled.main`
  padding-top: 84px;
  min-height: calc(100vh - 84px);
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 1.2rem auto;
  display: grid;
  grid-template-columns: ${({ device }) =>
    device === "mobile"
      ? "1fr"
      : device === "tablet"
        ? "260px 1fr"
        : "320px 1fr"};
  gap: ${({ device }) => (device === "mobile" ? "1.25rem" : "2rem")};
  padding: 0 1rem;
`;

const Left = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: ${({ device }) => (device === "desktop" ? "sticky" : "static")};
  top: 84px;
  align-self: start;
`;

const PreviewCard = styled.div`
  border-radius: 10px;
  padding: 1rem;
  min-height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--text-color);
  background: var(--card-bg-color);
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 320px;
  object-fit: contain;
`;

const PreviewPlaceholder = styled.div`
  color: #777;
`;

const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 0.25rem;
  color: var(--text-color);
`;

const FilterToggle = styled.button`
  border: 1px solid var(--text-color);
  background: transparent;
  color: var(--text-color);
  border-radius: 999px;
  padding: 0.35rem 0.85rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--text-color);
    color: var(--bg-color);
  }
`;

const Filters = styled.div`
  background: var(--bg-color);
  border-radius: 10px;
  padding: 1rem;
  color: var(--text-color);
  transition: 0.3s ease-in-out;
  box-shadow: 4px 4px 10px var(--back-drop-shadow-color);
  border: 1px solid var(--text-color);
`;

const FilterSection = styled.div`
  margin-top: 1rem;
`;

const FilterRow = styled.label`
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
`;

const Right = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ResultsHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SortSelect = styled.div`
  color: var(--text-color);
  display: flex;
  gap: 0.5rem;
  select {
    padding: 0.2rem;
    border-radius: 20px;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: ${({ device }) => (device === "mobile" ? "0.9rem" : "1.1rem")};
  grid-template-columns: ${({ device }) => {
    if (device === "mobile") return "1fr";
    if (device === "tablet") return "repeat(2, 1fr)";
    return "repeat(4, 1fr)";
  }};
`;

const Card = styled.div`
  position: relative;
  background-color: var(--card-bg-color);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.25s ease-in-out;
  transition: background-color 0.5s ease-in-out;
  color: var(--text-color);
  box-shadow: 0 0 2px 5px rgba(255, 255, 255, 0.2);
  &:hover {
    transform: scale(1.02);
  }
`;

const CardBody = styled.div`
  padding: 0.8rem;
`;

const CardTitle = styled.h3`
  font-size: 0.95rem;
  height: 40px;
  overflow: hidden;
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Price = styled.span`
  font-weight: 700;
`;

const Seller = styled.span`
  font-size: 0.85rem;
  color: #666;
`;

/* ---------------------------------------------
   Skeleton Styles
----------------------------------------------*/

const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background: #f0f0f0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s ease;
  }
`;

const ImageSkeleton = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #eee 25%, #ddd 37%, #eee 63%);
  background-size: 400% 100%;
  animation: ${shimmer} 1.4s infinite;
`;

const ImageFallback = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  color: #888;
`;

const LikeButton = styled.button`
  position: absolute;
  top: 0; /* sits over the image */
  right: 0;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: #e63946; /* neutral by default */
  margin: 1rem;
  transition:
    color 160ms ease,
    transform 120ms ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
