import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../locales/namespaces";

const AboutUsPage = () => {
  const { t } = useTranslation(NAMESPACES.about);
  const { i18n } = useTranslation();
  const location = useLocation();
  const { toSection } = location.state || {};
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth", // animate the scroll
        block: "start", // scroll to top of element
      });
    }
  };

  useEffect(() => scrollToSection(toSection || "hero"), []);

  return (
    <Page>
      {/* ============ Sticky Sidebar ============ */}
      <Sidebar $language={i18n.language}>
        <nav aria-label={t("aboutSidebarNav") || "About page navigation"}>
          <SidebarList>
            <li>
              <SidebarButton
                type="button"
                onClick={() => scrollToSection("hero")}
                tabIndex={0}
                aria-label={t("navAbout")}
              >
                {t("navAbout")}
              </SidebarButton>
            </li>
            <li>
              <SidebarButton
                type="button"
                onClick={() => scrollToSection("introduction")}
                tabIndex={0}
                aria-label={t("navIntroduction")}
              >
                {t("navIntroduction")}
              </SidebarButton>
            </li>
            <li>
              <SidebarButton
                type="button"
                onClick={() => scrollToSection("how-it-works")}
                tabIndex={0}
                aria-label={t("navHowItWorks")}
              >
                {t("navHowItWorks")}
              </SidebarButton>
            </li>
            <li>
              <SidebarButton
                type="button"
                onClick={() => scrollToSection("access")}
                tabIndex={0}
                aria-label={t("navUserAccess")}
              >
                {t("navUserAccess")}
              </SidebarButton>
            </li>
            <li>
              <SidebarButton
                type="button"
                onClick={() => scrollToSection("features")}
                tabIndex={0}
                aria-label={t("navFeatures")}
              >
                {t("navFeatures")}
              </SidebarButton>
            </li>
            <li>
              <SidebarButton
                type="button"
                onClick={() => scrollToSection("personalization")}
                tabIndex={0}
                aria-label={t("navPersonalization")}
              >
                {t("navPersonalization")}
              </SidebarButton>
            </li>
            <li>
              <SidebarButton
                type="button"
                onClick={() => scrollToSection("academic")}
                tabIndex={0}
                aria-label={t("navAcademic")}
              >
                {t("navAcademic")}
              </SidebarButton>
            </li>
            <li>
              <SidebarButton
                type="button"
                onClick={() => scrollToSection("contributors")}
                tabIndex={0}
                aria-label={t("navContributors")}
              >
                {t("navContributors")}
              </SidebarButton>
            </li>
          </SidebarList>
        </nav>
      </Sidebar>

      {/* ============ Content ============ */}
      <Content>
        {/* ================= Hero ================= */}
        <Section id="hero">
          <Container>
            <HeroTitle>{t("heroTitle")}</HeroTitle>
            <HeroSubtitle>{t("heroSubtitle")}</HeroSubtitle>
          </Container>
        </Section>

        {/* ================= Introduction ================= */}
        <Section id="introduction" $alt>
          <Container>
            <Title>{t("introTitle")}</Title>
            <Text>{t("introText1")}</Text>
            <Text>{t("introText2")}</Text>
          </Container>
        </Section>

        {/* ================= How It Works ================= */}
        <Section id="how-it-works">
          <Container>
            <Title>{t("howItWorksTitle")}</Title>
            <DemoVideoContainer>
              <DemoVideo
                controls
                src="https://www.dropbox.com/scl/fi/wtzwj2trdhnd611o44mg5/How-to-use.mp4?rlkey=n6xa1fwtukjud63ujsg3g6ob1&st=h8i4vpfb&raw=1"
                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f79b4e' width='400' height='300'/%3E%3C/svg%3E"
              />
            </DemoVideoContainer>
            <OrderedList $language={i18n.language}>
              <li>{t("step1")}</li>
              <li>{t("step2")}</li>
              <li>{t("step3")}</li>
              <li>{t("step4")}</li>
              <li>{t("step5")}</li>
              <li>{t("step6")}</li>
              <li>{t("step7")}</li>
              <li>{t("step8")}</li>
            </OrderedList>
          </Container>
        </Section>

        {/* ================= User Access ================= */}
        <Section id="access" $alt>
          <Container>
            <Title>{t("accessTitle")}</Title>
            <Text>
              {t("accessText")} <strong>{t("accessOrWithout")}</strong>{" "}
              {t("accessAccount")}
            </Text>
            <List $language={i18n.language}>
              <li>
                <strong>{t("guestUsers")}</strong> {t("guestDesc")}
              </li>
              <li>
                <strong>{t("loggedInUsers")}</strong> {t("loggedInDesc")}
              </li>
            </List>
          </Container>
        </Section>

        {/* ================= Features ================= */}
        <Section id="features">
          <Container>
            <Title>{t("featuresTitle")}</Title>
            <List $language={i18n.language}>
              <li>{t("feature1")}</li>
              <li>{t("feature2")}</li>
              <li>{t("feature3")}</li>
              <li>{t("feature4")}</li>
              <li>{t("feature5")}</li>
              <li>{t("feature6")}</li>
              <li>{t("feature7")}</li>
            </List>
          </Container>
        </Section>

        {/* ================= Personalization ================= */}
        <Section id="personalization" $alt>
          <Container>
            <Title>{t("personalizationTitle")}</Title>
            <Text>{t("personalizationText")}</Text>
          </Container>
        </Section>

        {/* ================= Academic Context ================= */}
        <Section id="academic">
          {" "}
          <Container>
            {" "}
            <Title>{t("academicTitle")}</Title>{" "}
            <Text>
              {" "}
              {t("academicText1")} <strong>{t("academicText2")}</strong>
              {t("academicText3")}{" "}
            </Text>{" "}
          </Container>{" "}
        </Section>

        {/* ================= Contributors ================= */}
        <Section id="contributors" $alt>
          <Container>
            <Title>{t("contributorsTitle")}</Title>
            <ContributorsList $language={i18n.language}>
              <li>
                <strong>{t("contributor1Name")}</strong> —{" "}
                {t("contributor1Role")}
              </li>
              <li>
                <strong>{t("contributor2Name")}</strong> —{" "}
                {t("contributor2Role")}
              </li>
              <li>
                <strong>{t("contributor3Name")}</strong> —{" "}
                {t("contributor3Role")}
              </li>
              <li>
                <strong>{t("contributor4Name")}</strong> —{" "}
                {t("contributor4Role")}
              </li>
              <li>
                <strong>{t("contributor5Name")}</strong> —{" "}
                {t("contributor5Role")}
              </li>
            </ContributorsList>
          </Container>
        </Section>

        {/* ================= Footer ================= */}
        <Footer>
          © {new Date().getFullYear()} {t("footerText")}
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

const SidebarList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SidebarButton = styled.button`
  color: var(--text-color);
  font-size: 0.95rem;
  background: none;
  border: none;
  text-align: left;
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover,
  &:focus {
    transform: translateX(5px);
    border-bottom: 1px solid var(--text-color);
  }
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
  ${(props) =>
    props.$language === "ar"
      ? `padding-right: 1.2rem;`
      : `padding-left: 1.2rem;`}

  margin-top: 1rem;

  li {
    margin-bottom: 0.75rem;
    line-height: 1.6;
  }
`;

const OrderedList = styled.ol`
  ${(props) =>
    props.$language === "ar"
      ? `padding-right: 1.2rem;`
      : `padding-left: 1.2rem;`}
  margin-top: 1rem;

  li {
    margin-bottom: 0.75rem;
    line-height: 1.6;
  }
`;

const DemoVideoContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 2rem 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const DemoVideo = styled.video`
  width: 100%;
  height: auto;
  display: block;
  background-color: #000;

  &:focus {
    outline: 2px solid var(--primary-color);
  }
`;

const ContributorsList = styled.ul`
  ${(props) =>
    props.$language === "ar"
      ? `padding-right: 1.2rem;`
      : `padding-left: 1.2rem;`}

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
