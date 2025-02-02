import React from "react";

import { IItemListCardProps } from "../../interfaces";
import { IconFreeShipping } from "./IconFreeShipping";

export const ItemListCard = (props: IItemListCardProps) => {
  const {
    item: {
      id,
      title,
      picture,
      titleSlug,
      state_name,
      free_shipping,
      amountFormatted,
      price: { amount, currency },
    },
    onItemSelected,
  } = props;

  return (
    <a
      tabIndex={0}
      role="button"
      href={`/items/${id}/${titleSlug}`}
      className="item-list-card"
      onClick={() => onItemSelected(props.item)}
      onKeyDown={() => onItemSelected(props.item)}
    >
      <div className="item-list-card__picture">
        <img src={picture} alt="" />
      </div>
      <div className="item-list-card__data">
        <div className="item-list-card__data__price-city">
          <div className="item-list-card__data__price">
            <div>
              {amountFormatted}{" "}
              <small className="item-list-card__data__price__currency">
                {currency}
              </small>
            </div>
            {free_shipping && <IconFreeShipping />}
          </div>
          <div className="item-list-card__data__city">{state_name}</div>
        </div>
        <div className="item-list-card__data__title">{title}</div>
      </div>
    </a>
  );
};

const customFormatter = (value: number) =>
  "$ " +
  Math.floor(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
