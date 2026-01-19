import styled, { keyframes } from "styled-components";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { useDevice } from "../providers/DeviceProvider";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../locales/namespaces";

export default function Footer({ navigationBlocked }) {
  const { t } = useTranslation(NAMESPACES.footer);
  const { t: tCommon } = useTranslation(NAMESPACES.common);
  const { device } = useDevice();
  // For accessibility, use real <a> with href, and semantic nav/ul/li
  return (
    <FooterContainer device={device}>
      <TopSection device={device}>
        <BrandSection device={device}>
          <Logo
            fontSize={device === "mobile" ? 50 : 70}
            scale={0.3}
            variant={2}
          />
          <BrandText device={device}>{t("tagline")}</BrandText>
        </BrandSection>

        <Section device={device} as="nav" aria-label={t("quickLinks") + ' ' + tCommon("appName")}>
          <SectionTitle device={device}>{t("quickLinks")}</SectionTitle>
          <LinksList device={device} as="ul">
            <li>
              <FooterLink
                device={device}
                href="/"
                tabIndex={navigationBlocked ? -1 : 0}
                aria-disabled={navigationBlocked}
              >
                {t("home")}
              </FooterLink>
            </li>
            <li>
              <FooterLink
                device={device}
                href="/about-us"
                tabIndex={navigationBlocked ? -1 : 0}
                aria-disabled={navigationBlocked}
              >
                {t("about")}
              </FooterLink>
            </li>
            <li>
              <FooterLink
                device={device}
                href={`mailto:fitfindercsed@gmail.com?subject=${encodeURIComponent(t("contactSubject", { appName: tCommon("appName") }))}&body=${encodeURIComponent(t("contactBody"))}`}
                tabIndex={navigationBlocked ? -1 : 0}
                aria-disabled={navigationBlocked}
              >
                {t("contact")}
              </FooterLink>
            </li>
          </LinksList>
        </Section>

        <Section device={device} as="nav" aria-label={t("legal") + ' ' + tCommon("appName")}>
          <SectionTitle device={device}>{t("legal")}</SectionTitle>
          <LinksList device={device} as="ul">
            <li>
              <FooterLink
                device={device}
                href="/privacy-policy"
                tabIndex={navigationBlocked ? -1 : 0}
                aria-disabled={navigationBlocked}
              >
                {t("privacy")}
              </FooterLink>
            </li>
            <li>
              <FooterLink
                device={device}
                href="/terms-of-service"
                tabIndex={navigationBlocked ? -1 : 0}
                aria-disabled={navigationBlocked}
              >
                {t("terms")}
              </FooterLink>
            </li>
          </LinksList>
        </Section>
      </TopSection>

      <BottomSection device={device}>
        <Copyright device={device}>
          {t("copyright", {
            year: new Date().getFullYear(),
            appName: tCommon("appName"),
          })}
        </Copyright>
      </BottomSection>
    </FooterContainer>
  );
}

const slideUp = keyframes`
    from{
        transform: translateY(10%);
    }  
    to{
        transform: translateY(0%);
    }
`;

const FooterContainer = styled.footer`
  color: var(--text-color);
  padding: ${(props) => {
    switch (props.device) {
      case "mobile":
        return "2rem 1.5rem";
      case "tablet":
        return "2rem 2rem";
      default:
        return "2rem 3rem";
    }
  }};

  ${(props) => props.device === "mobile" && "padding-bottom: 4.5rem"};
  width: 100%;
  max-width: 100%;
  bottom: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0 -2px 5px var(--back-drop-shadow-color);
  animation: ${slideUp} 1s;
  margin-top: auto;
  box-sizing: border-box;
  background-image: var(--footer-bg-image);

  @media (max-width: var(--tablet)) {
    padding: 2rem 2rem;
  }

  @media (max-width: var(--mobile)) {
    padding: 2rem 1.5rem;
  }
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: ${(props) => {
    switch (props.device) {
      case "mobile":
        return "1fr";
      case "tablet":
        return "1fr 1fr";
      default:
        return "2fr 1fr 1fr";
    }
  }};
  gap: ${(props) => (props.device === "mobile" ? "2rem" : "3rem")};
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--back-drop-shadow-color);

  @media (max-width: var(--tablet)) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: var(--mobile)) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.device === "mobile" ? "center" : "flex-start"};
  gap: 0.5rem;

  @media (max-width: var(--mobile)) {
    align-items: center;
  }
`;

const BrandText = styled.p`
  margin: 0;
  font-size: ${(props) => (props.device === "mobile" ? "0.938rem" : "1rem")};
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.01em;
  color: var(--text-color);
  opacity: 0.8;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.device === "mobile" ? "center" : "flex-start"};
  gap: 1rem;

  @media (max-width: var(--mobile)) {
    align-items: center;
  }
`;

const SectionTitle = styled.h3`
  margin: 0;
  font-size: ${(props) =>
    props.device === "mobile" ? "1.063rem" : "1.125rem"};
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -0.01em;
  color: var(--text-color);
`;

const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  list-style-type: none;
  align-items: ${(props) =>
    props.device === "mobile" ? "center" : "flex-start"};

  @media (max-width: var(--mobile)) {
    align-items: center;
  }
`;

const BottomSection = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 4rem;
  text-align: center;
`;

const FooterLink = styled.a`
  color: var(--links-color);
  text-decoration: none;
  cursor: pointer;
  font-size: 0.938rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.005em;
  transition: opacity 0.2s ease;
  outline: none;
  &:hover, &:focus {
    opacity: 0.7;
    text-decoration: underline;
  }
  &[aria-disabled="true"] {
    pointer-events: none;
    opacity: 0.5;
    text-decoration: none;
  }
  @media (max-width: var(--mobile)) {
    font-size: 0.875rem;
  }
`;

const Copyright = styled.span`
  font-size: ${(props) => {
    switch (props.device) {
      case "mobile":
        return "0.813rem";
      case "tablet":
        return "0.875rem";
      default:
        return "0.875rem";
    }
  }};
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.01em;
  opacity: 0.75;

  @media (max-width: var(--tablet)) {
    font-size: 0.875rem;
  }

  @media (max-width: var(--mobile)) {
    font-size: 0.813rem;
  }
`;
