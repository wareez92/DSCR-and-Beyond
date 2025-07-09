import { useParams } from "react-router";
import { Link } from "react-router";

function SinglePortfolio({ portfolioItems }) {
  const { portId } = useParams();
  const portfolioItem = portfolioItems.find((p) => p.portId === portId);
  const url = "null";

  if (!portfolioItem) {
    return (
      <>
        <p>Portfolio Item not found!</p>
      </>
    );
  }

  return (
    <>
      <div>
        <h2>{portfolioItem.portName}</h2>
        <img src={portfolioItem.portImage} alt={portfolioItem.portName} />
        <img src={portfolioItem.portImage2} alt={portfolioItem.portName} />
        <img src={portfolioItem.portImage3} alt={portfolioItem.portName} />
        <h4>{portfolioItem.portAddress}</h4>
        <p>{portfolioItem.portDescription}</p>
        <Link className="form-button" to={url}>Get Started</Link>
      </div>
    </>
  );
}

export default SinglePortfolio;
