import React from "react";

import { ItemList } from "./components";
import { PageItemListProvider } from "./context";
import { ItemsContainer } from "../../components/ItemsContainer";

export const Items = (props: any) => {
  return (
    <>
      <PageItemListProvider {...props}>
        <ItemsContainer>
          <ItemList />
        </ItemsContainer>
      </PageItemListProvider>
    </>
  );
};
