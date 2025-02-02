import React from "react";

import { PageItemDetailProvider } from "./context";
import { CardDetail } from "./components/CardDetail";
import { ItemsContainer } from "../../components/ItemsContainer";

export const ItemDetail = (props: any) => {
  return (
    <PageItemDetailProvider {...props}>
      <ItemsContainer>
        <CardDetail />
      </ItemsContainer>
    </PageItemDetailProvider>
  );
};
