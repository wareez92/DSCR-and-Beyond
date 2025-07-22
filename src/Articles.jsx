import { Link } from "react-router";

function Articles({ blogs }) {
  return (
    <>
      <div className="articles">
        <h1>Articles</h1>
        {blogs.map((b, i) => (
          <div key={i}>
            <img src={b.image} alt={b.caption} />
            <h1>{b.caption}</h1>
            <p> posted on {b.datePosted}</p>
            <p>{b.fullPost}</p>
            <hr className="article-line"></hr>
          </div>
        ))}
        <Link to={"/"} className="form-button article-button">
          Let's Connect
        </Link>
      </div>
    </>
  );
}

export default Articles;
