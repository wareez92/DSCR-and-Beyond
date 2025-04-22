import { Link, useParams } from "react-router";

function SingleLoan({ loanPrograms }) {
  const { loanId } = useParams();
  const loan = loanPrograms.find((l) => l.loanId === loanId);
  console.log("Found loan:", loan);
  const url = "null";

  // if (!loan) {
  //   return (
  //     <>
  //       <p>Loan not found!</p>
  //     </>
  //   );
  // }

  return (
    <>
      <div>
        <h2>{loan.loanName}</h2>
        <img src={loan.icon} alt={loan.loanName} />
        <p>{loan.description}</p>
        <Link to={url}>Get Started</Link>
      </div>
    </>
  );
}

export default SingleLoan;
