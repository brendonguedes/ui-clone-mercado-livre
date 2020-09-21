import React from "react";

import { Container, Wrapper } from "./styles";

import Product from "../Product";

const Layout: React.FC = () => {
  return (
    <Container>
      {/* <Header /> */}

      <Wrapper>
        <Product />
      </Wrapper>

      {/* <Fotter /> */}
    </Container>
  );
};

export default Layout;
