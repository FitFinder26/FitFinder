import { useEffect } from "react";
import styled from "styled-components";

const AboutUsPage = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth", // animate the scroll
        block: "start", // scroll to top of element
      });
    }
  };

  useEffect(() => scrollToSection("hero"), []);

  return (
    <Page>
      {/* ============ Sticky Sidebar ============ */}
      <Sidebar>
        <Nav>
          <NavItem onClick={() => scrollToSection("hero")}>About</NavItem>
          <NavItem onClick={() => scrollToSection("introduction")}>
            Introduction
          </NavItem>
          <NavItem onClick={() => scrollToSection("how-it-works")}>
            How It Works
          </NavItem>
          <NavItem onClick={() => scrollToSection("access")}>
            User Access
          </NavItem>
          <NavItem onClick={() => scrollToSection("features")}>
            Features
          </NavItem>
          <NavItem onClick={() => scrollToSection("personalization")}>
            Personalization
          </NavItem>
          <NavItem onClick={() => scrollToSection("academic")}>
            Academic
          </NavItem>
          <NavItem onClick={() => scrollToSection("contributors")}>
            Contributors
          </NavItem>
        </Nav>
      </Sidebar>

      {/* ============ Content ============ */}
      <Content>
        {/* ================= Hero ================= */}
        <Section id="hero">
          <Container>
            <HeroTitle>About FITFINDER</HeroTitle>
            <HeroSubtitle>
              A smart visual fashion discovery platform that turns inspiration
              into action.
            </HeroSubtitle>
          </Container>
        </Section>

        {/* ================= Introduction ================= */}
        <Section id="introduction" $alt>
          <Container>
            <Title>What is FITFINDER?</Title>
            <Text>
              FITFINDER is a web application that allows users to discover
              clothing items using images instead of traditional text-based
              searches.
            </Text>
            <Text>
              The platform uses intelligent image segmentation using (SAM),
              accurate embedding for images and text prompts by (OpenCLIP), and
              visual similarity search using (FAISS Index).
            </Text>
          </Container>
        </Section>

        {/* ================= How It Works ================= */}
        <Section id="how-it-works">
          <Container>
            <Title>How It Works</Title>
            <OrderedList>
              <li>Upload an image containing a person.</li>
              <li>Click Segment to highlight clothing pieces.</li>
              <li>Select the clothing item to segment.</li>
              <li>
                (Optionally) add positive/negative points and re-segment to
                refine the segmentation.
              </li>
              <li>The selected clothing item is cropped.</li>
              <li>(Optionally) add a text prompt to refine the search.</li>
              <li>Click search to retrieve similar products.</li>
              <li>Visit original product websites.</li>
            </OrderedList>
          </Container>
        </Section>

        {/* ================= User Access ================= */}
        <Section id="access" $alt>
          <Container>
            <Title>Accessible for Everyone</Title>
            <Text>
              FITFINDER can be used with <strong>or without</strong> an account.
            </Text>
            <List>
              <li>
                <strong>Guest Users:</strong> Free visual searching.
              </li>
              <li>
                <strong>Logged-In Users:</strong> History, favorites, and theme
                customization.
              </li>
            </List>
          </Container>
        </Section>

        {/* ================= Features ================= */}
        <Section id="features">
          <Container>
            <Title>Key Features</Title>
            <List>
              <li>Clothing segmentation from images</li>
              <li>Text prompting for refined searches</li>
              <li>Visual similarity search</li>
              <li>Search history</li>
              <li>Favorites system</li>
              <li>
                Recomendations system for similar products and most searched for
              </li>
              <li>Light, dark, and system themes</li>
            </List>
          </Container>
        </Section>

        {/* ================= Personalization ================= */}
        <Section id="personalization" $alt>
          <Container>
            <Title>Personalized Experience</Title>
            <Text>
              FITFINDER adapts to user preferences through responsive design and
              theming support.
            </Text>
          </Container>
        </Section>

        {/* ================= Academic Context ================= */}
        <Section id="academic">
          {" "}
          <Container>
            {" "}
            <Title>Academic Background</Title>{" "}
            <Text>
              {" "}
              FITFINDER is a graduation project developed by{" "}
              <strong>CSED2026 students Alexandria University</strong>. The
              project demonstrates the application of modern web development,
              software engineering principles, and intelligent image processing
              in a real-world scenario.{" "}
            </Text>{" "}
          </Container>{" "}
        </Section>

        {/* ================= Contributors ================= */}
        <Section id="contributors" $alt>
          <Container>
            <Title>Project Contributors</Title>
            <ContributorsList>
              <li>
                <strong>Ibrahim Mohamed</strong> — Frontend Engineer
              </li>
              <li>
                <strong>Ali Hassan</strong> — Frontend / Backend Engineer
              </li>
              <li>
                <strong>Naira Tarek</strong> — Backend Engineer
              </li>
              <li>
                <strong>Mohamed Abdelmonaem</strong> — AI Services / Backend
                Engineer
              </li>
              <li>
                <strong>Omnia Karem</strong> — AI Services / Backend Engineer
              </li>
            </ContributorsList>
          </Container>
        </Section>

        {/* ================= Footer ================= */}
        <Footer>
          © {new Date().getFullYear()} FITFINDER — CSED2026 Graduation Project
        </Footer>
      </Content>
    </Page>
  );
};

export default AboutUsPage;

/* ===========================
   Styled Components
=========================== */

const Page = styled.div`
  display: flex;
  padding-top: 1rem;
  scroll-behavior: smooth;
  color: var(--text-color);
  scroll-behavior: smooth; /* enable smooth scroll for anchor links */
`;

const Sidebar = styled.aside`
  position: sticky;
  top: 6rem;
  height: fit-content;
  margin-top: 1rem;
  margin-left: 1rem;
  width: 220px;
  padding: 2rem 1rem;
  box-shadow: 4px 4px 10px var(--back-drop-shadow-color);
  transition: all 0.25s ease-in-out;
  &:hover {
    scale: 1.02;
    transform: translateX(5px);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NavItem = styled.a`
  color: var(--text-color);
  font-size: 0.95rem;
  transition: all 0.5s ease-in-out;
  border-bottom: 1px none;
  text-decoration: none;
  padding-bottom: 1rem;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  &:hover {
    transform: translateX(5px);
    border-bottom: 1px solid var(--text-color);
  }

  /* &:hover::after {
    content: " →";
  } */
`;

const Content = styled.main`
  flex: 1;
`;

const Section = styled.section`
  padding: 4rem 1.5rem;
  background-color: ${({ $alt, theme }) =>
    $alt ? theme.surface : "transparent"};
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textSecondary};
  max-width: 700px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const List = styled.ul`
  padding-left: 1.2rem;
  margin-top: 1rem;

  li {
    margin-bottom: 0.75rem;
    line-height: 1.6;
  }
`;

const OrderedList = styled.ol`
  padding-left: 1.2rem;
  margin-top: 1rem;

  li {
    margin-bottom: 0.75rem;
    line-height: 1.6;
  }
`;

const ContributorsList = styled.ul`
  padding-left: 1.2rem;
  margin-top: 1rem;

  li {
    margin-bottom: 0.8rem;
    line-height: 1.6;
  }
`;

const Footer = styled.footer`
  padding: 2rem 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
  border-top: 1px solid ${({ theme }) => theme.border};
`;
