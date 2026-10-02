"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        style={{
          backgroundColor: "grey",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "0.75rem 1.25rem",
          fontSize: "1rem",
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(37, 99, 235, 0.25)",
        }}
      >
        Try again
      </button>
    </div>
  );
}

/**
In the App Router, routing/app/products/[productId]/error.tsx 
is a special boundary file. Next.js requires it to be a client component 
even if you are not using any hooks.
The key reason error.tsx is mounted in the browser to recover 
from runtime 
failures. It receives props like reset() and can re-render the route.
That behavior is part of the client-side rendering model, 
not the server-rendering model.
So this is not “only because of useEffect" 
*/
