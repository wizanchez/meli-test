import React from "react";
import { Routes, Route } from "react-router-dom";

import { Footer } from "../components/Footer";
import { Home, Items, ItemDetail } from "../pages";
import { Container } from "../components/Container";
import { GlobalStyles } from "../styles/GlobalStyles";
import { SmartSearch } from "../components/SmartSearch";
import { TestSsr } from "../pages/TestSsr";

export const App = (props: any) => {
  return (
    <>
      <GlobalStyles />
      <SmartSearch />
      <Container>
        <Routes>
          <Route index path="/" element={<Home {...props} />} />
          <Route path="/items" element={<Items {...props} />} />
          <Route path="/items/:id" element={<ItemDetail {...props} />} />
          <Route
            path="/items/:id/:description"
            element={<ItemDetail {...props} />}
          />
        </Routes>
      </Container>
      <Footer />
    </>
  );
};
