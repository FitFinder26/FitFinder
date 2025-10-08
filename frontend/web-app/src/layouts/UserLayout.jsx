import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";

export default function UserLayout() {

    const toggleRegistrationForm = (form) => {
        if (form == 'login'){
            container.classList.remove('sign-up');
            container.classList.add('sign-in');
        }
        else{
            container.classList.remove('sign-in');
            container.classList.add('sign-up'); 
        }
    }

    return (
        <Container>
            <Navbar toggleRegistrationForm={toggleRegistrationForm} />
            <Outlet />
            <Footer />
        </Container>
    );
};


const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;
