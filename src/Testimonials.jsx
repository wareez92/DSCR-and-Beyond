import { Link } from "react-router";

Link;

function Testimonials({ testimonials }) {
  return (
    <>
      <div className="testimonials">
        <h1>Testimonials</h1>
        {testimonials.map((t, index) => (
          <div key={index}>
            <p>
              <span className="quotation start">"</span>
              {t.review}
              <span className="quotation end">"</span>
            </p>
            <p>{"⭐".repeat(t.rating)}</p>
            <Link to={t.url}>
              <h3>- {t.name}</h3>
            </Link>
          </div>
        ))}
        <Link className="back-button" to="/">
          Back
        </Link>
      </div>
    </>
  );
}

export default Testimonials;
