import { medusaClient } from "@/lib/config";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductDetailsTemplate from "@/modules/products/templates/product-page";
import { getIds } from "@/lib/util/produc_id";
import Loader from "@/modules/common/components/loader";
const fetchProduct = async (product_id: string) => {
  return await medusaClient.products
    .retrieve(product_id)
    .then(({ product }) => {
      return product;
    });
};
const ProductDetailsPage = () => {
  const { query } = useRouter();
  const id = typeof query.id === "string" ? query.id : "";
  const { data, isError, isLoading, isSuccess } = useQuery(
    [`get_product`, id],
    () => fetchProduct(id),
    { enabled: id.length > 0 }
  );


  if (isLoading || !data) {
    <div>
      <Loader />
    </div>;
  }
  if (isError) {
    return (
      <div>
        <p>Something went wrong</p>
      </div>
    );
  }
  if (isSuccess) {
    return (
      <div>
        <ProductDetailsTemplate product={data} />
      </div>
    );
  }
};
export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const ids = await getIds();
  return {
    paths: ids.map((id) => ({ params: { id } })),
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([`get_product`, id], () => fetchProduct(id));

  const queryData = await queryClient.getQueryData([`get_product`, id]);

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
    },
  };
};

export default ProductDetailsPage;
