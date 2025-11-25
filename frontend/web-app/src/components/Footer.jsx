import styled from "styled-components";
import Logo from "./Logo";

export default function Footer({ navigationBlocked }){
    return (
        <FooterContainer>
            <LinksWrapper>
                <Logo fontSize={70} scale={0.3} variant={2} />
                <Link onClick={() => navigate('/about')}
                    disabled={navigationBlocked}>About us</Link>
                <Link onClick={() => navigate('/contact')}
                    disabled={navigationBlocked}>Contact</Link>
            </LinksWrapper>
            <LinksWrapper>
                <Link onClick={() => navigate('/privacy-policy')}
                    disabled={navigationBlocked}>Privacy Policy</Link>
                <Link onClick={() => navigate('/terms-of-service')}
                    disabled={navigationBlocked}>Terms of Service</Link>
                &copy; 2024 FitFinder. All rights reserved.
            </LinksWrapper>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    background-color: #ffffff;
    padding: 1rem;
    text-align: center;
    z-index: 1000;
    position: absolute;
    width: 100%;
    bottom: 0;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

const Link = styled.a`
    color: #555;
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
