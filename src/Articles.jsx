import { Link } from "react-router";

function Articles({ translations, blogs, lang, connect }) {
  return (
    <div className="articles">
      <h1>{translations.nav[lang].articles}</h1>

      {blogs.map((b) => {
        // Fallback to English if a language is missing
        const content = b.content[lang] || b.content.en;

        return (
          <div key={b.blogId}>
            <img src={b.image} alt={content.caption} />
            <h1>{content.caption}</h1>

            <p>
              {b.posted} {b.datePosted}
            </p>

            <p>{content.fullPost}</p>

            <hr className="article-line" />
          </div>
        );
      })}

      <Link
        to="https://calendly.com/sese-ntem/30min"
        className="form-button article-button"
      >
        {connect[lang].cta}
      </Link>
    </div>
  );
}

export default Articles;
