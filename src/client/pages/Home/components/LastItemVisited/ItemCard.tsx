import React from "react";
import { IItemDetailResponse } from "../../../../../services/interfaces";

interface IItemCardProps {
  dataItem: IItemDetailResponse;
}

export const ItemCard = (props: IItemCardProps) => {
  const {
    dataItem: {
      id,
      slug,
      title,
      thumbnail,
      amountFormatted,
      price: { amount },
    },
  } = props;
  return (
    <a className="slide" href={`/items/${id}/${slug}`}>
      <div className="slide__image">
        <div
          className="slide__image__ico slide__image__ico__item"
          style={{ backgroundImage: `url(${thumbnail})` }}
        />
      </div>
      <div className="slide__description">{title}</div>
      <div className="slide__price">{amountFormatted}</div>
    </a>
  );
};
