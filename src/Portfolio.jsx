import { Link } from "react-router";
function Portfolio({ portfolioItems, viewDetails ,lang, translations}) {
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
              {viewDetails[lang].viewDetails}
                            </Link>
            </div>
          ))}
        </div>
        <Link className="back-button" to="/">
          {translations.about[lang].back}
        </Link>
      </div>
    </>
  );
}

export default Portfolio;
