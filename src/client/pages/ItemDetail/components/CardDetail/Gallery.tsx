import React from "react";

import { usePageContext } from "../../context";

export const Gallery = () => {
  const {
    itemDetail: { picture },
  } = usePageContext();

  return (
    <div className="card-detail__header__image">
      <img src={picture} alt="" />
    </div>
  );
};
