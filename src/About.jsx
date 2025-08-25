import { Link } from "react-router";

Link;

function About() {
  return (
    <>
      <div className="about">
        <h1>About</h1>
        <div>
          <img src="/assets/unnamed.png" />
          <h3>
            Meet <span className="sese">Sese Ntem </span>– Your DSCR Loan
            Specialist
          </h3>
          <p>
            Sese helps real estate investors secure the financing they
            need—quickly and confidently. Specializing in{" "}
            <a href="/">DSCR (Debt-Service Coverage Ratio) loans</a>, he works
            with clients who qualify based on{" "}
            <span>rental property income</span>, not traditional employment
            documentation. Known for consistent,{" "}
            <span>successful closings</span>, Sese delivers creative solutions
            for both <span>first-time and experienced investors</span>. His
            clients appreciate his{" "}
            <span>responsiveness, attention to detail,</span> and ability to
            <span> simplify the loan process from start to finish</span>. A
            skilled polyglot, Sese connects easily with clients across cultures
            and <span>speaks multiple languages, </span>including{" "}
            <span>French and English</span> —ensuring clear, effective
            communication every step of the way. Ready to invest with
            confidence?{" "}
            <a href="https://calendly.com/sese-ntem/30min?preview_source=et_card&month=2025-08">
              Let’s talk DSCR loans today.
            </a>
          </p>
        </div>

        <Link className="back-button" to="/">
          Back
        </Link>
      </div>
    </>
  );
}

export default About;
