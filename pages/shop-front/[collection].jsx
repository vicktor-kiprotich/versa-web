import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { SEARCH_PRODUCTS } from "../graphql/queries/queries";

export default function Collection() {
  const router = useRouter();
  const { name, slug, id } = router.query;
  console.log("CAT", name, slug, id);
  const { loading, data, error } = useQuery(SEARCH_PRODUCTS, {
    variables: {
      input: {
        collectionSlug: slug,
        collectionId: id,
        groupByProduct: true,
      },
    },
  });
  console.log("DATA", data);
  const products = data?.search?.items;
  if (loading) return <p>Loading</p>;
  return (
    <div>
      <ul>
        {products &&
          products?.map((item, index) => (
            <li key={index}>{item.productName}</li>
          ))}
      </ul>
    </div>
  );
}
