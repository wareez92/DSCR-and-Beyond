import { Link } from "react-router";

function Loans({ loanPrograms }) {
  return (
    <>
      <h1>Loan Programs</h1>
      {loanPrograms.map((l, i) => (
        <div key={i}>
          <img src={l.icon} alt={l.name} />
          <h4>{l.loanName}</h4>
          <p>{l.description}</p>
          <Link to={`/loans/${l.loanId}`}>View Details</Link>
        </div>
      ))}
    </>
  );
}

export default Loans;
