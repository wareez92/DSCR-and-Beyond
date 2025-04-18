function Testimonials({ testimonials }) {
  return (
    <>
      <h1>Testimonials</h1>
      {Object.values(testimonials).map((t, index) => (
        <div key={index}>
          <div>{t.name.charAt(0)}</div>
          <h3>{t.name}</h3>
          <p>{"⭐".repeat(t.rating)}</p>
          <p>{t.review}</p>
        </div>
      ))}
    </>
  );
}

export default Testimonials;
