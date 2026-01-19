import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useState } from "react";
import SideBar from "../components/SideBar";
import { useDevice } from "../providers/DeviceProvider";
import { useAuthContext } from "../providers/AuthProvider";
import { useTranslation } from "react-i18next";

export default function UserLayout() {
  const [navigationBlocked, setNavigationBlocked] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const { isAuthenticated } = useAuthContext();
  const { t } = useTranslation("common");

  return (
    <Container>
      <SkipLink href="#main-content">{t("skipToMainContent")}</SkipLink>
      <Header role="banner">
        <Navbar
          navigationBlocked={navigationBlocked}
          setIsSideBarOpen={setIsSideBarOpen}
        />
      </Header>
      {isAuthenticated() && (
        <SideBar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen}>
          <div />
        </SideBar>
      )}
      <MainContent as="main" id="main-content" tabIndex={-1} role="main">
        <Outlet context={{ setNavigationBlocked }} />
        <Footer navigationBlocked={navigationBlocked} />
      </MainContent>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: var(--bg-color);
  transition: 0.5s ease-in-out;
  @supports (height: 100dvh) {
    min-height: 100dvh;
  }
`;

const Header = styled.header`
  width: 100%;
  z-index: 100;
`;

const MainContent = styled.section`
  flex: 1;
  overflow-y: auto; /* internal scrolling here */
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
/* Visually hidden skip link for accessibility */
const SkipLink = styled.a`
  position: absolute;
  left: -999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: 9999;
  background: #fff;
  color: #000;
  padding: 0.5em 1em;
  border-radius: 4px;

  &:focus {
    left: 1rem;
    top: 1rem;
    width: auto;
    height: auto;
    outline: 2px solid #333;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }
`;