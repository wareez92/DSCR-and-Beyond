import { Link } from "react-router";
import Loans from "./Loans";
import Contact from "./Contact";

function Home({ testimonials, loanPrograms, portfolioItems }) {
  return (
    <>
      {/* Hero Section */}

      <hr></hr>

      <section>
        <h1>Headliner</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, a!
        </h2>
        <div>
          <img src="src/assets/unnamed.png" alt="Sese Ntem" />
          <h6>Sese Ntem</h6>
          <p>Home Lending Advisor</p>
        </div>
        <a href="https://guzzoandco.my1003app.com/2306237/register">
          <button>Apply Now</button>
        </a>
      </section>

      {/* Loan Programs */}

      <hr></hr>

      <section>
        <h1>Loan Programs</h1>
        <div>
          {loanPrograms.slice(0, 4).map((l, i) => (
            <div key={i}>
              <img src={l.icon} alt={l.loanName} />
              <h4>{l.loanName}</h4>
              <section>
                <ul>
                  {l.keyFeatures.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <Link to={`/loans/${l.loanId}`}>View Details</Link>
              </section>
            </div>
          ))}
        </div>
        <Link to="/Loans">View All</Link>
      </section>

      {/* Portfolio */}

      <hr></hr>

      <section>
        <h1> Portfolio</h1>
        <div>
          {portfolioItems.slice(0, 2).map((p, i) => (
            <div key={i}>
              <img src={p.portImage} alt={p.portName} />
              <h4>{p.portName}</h4>
              <Link to={`/portfolio/${p.portId}`}>View Details</Link>
            </div>
          ))}
        </div>
        <Link to="/Portfolio">View All</Link>
      </section>

      {/* Testimonials */}

      <hr></hr>

      <section>
        <h1>Testimonials</h1>
        <div>
          {testimonials.slice(0, 4).map((t, index) => (
            <div key={index}>
              <h3>{t.name}</h3>
              <p>{"⭐".repeat(t.rating)}</p>
              <p>{t.review}</p>
            </div>
          ))}
        </div>
        ``
        <Link to="/Testimonials">View All</Link>
      </section>

      {/* Contact */}

      <hr></hr>

      <section>
        <Contact />
      </section>
    </>
  );
}

export default Home;
