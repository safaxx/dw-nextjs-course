const ProductsLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <>
      {children}
      <br/>
      <h1>Featured Products</h1>
    </>
  );
};

export default ProductsLayout;
