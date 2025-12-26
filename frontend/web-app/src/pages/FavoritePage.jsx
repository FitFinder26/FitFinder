import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import noDataFound from "../assets/noFavorites.svg";
import { useAuthContext } from "../providers/AuthProvider";
import { favoriteService } from "../../../shared/services/favoriteService";
import { AiFillHeart } from "react-icons/ai";
import { Notifier } from "../components/Notifier";

/* ---------------------------------------------
   Image with Skeleton + Fade + Error Fallback
----------------------------------------------*/
function CardImageWithLoader({ src, alt }) {
  const [status, setStatus] = useState("loading");

  return (
    <ImageWrapper>
      {status === "loading" && <ImageSkeleton />}
      {status === "error" && <ImageFallback>No image</ImageFallback>}

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

export default function FavoritePage() {
  const [categories, setCategories] = useState([]);
  const [stores, setStores] = useState([]);
  const [sortOrder, setSortOrder] = useState("similarity");
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const navigator = useNavigate();
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthContext();
  const [filters, setFilters] = useState({
    category: new Set(),
    store: new Set(),
  });

  // confirmation dialog state for removals
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingRemoveId, setPendingRemoveId] = useState(null);

  useEffect(() => {
    if (!isAuthenticated())
      navigator("/registration", { state: { form: "signup" } });
  }, []);

  /* ------------------ Simulate fetching products ------------------ */
  useEffect(() => {
    favoriteService
      .getFavorites()
      .then((data) => {
        settingSellers(data);
        extractCategoryFromData(data);
        extractStoresFromData(data);
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error in retreiving favorites: ", error);
      });
  }, []);

  // perform the actual removal (called after confirmation)
  const removeFromFavorite = async (itemId) => {
    try {
      const response = await favoriteService.removeFromFavorite(itemId);
      if (!response.ok) {
        const text = await response.text().catch(() => null);
        throw new Error(
          `Failed to remove from favorite: ${response.status} ${text || ""}`
        );
      }
      // remove from local state so UI updates immediately
      setProducts((prev) => prev.filter((p) => p.item_id !== itemId));
      Notifier.notifySuccess("Removed from favorites");
    } catch (error) {
      Notifier.notifyError("Failed to remove from favorites");
      console.error(error);
    }
  };

  // Ask user to confirm before removing
  const requestRemoveFromFavorite = (itemId, e) => {
    // prevent card click navigation
    if (e && typeof e.stopPropagation === "function") e.stopPropagation();
    setPendingRemoveId(itemId);
    setConfirmOpen(true);
  };

  const confirmRemove = async () => {
    setConfirmOpen(false);
    if (!pendingRemoveId) return;
    await removeFromFavorite(pendingRemoveId);
    setPendingRemoveId(null);
  };

  const cancelRemove = () => {
    setConfirmOpen(false);
    setPendingRemoveId(null);
  };

  const extractCategoryFromData = (prods) => {
    const extracted = [];
    if (prods.length > 0)
      prods.forEach((p) => {
        if (p.category && !extracted.includes(p.category)) {
          extracted.push(p.category);
        }
      });
    setCategories(extracted);
  };

  const extractStoresFromData = (prods) => {
    const extracted = [];
    if (prods.length > 0)
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
    if (prods.length > 0)
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
  const visible =
    products.length > 0
      ? products
          .filter((p) => {
            if (filters.store.size && !filters.store.has(p.seller))
              return false;
            if (filters.category.size && !filters.category.has(p.category))
              return false;
            return true;
          })
          .sort((a, b) => {
            if (sortOrder === "lowest_price") return a.price - b.price;
            if (sortOrder === "highest_price") return b.price - a.price;
            return 0;
          })
      : [];

  /* ------------------ Render ------------------ */
  return (
    <PageWrap>
      <Content>
        <Left>
          <h1 style={{ marginBottom: "1rem" }}>Favorites</h1>

          <Filters>
            <h3>Filters</h3>

            <FilterSection>
              <h4>Category</h4>
              {categories.map((c) => (
                <FilterRow key={c} onClick={() => toggleFilter("category", c)}>
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
                <option value="similarity">similarity</option>
                <option value="lowest_price">lowest price</option>
                <option value="highest_price">highest price</option>
              </select>
            </SortSelect>
          </ResultsHeader>

          <Grid>
            {loading
              ? Array.from({ length: 8 }).map((_, idx) => (
                  <Card key={idx}>
                    <ImageWrapper>
                      <ImageSkeleton />
                    </ImageWrapper>
                    <CardBody>
                      <CardTitle>Loading...</CardTitle>
                      <CardMeta>
                        <Price>--</Price>
                        <Seller>--</Seller>
                      </CardMeta>
                    </CardBody>
                  </Card>
                ))
              : visible.length > 0 &&
                visible.map((p) => (
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
                    <CardImageWithLoader src={p.imageURL} alt={p.title} />
                    <LikeButton
                      onClick={(e) => requestRemoveFromFavorite(p.item_id, e)}
                      aria-label="Remove from favorites"
                      title="Remove from favorites"
                    >
                      <AiFillHeart size={25} />
                    </LikeButton>
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

          {confirmOpen && (
            <ModalOverlay
              role="dialog"
              aria-modal="true"
              onClick={cancelRemove}
            >
              <ModalBox onClick={(e) => e.stopPropagation()}>
                <h3>Remove from favorites?</h3>
                <p>
                  Are you sure you want to remove this item from your favorites?
                </p>
                <ModalActions>
                  <CancelButton onClick={cancelRemove}>Cancel</CancelButton>
                  <ConfirmButton onClick={confirmRemove}>
                    Yes, remove
                  </ConfirmButton>
                </ModalActions>
              </ModalBox>
            </ModalOverlay>
          )}

          {visible.length == 0 && !loading && (
            <img src={noDataFound} style={{}} />
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
  /* background: #fafafa; */
  color: var(--text-color);
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 1.2rem auto;
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Filters = styled.div`
  background: var(--bg-color);
  border-radius: 10px;
  padding: 1rem;
  color: var(--text-color);
  transition: 0.5s ease-in-out;
  box-shadow: 4px 4px 10px var(--back-drop-shadow-color);
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
  display: flex;
  gap: 0.5rem;
  select {
    padding: 0.2rem;
    border-radius: 20px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
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
  transition: color 160ms ease, transform 120ms ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #bbb; /* heart red */
    transform: scale(1.08);
  }
  &:active {
    transform: scale(0.96);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(230, 57, 70, 0.12);
    border-radius: 6px;
  }
`;

/* Confirmation modal + animations */
const overlayFade = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const popIn = keyframes`
  0% { opacity: 0; transform: translateY(12px) scale(0.96); }
  60% { opacity: 1; transform: translateY(-6px) scale(1.03); }
  100% { transform: translateY(0) scale(1); }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.639);
  z-index: 1000;
  animation: ${overlayFade} 220ms ease forwards;
`;

const ModalBox = styled.div`
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 1.25rem;
  border-radius: 8px;
  width: min(420px, 90%);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: left;
  will-change: transform, opacity;
  transform-origin: center center;
  animation: ${popIn} 320ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;

  h3 {
    margin: 0 0 0.5rem 0;
  }
  p {
    margin: 0 0 1rem 0;
    color: var(--text-color);
  }
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

const ConfirmButton = styled.button`
  background: #e63946;
  color: #fff;
  border: none;

  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    scale: 1.02;
  }
`;

const CancelButton = styled.button`
  border: solid 1px transparent;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    opacity: 0.95;
    border-color: black;
  }
`;
