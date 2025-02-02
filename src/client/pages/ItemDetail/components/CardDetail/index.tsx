import React from "react";

import { Gallery } from "./Gallery";
import { FeaturesList } from "./FeaturesList";
import { CardDetailBody } from "./CardDetailBody";

export const CardDetail = () => {
  return (
    <div className="card-detail">
      <div className="card-detail__header">
        <Gallery />
        <FeaturesList />
      </div>
      <CardDetailBody />
    </div>
  );
};
