import { Link } from "react-router";
import { IoMdCheckmarkCircle } from "react-icons/io";

function Loans({ loanPrograms }) {
  const HIGHLIGHT_WORDS = [
    "Personal",
    "Income",
    "Real",
    "Estate",
    "Unit",
    "Streamlined",
    "Income-Based",
    "Tax",
    "Returns",
    "Employment",
    "Mid-Sized",
    "Residential",
    "Efficient",
    "Alternative",
    "Self-Employed",
    "Flexible",
    "Simplified",
    "Social",
    "Security",
  ];

  return (
    <>
      <div className="loan-programs">
        <h1>Loan Programs</h1>
        <div>
          {loanPrograms.map((l, i) => (
            <div key={i}>
              <img src={l.icon} alt={l.loanName} />
              <h4>{l.loanName}</h4>
              <hr></hr>
              <ul>
                {l.keyFeatures.map((k, i) => {
                  const words = k.split(" "); // split the string into words
                  return (
                    <li key={i}>
                      <IoMdCheckmarkCircle className="loan-check" />
                      {words.map((word, j) => {
                        const cleanWord = word.replace(/[.,!?]/g, "");
                        const punctuation = word.match(/[.,!?]$/)?.[0] || "";
                        const isHighlighted =
                          HIGHLIGHT_WORDS.includes(cleanWord);
                        return (
                          <span
                            key={j}
                            className={isHighlighted ? "loan-highlight" : ""}
                          >
                            {cleanWord + punctuation + " "}
                          </span>
                        );
                      })}
                    </li>
                  );
                })}
              </ul>
              <Link className="form-button" to={`/loans/${l.loanId}`}>
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

export default Loans;
