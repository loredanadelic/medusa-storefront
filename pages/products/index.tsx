import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { medusaClient } from "@/lib/config";
import Product from "@/modules/products/components/product";
import { GetStaticProps } from "next";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  return await medusaClient.products.list().then(({ products }) => products);
};

const ProductsPage = () => {
  const { data, isError, isLoading, isSuccess } = useQuery(
    [`get_product`],
    () => fetchProducts(),
    {}
  );
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
      <ul className="grid gap-3 grid-cols-4">
        {data.map((product: PricedProduct) => {
          return <Product product={product} key={product.id} />;
        })}
      </ul>
    );
  }
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([`get_products`], () => fetchProducts());
  const queryData = await queryClient.getQueryData([`get_products`]);
  if (!queryData) {
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
