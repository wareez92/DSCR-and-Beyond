import { Link } from "react-router";
function Portfolio({ portfolioItems }) {
  return (
    <>
      {portfolioItems.map((p, i) => (
        <div key={i}>
          <h1>{p.portName}</h1>
          <img src={p.portImage} alt={p.portName} />
          <p>{p.portDescription}</p>
          <Link to={`/portfolio/${p.portId}`}>View Details</Link>
        </div>
      ))}
    </>
  );
}

export default Portfolio;
