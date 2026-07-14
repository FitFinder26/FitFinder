import { useEffect } from "react";
import styled from "styled-components";

const TermsOfServicePage = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth", // animate the scroll
        block: "start", // scroll to top of element
      });
    }
  };

  useEffect(() => scrollToSection("acceptance"), []);
  return (
    <Page>
      {/* ============ Sticky Sidebar ============ */}
      <Sidebar>
        <Nav>
          <NavItem onClick={() => scrollToSection("acceptance")}>
            Acceptance of Terms
          </NavItem>
          <NavItem onClick={() => scrollToSection("purpose")}>
            Purpose of the Application
          </NavItem>
          <NavItem onClick={() => scrollToSection("responsibilities")}>
            User Responsibilities
          </NavItem>
          <NavItem onClick={() => scrollToSection("usage")}>
            Account Usage
          </NavItem>
          <NavItem onClick={() => scrollToSection("extera")}>
            External Links
          </NavItem>
          <NavItem onClick={() => scrollToSection("liability")}>
            Limitation of Liability
          </NavItem>
          <NavItem onClick={() => scrollToSection("changes")}>
            Changes to These Terms
          </NavItem>
        </Nav>
      </Sidebar>

      {/* ============ Content ============ */}
      <Content>
        <Section>
          <Container>
            <HeroTitle>Terms of Service</HeroTitle>
            <HeroSubtitle>
              Please read these terms carefully before using FITFINDER.
            </HeroSubtitle>
          </Container>
        </Section>

        <Section id="acceptance">
          <Container>
            <Title>Acceptance of Terms</Title>
            <Text>
              By accessing or using FITFINDER, you agree to be bound by these
              Terms of Service. If you do not agree, please do not use the
              application.
            </Text>
          </Container>
        </Section>

        <Section id="purpose">
          <Container>
            <Title>Purpose of the Application</Title>
            <Text>
              FITFINDER is an academic graduation project designed for research,
              learning, and demonstration purposes. It is not a commercial
              service.
            </Text>
          </Container>
        </Section>

        <Section id="responsibilities">
          <Container>
            <Title>User Responsibilities</Title>
            <List>
              <li>Do not upload illegal or inappropriate content</li>
              <li>
                Use the application for personal and academic purposes only
              </li>
              <li>Respect intellectual property rights</li>
            </List>
          </Container>
        </Section>

        <Section id="usage">
          <Container>
            <Title>Account Usage</Title>
            <Text>
              Users may use FITFINDER with or without an account. Logged-in
              users are responsible for maintaining the confidentiality of their
              account information.
            </Text>
          </Container>
        </Section>

        <Section id="extera">
          <Container>
            <Title>External Links</Title>
            <Text>
              FITFINDER may provide links to third-party websites. We do not
              control and are not responsible for the content or practices of
              those websites.
            </Text>
          </Container>
        </Section>

        <Section id="liability">
          <Container>
            <Title>Limitation of Liability</Title>
            <Text>
              FITFINDER is provided "as is" without warranties of any kind. The
              developers are not liable for any damages arising from the use of
              this application.
            </Text>
          </Container>
        </Section>

        <Section id="changes">
          <Container>
            <Title>Changes to These Terms</Title>
            <Text>
              These terms may be updated as the project evolves. Continued use
              of FITFINDER implies acceptance of the updated terms.
            </Text>
          </Container>
        </Section>

        <Footer>
          © {new Date().getFullYear()} FITFINDER — Terms of Service
        </Footer>
      </Content>
    </Page>
  );
};

export default TermsOfServicePage;

/* ===== Same Styled Components ===== */

const Page = styled.div`
  display: flex;
  color: var(--text-color);
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
  margin: 1rem;
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
