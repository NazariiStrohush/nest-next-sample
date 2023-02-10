import React from "react";
import { NextPage, NextPageContext } from "next";

const Apps: NextPage = () => {
  return <div>Apps</div>;
};

export async function getServerSideProps(ctx: NextPageContext) {
  return {
    props: {},
  };
}

export default Apps;
