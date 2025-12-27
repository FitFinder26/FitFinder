import styled, { keyframes } from "styled-components";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

export default function Footer({ navigationBlocked }) {
  const contactEmail = (email, subject = "", body = "") => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  const navigator = useNavigate();

  return (
    <FooterContainer>
      <LinksWrapper>
        <Logo fontSize={70} scale={0.3} variant={2} />
        <Link
          onClick={() => navigator("/about-us")}
          disabled={navigationBlocked}
        >
          About us
        </Link>
        <Link
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
      <LinksWrapper>
        <Link
          onClick={() => navigator("/privacy-policy")}
          disabled={navigationBlocked}
        >
          Privacy Policy
        </Link>
        <Link
          onClick={() => navigator("/terms-of-service")}
          disabled={navigationBlocked}
        >
          Terms of Service
        </Link>
        &copy; {new Date().getFullYear()} FitFinder. All rights reserved.
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
  /* background-color: var(--bg-color); */
  color: var(--text-color);
  padding: 1rem;
  text-align: center;
  /* z-index: 1000; */
  /* position: absolute; */
  width: 100%;
  bottom: 0;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -2px 5px var(--back-drop-shadow-color);
  animation: ${slideUp} 1s;
  margin-top: auto; /* pushes footer to bottom */
`;

const Link = styled.a`
  color: var(--links-color);
  text-decoration: none;
  display: inline-block;
  margin: 0 0.5rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const LinksWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-evenly;
`;
