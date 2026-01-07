import styled, { keyframes } from "styled-components";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { useDevice } from "../providers/DeviceProvider";

export default function Footer({ navigationBlocked }) {
  const contactEmail = (email, subject = "", body = "") => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  const navigator = useNavigate();
  const { device } = useDevice();

  return (
    <FooterContainer device={device}>
      <TopSection device={device}>
        <BrandSection device={device}>
          <Logo
            fontSize={device === "mobile" ? 50 : 70}
            scale={0.3}
            variant={2}
          />
          <BrandText device={device}>Your perfect fit, our mission</BrandText>
        </BrandSection>

        <Section device={device}>
          <SectionTitle device={device}>Quick Links</SectionTitle>
          <LinksList device={device}>
            <Link
              device={device}
              onClick={() => navigator("/")}
              disabled={navigationBlocked}
            >
              Home
            </Link>
            <Link
              device={device}
              onClick={() => navigator("/about-us")}
              disabled={navigationBlocked}
            >
              About Us
            </Link>
            <Link
              device={device}
              onClick={() =>
                contactEmail(
                  "fitfindercsed@gmail.com",
                  "Inquiry about FITFINDER",
                  "Hello, I would like to know more about your platform..."
                )
              }
              disabled={navigationBlocked}
            >
              Contact
            </Link>
          </LinksList>
        </Section>

        <Section device={device}>
          <SectionTitle device={device}>Legal</SectionTitle>
          <LinksList device={device}>
            <Link
              device={device}
              onClick={() => navigator("/privacy-policy")}
              disabled={navigationBlocked}
            >
              Privacy Policy
            </Link>
            <Link
              device={device}
              onClick={() => navigator("/terms-of-service")}
              disabled={navigationBlocked}
            >
              Terms of Service
            </Link>
          </LinksList>
        </Section>
      </TopSection>

      <BottomSection device={device}>
        <Copyright device={device}>
          &copy; {new Date().getFullYear()} FitFinder. All rights reserved.
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

const Link = styled.a`
  color: var(--links-color);
  text-decoration: none;
  cursor: pointer;
  font-size: 0.938rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.005em;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
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
