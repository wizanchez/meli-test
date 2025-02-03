import React from "react";
import { ICategoryCardProps } from "../../interfaces";

export const CategoryCard = (props: ICategoryCardProps) => {
  const {
    category: {
      name,
      detail: { picture, description },
    },
  } = props;

  return (
    <a className="slide" href={`/items?search=${name}`}>
      <div className="slide__title">{name}</div>
      <div className="slide__image">
        <div
          className="slide__image__ico"
          style={{ backgroundImage: `url(${picture})` }}
        />
      </div>
      <div className="slide__description">{description}</div>
      <button className="slide__button">Ver más</button>
    </a>
  );
};
