function Testimonials({ testimonials }) {
  return (
    <>
      <div className="testimonials">
        <h1>Testimonials</h1>
        {testimonials.map((t, index) => (
          <div key={index}>
            <div>{t.name.charAt(0)}</div>
            <h3>{t.name}</h3>
            <p>{"⭐".repeat(t.rating)}</p>
            <p>{t.review}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Testimonials;
