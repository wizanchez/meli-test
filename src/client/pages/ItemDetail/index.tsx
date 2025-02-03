import React from "react";

import { PageItemDetailProvider } from "./context";
import { CardDetail } from "./components/CardDetail";
import { ItemBreadcrumb } from "./components/ItemBreadcrumb";
import { ItemsContainer } from "../../components/ItemsContainer";

export const ItemDetail = (props: any) => {
  return (
    <PageItemDetailProvider {...props}>
      <ItemBreadcrumb />
      <ItemsContainer>
        <CardDetail />
      </ItemsContainer>
    </PageItemDetailProvider>
  );
};
