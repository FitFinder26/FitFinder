import { useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../locales/namespaces";

const TermsOfServicePage = () => {
  const { t } = useTranslation(NAMESPACES.terms);
  const { i18n } = useTranslation();
  const { t: tCommon } = useTranslation(NAMESPACES.common);
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
      <Sidebar $language={i18n.language}>
        <Nav>
          <NavItem onClick={() => scrollToSection("acceptance")}>
            {t("navAcceptance")}
          </NavItem>
          <NavItem onClick={() => scrollToSection("purpose")}>
            {t("navPurpose")}
          </NavItem>
          <NavItem onClick={() => scrollToSection("responsibilities")}>
            {t("navResponsibilities")}
          </NavItem>
          <NavItem onClick={() => scrollToSection("usage")}>
            {t("navUsage")}
          </NavItem>
          <NavItem onClick={() => scrollToSection("extera")}>
            {t("navExternalLinks")}
          </NavItem>
          <NavItem onClick={() => scrollToSection("liability")}>
            {t("navLiability")}
          </NavItem>
          <NavItem onClick={() => scrollToSection("changes")}>
            {t("navChanges")}
          </NavItem>
        </Nav>
      </Sidebar>

      {/* ============ Content ============ */}
      <Content>
        <Section>
          <Container>
            <HeroTitle>{t("heroTitle")}</HeroTitle>
            <HeroSubtitle>
              {t("heroSubtitle", { appName: tCommon("appName") })}
            </HeroSubtitle>
          </Container>
        </Section>

        <Section id="acceptance">
          <Container>
            <Title>{t("acceptanceTitle")}</Title>
            <Text>{t("acceptanceBody", { appName: tCommon("appName") })}</Text>
          </Container>
        </Section>

        <Section id="purpose">
          <Container>
            <Title>{t("purposeTitle")}</Title>
            <Text>{t("purposeBody", { appName: tCommon("appName") })}</Text>
          </Container>
        </Section>

        <Section id="responsibilities">
          <Container>
            <Title>{t("responsibilitiesTitle")}</Title>
            <List $language={i18n.language}>
              {t("responsibilitiesItems", { returnObjects: true }).map(
                (item, idx) => (
                  <li key={idx}>{item}</li>
                )
              )}
            </List>
          </Container>
        </Section>

        <Section id="usage">
          <Container>
            <Title>{t("usageTitle")}</Title>
            <Text>{t("usageBody", { appName: tCommon("appName") })}</Text>
          </Container>
        </Section>

        <Section id="extera">
          <Container>
            <Title>{t("externalLinksTitle")}</Title>
            <Text>
              {t("externalLinksBody", { appName: tCommon("appName") })}
            </Text>
          </Container>
        </Section>

        <Section id="liability">
          <Container>
            <Title>{t("liabilityTitle")}</Title>
            <Text>{t("liabilityBody", { appName: tCommon("appName") })}</Text>
          </Container>
        </Section>

        <Section id="changes">
          <Container>
            <Title>{t("changesTitle")}</Title>
            <Text>{t("changesBody", { appName: tCommon("appName") })}</Text>
          </Container>
        </Section>

        <Footer>
          {t("footer", {
            year: new Date().getFullYear(),
            appName: tCommon("appName"),
          })}
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
