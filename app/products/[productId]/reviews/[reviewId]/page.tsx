export default async function Review({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) {
  const { reviewId, productId } = await params;
  return (
    <>
      <h2>
        Review {reviewId} for Product {productId}
      </h2>
    </>
  );
}
