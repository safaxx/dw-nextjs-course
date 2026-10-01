export default async function Reviews({params} : {params: Promise<{productId: string}>})
{
    const {productId} = await params;
  return (
    <>
      <h1>Reviews for Product {productId}</h1>
      <ul>
        <li>Review 1</li>
        <li>Review 2</li>
        <li>Review 3</li>
      </ul>
    </>
  );
};
