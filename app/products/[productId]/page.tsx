import { Metadata } from "next";
/**
params is a Promise because this project uses a newer version of Next.js. 
Next.js supplies route parameters asynchronously, 
the page has to wait for them:
For a URL like /products/example-app, 
Next.js provides { slug: 'example-app' }. The same happens in generateMetadata. 
Your code doesn’t create the Promise; Next.js does. 
This async approach is part of Next.js’s newer rendering model, 
which supports preparing and streaming pages more flexibly.


params is asynchronous because newer Next.js versions expose route parameters 
as part of their async rendering API. This lets Next.js prepare parts of a 
page before request-specific data is ready, which supports streaming and 
related rendering optimizations.

It doesn’t mean reading the slug itself is slow or does database work. 
Next.js provides a Promise as its API contract; await params gets the 
value when it’s available

Async rendering API” means an interface where a page can wait for values 
or data before finishing its render. In Next.js, route information like 
params is provided asynchronously, so a page can do:
const { slug } = await params
const product = await getProductBySlug(slug)

The first await gets the route’s slug; the second waits for the database 
lookup. Once the needed values are ready, Next.js renders the page. 
While that work is pending, the server can handle other requests, 
and Next.js can stream parts of a response when the app uses streaming 
features.

In this context, “async rendering API” isn’t one special function. 
It’s shorthand for Next.js’s rendering interfaces that return Promises, 
such as params, and let pages/components use async and await.
 */

type Params = { params: Promise<{ productId: string }> };

export const generateMetadata = async ({
  params,
}: Params): Promise<Metadata> => {
  const { productId } = await params;

  return { title: `Product ${productId}` };
};



const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  return <div>Product Details {productId}</div>;
};

export default ProductDetails;
