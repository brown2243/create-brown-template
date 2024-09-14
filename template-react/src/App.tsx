import styled from "@emotion/styled";
import { Navigate, Route, Routes } from "react-router-dom";

import { PATH } from "src/common/constant";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import Home from "src/pages/Home";

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
`;

function App() {
  return (
    <AppLayout>
      <Header />
      <BodyLayout>
        <Routes>
          <Route path={PATH.HOME} element={<Home />} />
          {/*  */}
          <Route path="*" element={<Navigate replace to={PATH.HOME} />} />
        </Routes>
      </BodyLayout>
      <Footer />
    </AppLayout>
  );
}

export default App;
