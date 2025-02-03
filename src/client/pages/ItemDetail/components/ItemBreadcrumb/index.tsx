import React from "react";
import { usePageContext } from "../../context";
import { Breadcrumb } from "../../../../components/Breadcrumb";

export const ItemBreadcrumb = () => {
  const { categories } = usePageContext();

  return <Breadcrumb categories={categories} />;
};
