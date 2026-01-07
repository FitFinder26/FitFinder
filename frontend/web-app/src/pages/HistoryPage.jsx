import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { useAuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useDevice } from "../providers/DeviceProvider";

/* ================== Helpers ================== */
const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(year, month - 1, day);
};

const formatInputDate = (date) => {
  if (!date) return null;
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
};

/* ================== Image Loader ================== */
function CardImageWithLoader({ src, alt }) {
  const [status, setStatus] = useState("loading"); // loading | loaded | error

  return (
    <ImageWrapper>
      {status === "loading" && <ImageSkeleton />}
      {status === "error" && <ImageFallback>Image unavailable</ImageFallback>}

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

/* ================== Component ================== */
export default function HistoryPage() {
  const { device } = useDevice();
  const [sortOrder, setSortOrder] = useState("most_recent");
  const [filters, setFilters] = useState({
    date: new Set(),
    specificDate: "",
  });
  const navigator = useNavigate();
  const { isAuthenticated } = useAuthContext();
  const [showFilters, setShowFilters] = useState(device !== "mobile");

  useEffect(() => {
    if (!isAuthenticated())
      navigator("/registration", { state: { form: "signup" } });
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth", // animate the scroll
        block: "start", // scroll to top of element
      });
    }
  };

  useEffect(() => scrollToSection("start"), []);

  const products = [
    {
      imageURL: "https://picsum.photos/200",
      prompt: "Red t-shirt with vertical black stripes.",
      date: "20/12/2025",
      numOfLikes: "5",
      id: "1",
    },
    {
      imageURL: "https://picsum.photos/201",
      prompt: "Minimal hoodie design.",
      date: "18/12/2025",
      numOfLikes: "12",
      id: "2",
    },
    {
      imageURL: "https://picsum.photos/202",
      prompt: "Cyberpunk jacket concept.",
      date: "10/12/2025",
      numOfLikes: "7",
      id: "3",
    },
  ];

  useEffect(() => {
    setShowFilters(device !== "mobile");
  }, [device]);

  const toggleFilter = (group, value) => {
    setFilters((prev) => {
      const next = { ...prev, [group]: new Set(prev[group]) };
      next[group].has(value)
        ? next[group].delete(value)
        : next[group].add(value);
      return next;
    });
  };

  /* ================== Filtering + Sorting ================== */
  const filteredProducts = products
    .filter((p) => {
      const productDate = parseDate(p.date);
      const now = new Date();

      let presetMatch = false;
      let specificMatch = false;

      if (filters.date.size > 0) {
        presetMatch = [...filters.date].some((rule) => {
          const diff = (now - productDate) / (1000 * 60 * 60 * 24);

          if (rule === "today") {
            return productDate.toDateString() === now.toDateString();
          }
          if (rule === "last_7") return diff <= 7;
          if (rule === "last_30") return diff <= 30;
          return false;
        });
      }

      if (filters.specificDate) {
        specificMatch = p.date === formatInputDate(filters.specificDate);
      }

      if (filters.date.size === 0 && !filters.specificDate) return true;

      return presetMatch || specificMatch;
    })
    .sort((a, b) => {
      const da = parseDate(a.date);
      const db = parseDate(b.date);
      return sortOrder === "most_recent" ? db - da : da - db;
    });

  /* ================== Render ================== */
  return (
    <PageWrap>
      <Content id="start" device={device}>
        <Left device={device}>
          <h1 style={{ marginBottom: "1rem" }}>History</h1>
          <FilterHeader>
            <h3>Filters</h3>
            {device !== "desktop" && (
              <FilterToggle onClick={() => setShowFilters((v) => !v)}>
                {showFilters ? "Hide" : "Show"}
              </FilterToggle>
            )}
          </FilterHeader>

          {showFilters && (
            <Filters device={device}>
              <FilterSection>
                <h4>Date</h4>

                {[
                  { label: "Today", value: "today" },
                  { label: "Last 7 days", value: "last_7" },
                  { label: "Last 30 days", value: "last_30" },
                ].map((opt) => (
                  <FilterRow key={opt.value}>
                    <input
                      type="checkbox"
                      checked={filters.date.has(opt.value)}
                      onChange={() => toggleFilter("date", opt.value)}
                    />
                    {opt.label}
                  </FilterRow>
                ))}

                <SpecificDate>
                  <label>Specific date</label>
                  <input
                    type="date"
                    value={filters.specificDate}
                    onChange={(e) =>
                      setFilters((p) => ({
                        ...p,
                        specificDate: e.target.value,
                      }))
                    }
                  />
                </SpecificDate>
              </FilterSection>
            </Filters>
          )}
        </Left>

        <Right>
          <ResultsHeader>
            <SortSelect>
              <label>Sort:</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="most_recent">Most recent</option>
                <option value="least_recent">Least recent</option>
              </select>
            </SortSelect>
          </ResultsHeader>

          <Grid device={device}>
            {filteredProducts.map((p) => (
              <Card key={p.id}>
                <CardImageWithLoader src={p.imageURL} alt="segment" />

                <CardBody>
                  <CardTitle>{p.prompt}</CardTitle>
                  <CardMeta>
                    <Footer>{p.date}</Footer>
                    <Footer>
                      <AiFillHeart /> {p.numOfLikes}
                    </Footer>
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

/* ================== Animations ================== */
const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

/* ================== Styled Components ================== */

const PageWrap = styled.main`
  padding-top: 84px;
  min-height: calc(100vh - 84px);
  color: var(--text-color);
  transition: 0.5s ease-in-out;
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
  position: ${({ device }) => (device === "desktop" ? "sticky" : "static")};
  top: 84px;
  align-self: start;
`;

const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;

const FilterToggle = styled.button.attrs({ type: "button" })`
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
  gap: 0.6rem;
  margin: 0.4rem 0;
`;

const SpecificDate = styled.div`
  margin-top: 0.8rem;
  display: flex;
  flex-direction: column;

  input {
    padding: 0.3rem;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    border-radius: 20px;
  }
`;

const Right = styled.section``;

const ResultsHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SortSelect = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;

  select {
    padding: 0.2rem;
    margin-bottom: 0.5rem;
    border-radius: 20px;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: ${({ device }) => (device === "mobile" ? "0.9rem" : "1.1rem")};
  grid-template-columns: 1fr;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--card-bg-color);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  transition: all 0.25s ease-in-out;
  color: var(--text-color);

  &:hover {
    box-shadow: 0 8px 24px rgba(252, 252, 252, 0.1);
    scale: 1.02;
  }

  @media (min-width: 901px) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  max-height: 280px;
  background: #f0f0f0;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.35s ease;
    position: absolute;
    inset: 0;
  }

  @media (min-width: 901px) {
    width: 220px;
    min-width: 200px;
    aspect-ratio: 1 / 1;
    max-height: none;
  }
`;

const ImageSkeleton = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #eee 25%, #f5f5f5 37%, #eee 63%);
  background-size: 400px 100%;
  animation: ${shimmer} 1.4s infinite linear;
`;

const ImageFallback = styled.div`
  width: 100%;
  height: 100%;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #666;
`;

const CardBody = styled.div`
  padding: 0.8rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  font-size: 0.95rem;
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Footer = styled.span`
  font-size: 0.85rem;
  color: #666;
`;
