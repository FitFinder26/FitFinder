import { Outlet } from "react-router-dom";
// Assuming Navbar, Footer, and styled are imported correctly
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useState } from "react";
import SideBar from "../components/SideBar";
import { useDevice } from "../providers/DeviceProvider";
import { useAuthContext } from "../providers/AuthProvider";

export default function UserLayout() {
  const [navigationBlocked, setNavigationBlocked] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const { isAuthenticated } = useAuthContext();

  return (
    <Container>
      <Navbar
        navigationBlocked={navigationBlocked}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      {isAuthenticated() && (
        <SideBar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen}>
          <div />
        </SideBar>
      )}

      {/* WRAP THE OUTLET in a styled component to apply flex-grow: 1 */}
      <MainContent>
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

const MainContent = styled.main`
  flex: 1;
  overflow-y: auto; /* internal scrolling here */
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
