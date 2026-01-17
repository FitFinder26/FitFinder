import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "../locales/namespaces";

const EmptyPage = () => {
  const { t } = useTranslation(NAMESPACES.common);
  return (
    <Container>
      <h1>{t("error404")}</h1>
      <Link to={"/"}>{t("goHome")}</Link>
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
  /* background-color: #f0f0f0; */
  text-align: center;
  margin-top: 4.5rem;
  color: var(--text-color);
`;
