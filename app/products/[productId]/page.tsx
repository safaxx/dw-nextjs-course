const ProductDetails = async ({params,}: {params: Promise<{ productId: string }>;}
) => {
  const { productId } = await params;
  return <div>Product Details {productId}</div>;
};

export default ProductDetails;
