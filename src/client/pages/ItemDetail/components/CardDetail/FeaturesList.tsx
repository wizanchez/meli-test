import React from "react";

import { usePageContext } from "../../context";

export const FeaturesList = () => {
  const {
    itemDetail,
    itemDetail: { condition, sold_quantity, title, amountFormatted },
  } = usePageContext();
  return (
    <div className="header-feature-list">
      <SectionCondition condition={condition} sold_quantity={sold_quantity} />
      <div className="header-feature-list__title">{title}</div>
      <div className="header-feature-list__price">{amountFormatted}</div>
      <button className="header-feature-list__buy">Comprar</button>
    </div>
  );
};

interface ISectionConditionProps {
  condition: string;
  sold_quantity: number;
}

const SectionCondition = (props: ISectionConditionProps) => {
  const { condition, sold_quantity } = props;

  const soldQty = sold_quantity > 0 ? ` - ${sold_quantity} vendidos` : "";
  const conditionFormat = condition === "new" ? "Nuevo" : condition;

  return (
    <div className="header-feature-list__condition">
      {conditionFormat}
      {soldQty}
    </div>
  );
};
