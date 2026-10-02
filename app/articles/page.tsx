import Link from "next/link";

type SearchParams = { searchParams: Promise<{ lang?: string }> };

const ArticlePage = async ({ searchParams }: SearchParams) => {
  const { lang } = await searchParams;
  const isArabic = lang === "ar";

  return (
    <main className="page-shell">
      <section className="page-card">
        <span className="page-kicker">News & writing</span>
        <h1 className="page-title">{isArabic ? "مقالات" : "Articles"}</h1>
        <p className="page-subtitle">
          {isArabic
            ? "قراءة المقالات باللغة العربية. اختر لغتك المفضلة واستمر في التعلم."
            : "Read our latest articles in the language you prefer. Choose your reading experience."}
        </p>

        <div className="language-switcher">
          <Link className="language-link" href="/articles?lang=en">
            English
          </Link>
          <Link className="language-link" href="/articles?lang=ar">
            العربية
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ArticlePage;
