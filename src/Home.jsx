import { Link } from "react-router";
import Loans from "./Loans";
import Contact from "./Contact";
import { FaRegBuilding } from "react-icons/fa";

function Home({ testimonials, loanPrograms, portfolioItems }) {
  return (
    <>
      <div className="main-content">
        {/* Hero Section */}

        <section className="hero-container">
          <div className="background-slider">
            <div className="bg bg1"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="bg bg4"></div>
            <div className="bg bg5"></div>
            <div className="hero-content">
              <div className="hero-headline">
                <h1>The Solution to All Your Home Lending Needs</h1>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, vitae illo et excepturi dolore molestiae
                </h4>
                <button className="hero-schedule-call">Schedule Call</button>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Programs */}

        <section className="loan-programs-homepage">
          <h1>Loan Programs</h1>

          <p>
            A DSCR (Debt Service Coverage Ratio) loan is a type of real estate
            loan commonly used by real estate investors, where approval is based
            on the property's income—not the borrower’s personal income. Instead
            of tax returns or W-2s, lenders look at the property's cash flow to
            ensure it can cover the loan payments. Why It's Helpful for
            Homebuyers or Investors: DSCR loans are especially useful for people
            who may not qualify for traditional loans due to self-employment,
            inconsistent income, or a high debt-to-income ratio. They’re ideal
            for purchasing rental properties, as the focus is on the property's
            ability to generate income, not your personal finances. This makes
            DSCR loans a flexible option for growing a real estate portfolio.
          </p>
          <Link className="loan-program-view-all-homepage" to="/Loans">
            View All
          </Link>
        </section>

        {/* Portfolio */}

        <hr></hr>

        <section className="portfolio-homepage">
          <h1>Portfolio</h1>

          <div className="portfolio-container">
            {portfolioItems.map((p, i) => (
              <div key={i} className={`portfolio-item-${p.portId}`}>
                <Link
                  className="portfolio-homepage-links"
                  to={`/portfolio/${p.portId}`}
                >
                  <h4>{`${p.portName}`}</h4>
                </Link>
              </div>
            ))}
          </div>
          <Link to="/Portfolio">View All</Link>
        </section>

        {/* Testimonials */}

        <hr></hr>

        <section className="testimonial-homepage">
          <h1>Testimonials</h1>
          <div>
            {testimonials.slice(0, 4).map((t, index) => (
              <div key={index}>
                <h3>{t.name}</h3>
                <p>{"⭐".repeat(t.rating)}</p>
                <p className="testimonial-quote">{t.review}</p>
              </div>
            ))}
          </div>
          <Link to="/Testimonials">View All</Link>
        </section>

        {/* Contact */}

        <hr></hr>

        <section className="contact-homepage">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default Home;
