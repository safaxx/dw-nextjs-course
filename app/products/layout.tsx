const ProductsLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <>
      {children}
      <br/>
      <h2>Featured Products</h2>
    </>
  );
};

export default ProductsLayout;
