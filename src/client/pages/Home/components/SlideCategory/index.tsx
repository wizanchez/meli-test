import React from "react";

import { usePageContext } from "../../context";
import { CategoryCard } from "./CategoryCard";

export const SlideCategory = () => {
  const { categories } = usePageContext();

  return (
    <div>
      <div className="slider-rows">
        <div className="slider-container">
          <div className="slider">
            {categories.map((category) => {
              const { id } = category;

              return <CategoryCard key={id} category={category} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
