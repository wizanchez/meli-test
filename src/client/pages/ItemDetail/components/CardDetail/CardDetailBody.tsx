import React from "react";

import { usePageContext } from "../../context";
import { TextWithLineBreaks } from "../../../../../utils/text";

export const CardDetailBody = () => {
  const {
    itemDetail: { description },
  } = usePageContext();

  return (
    <div className="card-detail__body">
      <div className="card-detail__body__title">Descripción del producto</div>
      <div className="card-detail__body__description">
        <TextWithLineBreaks text={description} />
      </div>
    </div>
  );
};
