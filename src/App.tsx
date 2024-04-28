import styled from "@emotion/styled";
import { Navigate, Route, Routes } from "react-router-dom";

import Footer from "src/components/Footer";
import Header from "src/components/Header";
import Home from "src/pages/Home";
import { HOME_PATH } from "src/utils/constant";

const AppLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyLayout = styled.div`
  width: 1240px;
  height: 100%;
  background-color: ${(props) => props.theme.color.blueViolet};
`;

function App() {
  return (
    <AppLayout>
      <Header />
      <BodyLayout>
        <Routes>
          <Route path={HOME_PATH} element={<Home />} />
          {/*  */}
          <Route path="*" element={<Navigate replace to={HOME_PATH} />} />
        </Routes>
      </BodyLayout>
      <Footer />
    </AppLayout>
  );
}

export default App;
