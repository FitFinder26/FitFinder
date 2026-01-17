import { useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../locales/namespaces";

const PrivacyPolicyPage = () => {
  const { t } = useTranslation(NAMESPACES.privacy);
  const { i18n } = useTranslation();
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
      <Sidebar $language={i18n.language}>
        <Nav>
          <NavItem onClick={() => scrollToSection("introduction")}>
            {t("navIntroduction")}
          </NavItem>
          <NavItem onClick={() => scrollToSection("information")}>
            {t("navInformation")}
          </NavItem>
          <NavItem onClick={() => scrollToSection("information-usage")}>
            {t("navInformationUsage")}
          </NavItem>
          <NavItem onClick={() => scrollToSection("storage")}>
            {t("navStorage")}
          </NavItem>
          <NavItem onClick={() => scrollToSection("third-party")}>
            {t("navThirdParty")}
          </NavItem>
          <NavItem onClick={() => scrollToSection("choices")}>
            {t("navChoices")}
          </NavItem>
        </Nav>
      </Sidebar>

      {/* ============ Content ============ */}
      <Content>
        <Section>
          <Container>
            <HeroTitle>{t("heroTitle")}</HeroTitle>
            <HeroSubtitle>{t("heroSubtitle")}</HeroSubtitle>
          </Container>
        </Section>

        <Section id="introduction">
          <Container>
            <Title>{t("introTitle")}</Title>
            <Text>{t("introText")}</Text>
          </Container>
        </Section>

        <Section id="information">
          <Container>
            <Title>{t("informationTitle")}</Title>
            <List $language={i18n.language}>
              <li>{t("infoItem1")}</li>
              <li>{t("infoItem2")}</li>
              <li>{t("infoItem3")}</li>
              <li>{t("infoItem4")}</li>
              <li>{t("infoItem5")}</li>
            </List>
          </Container>
        </Section>

        <Section id="information-usage">
          <Container>
            <Title>{t("usageTitle")}</Title>
            <List $language={i18n.language}>
              <li>{t("usageItem1")}</li>
              <li>{t("usageItem2")}</li>
              <li>{t("usageItem3")}</li>
              <li>{t("usageItem4")}</li>
              <li>{t("usageItem5")}</li>
            </List>
          </Container>
        </Section>

        <Section id="storage">
          <Container>
            <Title>{t("storageTitle")}</Title>
            <Text>
              {t("storageText1")} <strong>{t("storageStrong")}</strong>{" "}
              {t("storageText2")}
            </Text>
          </Container>
        </Section>

        <Section id="third-party">
          <Container>
            <Title>{t("thirdPartyTitle")}</Title>
            <Text>{t("thirdPartyText")}</Text>
          </Container>
        </Section>

        <Section id="choices">
          <Container>
            <Title>{t("choicesTitle")}</Title>
            <Text>{t("choicesText")}</Text>
          </Container>
        </Section>

        <Footer>
          © {new Date().getFullYear()} {t("footer")}
        </Footer>
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
  ${(props) =>
    props.$language === "ar" ? `margin-left: 1rem;` : `margin-right: 1rem;`}

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
  ${(props) =>
    props.$language === "ar"
      ? `padding-right: 1.2rem;`
      : `padding-left: 1.2rem;`}

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
