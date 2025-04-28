function Articles({ blogs }) {
  return (
    <>
      <section>
        {blogs.map((b, i) => (
          <div key={i}>
            <hr></hr>
            <img src={b.image} alt={b.caption} />
            <h1>{b.caption}</h1>
            <p>{b.datePosted}</p>
            <p>{b.fullPost}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Articles;
