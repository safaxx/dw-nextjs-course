const Docs = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;
  if (slug?.length == 4) {
    return (
      <h1>
        Viewing docs for feature {slug[1]} and concept {slug[3]}
      </h1>
    );
  } else if (slug?.length == 2) {
    return <h1>Viewing docs for feature {slug[1]}</h1>;
  } else {
    return <div>Docs</div>;
  }
};
export default Docs;
