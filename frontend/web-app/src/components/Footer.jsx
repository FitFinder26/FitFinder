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
      <LinksWrapper device={device}>
        <Logo
          fontSize={device === "mobile" ? 50 : 70}
          scale={0.3}
          variant={2}
        />
        <Link
          device={device}
          onClick={() => navigator("/about-us")}
          disabled={navigationBlocked}
        >
          About us
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
      </LinksWrapper>
      <LinksWrapper device={device}>
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
        <Copyright device={device}>
          &copy; {new Date().getFullYear()} FitFinder. All rights reserved.
        </Copyright>
      </LinksWrapper>
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
        return "1rem 0.5rem";
      case "tablet":
        return "1rem";
      default:
        return "1rem";
    }
  }};

  ${(props) => props.device === "mobile" && "padding-bottom: 4rem"};
  text-align: center;
  width: 100%;
  max-width: 100%;
  bottom: 0;
  height: auto;
  display: flex;
  flex-direction: ${(props) => (props.device === "mobile" ? "column" : "row")};
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => (props.device === "mobile" ? "1rem" : "0")};
  box-shadow: 0 -2px 5px var(--back-drop-shadow-color);
  animation: ${slideUp} 1s;
  margin-top: auto;
  box-sizing: border-box;

  @media (max-width: var(--tablet)) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0.5rem;
  }

  @media (max-width: var(--mobile)) {
    padding: 0.75rem 0.5rem;
    gap: 0.75rem;
  }
`;

const Link = styled.a`
  color: var(--links-color);
  text-decoration: none;
  display: inline-block;
  margin: 0 ${(props) => (props.device === "mobile" ? "0.25rem" : "0.5rem")};
  cursor: pointer;
  font-size: ${(props) => {
    switch (props.device) {
      case "mobile":
        return "0.85rem";
      case "tablet":
        return "0.95rem";
      default:
        return "1rem";
    }
  }};

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: var(--tablet)) {
    font-size: 0.9rem;
    margin: 0 0.3rem;
  }

  @media (max-width: var(--mobile)) {
    font-size: 0.8rem;
    margin: 0 0.25rem;
  }
`;

const LinksWrapper = styled.div`
  display: grid;
  gap: ${(props) => {
    switch (props.device) {
      case "mobile":
        return "0.5rem";
      case "tablet":
        return "0.75rem";
      default:
        return "1rem";
    }
  }};
  grid-auto-flow: ${(props) => (props.device === "mobile" ? "row" : "column")};
  align-items: center;
  justify-content: ${(props) =>
    props.device === "mobile" ? "center" : "space-evenly"};

  @media (max-width: var(--tablet)) {
    grid-auto-flow: row;
    gap: 0.5rem;
    justify-content: center;
  }

  @media (max-width: var(--mobile)) {
    gap: 0.4rem;
  }
`;

const Copyright = styled.span`
  font-size: ${(props) => {
    switch (props.device) {
      case "mobile":
        return "0.75rem";
      case "tablet":
        return "0.85rem";
      default:
        return "0.9rem";
    }
  }};

  @media (max-width: var(--tablet)) {
    font-size: 0.85rem;
  }

  @media (max-width: var(--mobile)) {
    font-size: 0.75rem;
  }
`;
