import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useState } from "react";

export default function UserLayout() {
    const [navigationBlocked, setNavigationBlocked] = useState(false);
    return (
        <Container>
            <Navbar navigationBlocked={navigationBlocked} />
            <Outlet context={{setNavigationBlocked}}/>
            <Footer navigationBlocked={navigationBlocked}/>
        </Container>
    );
};


const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;
