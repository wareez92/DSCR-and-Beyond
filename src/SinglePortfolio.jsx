import { useParams } from "react-router";
import { Link } from "react-router";

function SinglePortfolio({ portfolioItems, lang, translations }) {
  const { portId } = useParams();
  const portfolioItem = portfolioItems.find((p) => p.portId === portId);
  const url = "https://calendly.com/sese-ntem/30min?preview_source=et_card&month=2025-08";

  if (!portfolioItem) {
    return (
      <>
        <p>Portfolio Item not found!</p>
      </>
    );
  }

  return (
    <>
      <div className="single-portfolio">
        <h2>{portfolioItem.portName}</h2>
        <div className="single-portfolio-gallery">
          <img src={portfolioItem.portImage} alt={portfolioItem.portName} />
          <img src={portfolioItem.portImage2} alt={portfolioItem.portName} />
          <img src={portfolioItem.portImage3} alt={portfolioItem.portName} />
        </div>
        <h4>{portfolioItem.portAddress}</h4>
        <p>{portfolioItem.content[lang].description}</p>
        <Link className="form-button" to={url}>
         {translations.nav[lang].getStarted}
        </Link>
      </div>
    </>
  );
}

export default SinglePortfolio;
