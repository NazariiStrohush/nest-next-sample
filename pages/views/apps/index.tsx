import React from "react";
import { NextPage, NextPageContext } from "next";

import { App } from "lib/apollo/generated.graphql";

const Apps: NextPage<{ apps: App }> = () => {
  return <div>Apps</div>;
};

export async function getServerSideProps(ctx: NextPageContext) {
  return {
    props: {},
  };
}

export default Apps;
