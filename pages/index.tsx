import type { GetStaticProps, NextPage } from "next";
import { useEffect } from "react";
import type { InferGetStaticPropsType } from "next";
import getAllProducts from "../framework/shopify/products/get-all-products";

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  products,
}) => {
  return (
    <div>
      <p>{JSON.stringify(products)}</p>
    </div>
  );
};

export default Home;
