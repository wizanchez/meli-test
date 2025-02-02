import React from "react";
import { Container } from "./Container";
import { PageSmartSearchProvider } from "./context";
import { HeaderLogo, HeaderSearch } from "./components";
export const SmartSearch = () => {
  return (
    <PageSmartSearchProvider>
      <Container>
        <HeaderLogo />
        <HeaderSearch />
        {/* <HeaderAdvertising /> */}
      </Container>
    </PageSmartSearchProvider>
  );
};
