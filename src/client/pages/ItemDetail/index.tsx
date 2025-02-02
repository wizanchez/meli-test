import React from "react";

import { PageItemDetailProvider } from "./context";
import { ItemsContainer } from "../../components/ItemsContainer";

export const ItemDetail = (props: any) => {
  return (
    <PageItemDetailProvider {...props}>
      <ItemsContainer>ItemDetail</ItemsContainer>
    </PageItemDetailProvider>
  );
};
