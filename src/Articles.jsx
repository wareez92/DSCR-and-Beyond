function Articles({ blogs }) {
  return (
    <>
      <div className="articles">
        <h1>Articles</h1>
        {blogs.map((b, i) => (
          <div key={i}>
            <img src={b.image} alt={b.caption} />
            <h1>{b.caption}</h1>
            <p>{b.datePosted}</p>
            <p>{b.fullPost}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Articles;
