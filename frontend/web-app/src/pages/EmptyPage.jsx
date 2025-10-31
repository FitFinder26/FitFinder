import { Link } from "react-router-dom";
const EmptyPage = () =>{

    return(
        <Container>
            <h1> 404! This is an empty page</h1>
            <Link to={'/'}>Go Home</Link>
        </Container>
    );
};
export default EmptyPage;

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
    text-align: center;
    margin-top: 4.5rem;
`;
