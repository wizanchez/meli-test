import React from "react";
import { Helmet } from "react-helmet-async";

export const HeaderMeta = () => {
  return (
    <Helmet>
      <title>.: Meli by @wianchez</title>
      <meta name="description" content="Test Mercado libre by @wizanchez" />
      <meta property="og:title" content="Test Mercado libre by @wizanchez" />
      <meta
        property="og:description"
        content="Test Mercado libre by @wizanchez"
      />
      <meta
        property="og:image"
        content="https://meli-wiz.vercel.app/assets/images/Logo_ML@2x.png"
      />
    </Helmet>
  );
};
