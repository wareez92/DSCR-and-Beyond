import { Link } from "react-router";
function Portfolio({ portfolioItems }) {
  return (
    <>
      <div className="portfolio">
        <h1>Portfolio</h1>
        <div className="portfolio-items">
          {portfolioItems.map((p, i) => (
            <div key={i}>
              <img src={p.portImage} alt={p.portName} />
              <h2>{p.portName}</h2>
              <Link className="form-button" to={`/portfolio/${p.portId}`}>
                View Details
              </Link>
            </div>
          ))}
        </div>
        <Link className="back-button" to="/">
          Back
        </Link>
      </div>
    </>
  );
}

export default Portfolio;
