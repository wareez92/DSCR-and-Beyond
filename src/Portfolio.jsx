function Portfolio({ portfolioItems }) {
  return (
    <>
      {portfolioItems.map((p, i) => (
        <div key={i}>
          <h1>{p.portName}</h1>
          <img src={p.portImage} alt={p.portName} />
          <p>{p.portDescription}</p>
        </div>
      ))}
    </>
  );
}

export default Portfolio;


