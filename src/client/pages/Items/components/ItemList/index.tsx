import React from "react";

import { usePageContext } from "../../context";
import { ItemListCard } from "./ItemListCard";

export const ItemList = () => {
  const {
    loading,
    itemList,
    events: { onItemSelected },
  } = usePageContext();

  if (loading) {
    return <div>Loading... </div>;
  }

  return (
    <>
      {itemList.map((item, index) => (
        <ItemListCard key={index} item={item} onItemSelected={onItemSelected} />
      ))}
    </>
  );
};
