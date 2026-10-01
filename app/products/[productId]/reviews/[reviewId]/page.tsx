import { notFound } from "next/navigation";

export default async function Review({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) {
  const { reviewId, productId } = await params;
  
  if(parseInt(reviewId) > 1000){
    notFound();
  }
  return (
    <>
      <h2>
        Review {reviewId} for Product {productId}
      </h2>
    </>
  );
}
