import { useQuery } from "@apollo/client";
import React from "react";
import CategoriesSection from "./components/categories_section";
import Hero from "./components/hero";
import { ALL_CATEGORIES } from "../graphql/queries/queries";
import Spinner from "./components/spinner";

// export async function getServerSideProps() {
//   const { loading, data: result, error } = useQuery(ALL_CATEGORIES);
//   const collections = result.data;
//   return {
//     props: {
//       collections,
//     },
//   };
// }
export default function Home() {
  const { loading, data, error } = useQuery(ALL_CATEGORIES);
  if (loading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  let collections = data.collections.items;
  console.log("CATS", collections);
  return (
    <div>
      {" "}
      <Hero />
      <CategoriesSection collections={collections} />
    </div>
  );
}
