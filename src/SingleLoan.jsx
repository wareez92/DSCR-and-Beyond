import { Link, useParams } from "react-router";

function SingleLoan({ loanPrograms, lang, translations }) {
  const { loanId } = useParams();
  const loan = loanPrograms.find((l) => l.loanId === loanId);
  console.log("Found loan:", loan);
  const url = "https://calendly.com/sese-ntem/30min?preview_source=et_card&month=2025-08";

  if (!loan) {
    return (
      <>
        <p>Loan not found!</p>
      </>
    );
  }

  return (
    <>
      <div className="single-loan">
        <h2>{loan.loanName}</h2>
        <img src={loan.icon} alt={loan.loanName} />
        <p>{loan.description[lang]}</p>
        <p>
          <Link className="form-button" to={url}>
            {translations.nav[lang].getStarted}
          </Link>
        </p>
        <Link className=" back-button" to="/loans">
          {translations.about[lang].back}
        </Link>
      </div>
    </>
  );
}

export default SingleLoan;
