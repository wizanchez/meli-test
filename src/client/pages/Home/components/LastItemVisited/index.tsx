import React from "react";

import { ItemCard } from "./ItemCard";
import { usePageContext } from "../../context";
import { ItemsContainer } from "../../../../components/ItemsContainer";

export const LastItemVisited = () => {
  const { lastItemsVisited } = usePageContext();

  if (lastItemsVisited.length === 0) {
    return <></>;
  }

  return (
    <div className="content">
      <ItemsContainer className="card-dashboard">
        <h3>Lo ultimo que visitaste</h3>
        <div className="slider-rows slider-rows-items">
          <div className="slider-container">
            <div className="slider">
              {lastItemsVisited.map((item) => {
                const { id } = item;
                return <ItemCard key={id} dataItem={item} />;
              })}
            </div>
          </div>
        </div>
      </ItemsContainer>
    </div>
  );
};
