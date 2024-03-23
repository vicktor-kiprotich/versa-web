import { gql } from "@apollo/client";

export const ALL_CATEGORIES = gql`
  query getCategories {
    collections {
      items {
        id
        name
        slug
        featuredAsset {
          id
          name
          source
        }
        productVariants {
          totalItems
        }
      }
    }
  }
`;
export const getProducts = gql`
  query getProducts {
    products {
      items {
        id
        name
        variants {
          name
          price
        }
        featuredAsset {
          id
          name
          source
        }
      }
    }
  }
`;
export const GET_PRODUCT = gql`
  query getProduct($id: ID!) {
    product(id: $id) {
      id
      name
      slug
      description
      collections {
        id
        name
      }
      featuredAsset {
        id
        source
      }
      assets {
        id
        source
      }
      variants {
        id
        sku
        name
        price
        featuredAsset {
          id
          name
          source
        }
      }
    }
  }
`;

export const getCategory = gql`
  query getCategory($id: ID!, $slug: ds) {
    collection(id: $id, slug: $slug) {
      id
      name
      slug
      description
      featuredAsset {
        id
        name
        source
        width
        source
      }
      children {
        id
        name
        slug
      }
    }
  }
`;

export const SEARCH_PRODUCTS = gql`
  query searchProducts($input: SearchInput!) {
    search(input: $input) {
      facetValues {
        facetValue {
          id
          name
        }
      }
      items {
        productId
        productName
        description
        productAsset {
          id
          preview
        }
        priceWithTax {
          ... on PriceRange {
            min
            max
          }
          ... on SinglePrice {
            value
          }
        }
      }
    }
  }
`;
