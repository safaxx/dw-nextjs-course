import Link from "next/link";

type SearchParams = { searchParams: Promise<{ lang?: string }> };

const ArabicArticles = async ({ searchParams }: SearchParams) => {
  const { lang } = await searchParams;

  return (
    <>{lang === "ar" ? <h1>Arabic Articles</h1> : <h1>English Articles</h1>}</>
  );
};

export default ArabicArticles;
