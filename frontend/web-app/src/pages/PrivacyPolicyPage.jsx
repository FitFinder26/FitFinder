import { useEffect } from "react";
import styled from "styled-components";

const PrivacyPolicyPage = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth", // animate the scroll
        block: "start", // scroll to top of element
      });
    }
  };

  useEffect(() => scrollToSection("introduction"), []);
  return (
    <Page>
      {/* ============ Sticky Sidebar ============ */}
      <Sidebar>
        <Nav>
          <NavItem onClick={() => scrollToSection("introduction")}>
            Introduction
          </NavItem>
          <NavItem onClick={() => scrollToSection("information")}>
            Information We Collect
          </NavItem>
          <NavItem onClick={() => scrollToSection("information-usage")}>
            How We Use Your Information
          </NavItem>
          <NavItem onClick={() => scrollToSection("storage")}>
            Data Storage
          </NavItem>
          <NavItem onClick={() => scrollToSection("third-party")}>
            Third-Party Services
          </NavItem>
          <NavItem onClick={() => scrollToSection("choices")}>
            User Choices
          </NavItem>
        </Nav>
      </Sidebar>

      {/* ============ Content ============ */}
      <Content>
        <Section>
          <Container>
            <HeroTitle>Privacy Policy</HeroTitle>
            <HeroSubtitle>
              Your privacy matters to us at FITFINDER.
            </HeroSubtitle>
          </Container>
        </Section>

        <Section id="introduction">
          <Container>
            <Title>Introduction</Title>
            <Text>
              FITFINDER is a graduation project developed by CSED2026 students
              at Alexandria University. This Privacy Policy explains how we
              handle user data while using the FITFINDER web application.
            </Text>
          </Container>
        </Section>

        <Section id="information">
          <Container>
            <Title>Information We Collect</Title>
            <List>
              <li>Images uploaded by users for visual search purposes</li>
              <li>Search history for logged-in users</li>
              <li>Favorite products saved by logged-in users</li>
              <li>Basic authentication data for registered users</li>
              <li>
                Profile image for logged-in users <small>(Optional)</small>
              </li>
            </List>
          </Container>
        </Section>

        <Section id="information-usage">
          <Container>
            <Title>How We Use Your Information</Title>
            <List>
              <li>To perform clothing segmentation and visual search</li>
              <li>To improve search accuracy and user experience</li>
              <li>To improve recommendation system</li>
              <li>To provide features such as history and favorites</li>
              <li>For academic and demonstration purposes only</li>
            </List>
          </Container>
        </Section>

        <Section id="storage">
          <Container>
            <Title>Data Storage</Title>
            <Text>
              Uploaded images and related data are stored only for the duration
              necessary to provide the requested functionality. FITFINDER is not
              intended for commercial use and <strong>does not sell</strong>{" "}
              user data.
            </Text>
          </Container>
        </Section>

        <Section id="third-party">
          <Container>
            <Title>Third-Party Services</Title>
            <Text>
              FITFINDER may redirect users to third-party websites to view or
              purchase products. We are not responsible for the privacy
              practices of those external websites.
            </Text>
          </Container>
        </Section>

        <Section id="choices">
          <Container>
            <Title>User Choices</Title>
            <Text>
              Users may choose to use FITFINDER without creating an account.
              Logged-in users may manage their history and favorite items at any
              time.
            </Text>
          </Container>
        </Section>

        <Footer>© {new Date().getFullYear()} FITFINDER — Privacy Policy</Footer>
      </Content>
    </Page>
  );
};

export default PrivacyPolicyPage;

/* ===== Styled Components (same layout as AboutUs) ===== */

const Page = styled.div`
  display: flex;
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
  color: var(--text-color);
  margin-top: 1rem;
`;

const Section = styled.section`
  padding: 4rem 1.5rem;
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
  color: var(--text-color);
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  line-height: 1.7;
  color: var(--text-color);
`;

const List = styled.ul`
  padding-left: 1.2rem;

  li {
    margin-bottom: 0.75rem;
  }
`;

const Footer = styled.footer`
  padding: 2rem;
  text-align: center;
  color: var(--text-color);
  border-top: 1px solid var(--text-color);
`;
