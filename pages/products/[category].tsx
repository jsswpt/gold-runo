import { Products } from "@/pages";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Category = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>???</title>
      </Head>
      <Products category={router.query.category as string} />
    </>
  );
};

export default Category;
