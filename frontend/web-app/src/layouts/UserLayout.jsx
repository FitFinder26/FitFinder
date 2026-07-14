import { Outlet } from "react-router-dom";
// Assuming Navbar, Footer, and styled are imported correctly
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useState } from "react";

export default function UserLayout() {
    const [navigationBlocked, setNavigationBlocked] = useState(false);
    
    return (
        <Container>
            <Navbar navigationBlocked={navigationBlocked} />
            {/* WRAP THE OUTLET in a styled component to apply flex-grow: 1 */}
            <MainContent> 
                <Outlet context={{setNavigationBlocked}}/>
                <Footer navigationBlocked={navigationBlocked}/>
            </MainContent>
        </Container>
    );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* full viewport height, not min-height */
  overflow: hidden; /* prevents body scroll */
`;

const MainContent = styled.main`
  flex: 1;
  overflow-y: auto; /* internal scrolling here */
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;