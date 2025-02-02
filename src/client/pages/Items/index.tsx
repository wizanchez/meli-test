import React from "react";

import { ItemList } from "./components";
import { PageItemListProvider } from "./context";
import { ItemBreadcrumb } from "./components/ItemBreadcrumb";
import { ItemsContainer } from "../../components/ItemsContainer";

export const Items = (props: any) => {
  return (
    <>
      <PageItemListProvider {...props}>
        <ItemBreadcrumb />
        <ItemsContainer>
          <ItemList />
        </ItemsContainer>
      </PageItemListProvider>
    </>
  );
};
