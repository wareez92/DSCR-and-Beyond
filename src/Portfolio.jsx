import { Link } from "react-router";
function Portfolio({ portfolioItems }) {
  return (
    <>
      <div className="portfolio">
        <h1>Portfolio</h1>
        {portfolioItems.map((p, i) => (
          <div key={i}>
            <h1>{p.portName}</h1>
            <img src={p.portImage} alt={p.portName} />
            <p>{p.portDescription}</p>
            <Link className="form-button" to={`/portfolio/${p.portId}`}>View Details</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Portfolio;
