import { Link } from "react-router";
import Loans from "./Loans";
import Contact from "./Contact";
import { FaRegBuilding } from "react-icons/fa";

function Home({
  testimonials,
  loanPrograms,
  portfolioItems,
  lang,
  translations,
  contactForm,
  viewDetails,
  viewAll,
  dscrText
}) {
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
          <h1>{translations.nav[lang].loanPrograms}</h1>

          <p>
            {dscrText[lang]}
          </p>
          <Link className="loan-program-view-all-homepage" to="/Loans">
           {viewAll[lang]}
          </Link>
        </section>

        {/* Portfolio */}

        <hr></hr>

        <section className="portfolio-homepage">
          <h1>{translations.nav[lang].portfolio}</h1>

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
        </section>

        {/* Testimonials */}

        <hr></hr>

        <section className="testimonial-homepage">
          <h1>{translations.nav[lang].testimonials}</h1>
          <div>
            {testimonials.slice(0, 4).map((t, index) => (
              <div key={index}>
                <p className="testimonial-quote">
                  <span className="quotation start">"</span>
                  {t.review[lang]}
                  <span className="quotation end">"</span>
                </p>
                <p>{"⭐".repeat(t.rating)}</p>
                <Link to={t.url}>
                  <h3>- {t.name}</h3>
                </Link>
              </div>
            ))}
          </div>
          <Link to="/Testimonials">{viewAll[lang]}</Link>
        </section>

        {/* Contact */}

        <hr></hr>

        <section className="contact-homepage">
          <Contact
            contactForm={contactForm}
            lang={lang}
            translations={translations}
          />
        </section>
      </div>
    </>
  );
}

export default Home;
