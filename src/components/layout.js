import React from "react";
import styled from "styled-components";

import Header from "./header";
import Footer from "./footer";
import "./layout.css";

const Container = styled.div`
  margin: 1.5em auto;
  max-width: 35em;
`;

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}
