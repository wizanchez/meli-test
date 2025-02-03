import React from "react";
import { IBreadcrumbProps } from "../interfaces/breadcrumb.interface";

export const Breadcrumb = (props: IBreadcrumbProps) => {
  const { categories } = props;

  if (!categories) {
    return <></>;
  }

  const totalCategories = categories.length;
  return (
    <nav>
      <ol className="andes-breadcrumb">
        {categories.map((category, index) => {
          const showChrevron = index < totalCategories - 1;
          const classLastItem = !showChrevron ? "last" : "";
          return (
            <li
              className={`andes-breadcrumb__item ${classLastItem}`}
              key={category}
            >
              {category}
              {showChrevron && (
                <span className="andes-breadcrumb__item__chevron">{" >"}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
