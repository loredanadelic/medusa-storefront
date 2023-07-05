import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { medusaClient } from "@/lib/config";
import Product from "@/modules/products/components/product";
import { GetStaticProps } from "next";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import FilterSidebar from "@/modules/products/components/filter-sidebar";
import { FilterList } from "@/types";

const fetchProducts = async () => {
  return await medusaClient.products.list().then(({ products }) => products);
};
const fetchCollections = async () => {
  return await medusaClient.collections
    .list()
    .then(({ collections }) => collections);
};

const ProductsPage = () => {
  const { data, isError, isLoading, isSuccess } = useQuery(
    [`get_product`],
    () => fetchProducts(),
    { keepPreviousData: true }
  );
  const collections =
    useQuery([`get_collections`], () => fetchCollections(), {}).data || [];
  const [sidebar, setSidebar] = useState(false);
  const [productsList, setProductsList] = useState<PricedProduct[]>();
  const filterProducts = async (filter: FilterList) => {
    if (filter.collection_id.length < 1 && data) {
      setProductsList(data);
    } else {
      const response = await fetch(
        `http://localhost:9000/store/products?collection_id[]=${filter.collection_id}`
      );
      const products = await response.json();
      setProductsList(products.products);
    }
    setSidebar(false);
  };

  if (isError) {
    return (
      <div>
        <p>Something went wrong</p>
      </div>
    );
  }
  if (isLoading || !data) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div>
        <div className="w-[100%] flex justify-end pb-2">
          <button
            className="border-2 px-2 py-1 font-medium"
            onClick={() => setSidebar((prev) => !prev)}
          >
            FILTERS
          </button>
        </div>

        <FilterSidebar
          setSidebar={setSidebar}
          sidebar={sidebar}
          collections={collections}
          filterProducts={filterProducts}
        />

        <ul className="grid gap-3 grid-cols-4">
          {productsList !== undefined
            ? productsList.map((product: PricedProduct) => {
                return <Product product={product} key={product.id} />;
              })
            : data.map((product: PricedProduct) => {
                return <Product product={product} key={product.id} />;
              })}
        </ul>
      </div>
    );
  }
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([`get_products`], () => fetchProducts());
  await queryClient.prefetchQuery([`get_collections`], () =>
    fetchCollections()
  );
  const queryData1 = await queryClient.getQueryData([`get_collections`]);
  const queryData2 = await queryClient.getQueryData([`get_products`]);
  if (!queryData1 || !queryData2) {
    return {
      props: {
        notFound: true,
      },
    };
  }
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      notFound: false,
      revalidate: 60,
    },
  };
};
export default ProductsPage;
