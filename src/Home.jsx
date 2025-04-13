import { Link } from "react-router";
import Loans from "./Loans";

function Home() {
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
          <div>
            <img src="src/assets/222 W Chestnut Ave - Califonia - Funded.pdf" alt="icon" />
            <hr></hr>
            <h6>Name</h6>
            <p>info</p>
          </div>
        </div>
        <Link to="/Loans">View All</Link>
      </section>

      {/* Portfolio */}

      <hr></hr>

      <section>
        <h1> Portfolio</h1>
        <div>
          <div>
          <img src=""/>
            <h6>Name of Home</h6>
            <p>Date</p>
          </div>
        </div>
        <Link to="/Portfolio">View All</Link>
      </section>

      {/* Testimonials */}

      <hr></hr>

      <section>
        <h1>Testimonials</h1>
        <div>
          <img src="" alt="icon" />
          <p>experience</p>
          <h6>Client Name</h6>
        </div>

        <Link to="/Testimonials">View All</Link>
      </section>

      {/* Contact */}

      <hr></hr>

      <section>
        <h1>Contact</h1>
        <form>
          <p>
            First <input type="name" placeholder="John" required /> Last{" "}
            <input type="name" placeholder="Smith" />
          </p>
          <p>
            {" "}
            Subject <br />
            <input type="text" size="58" />
          </p>
          <p>
            Message <br />
            <textarea></textarea>
          </p>
          <input type="submit"></input>
        </form>
      </section>

    </>
  );
}

export default Home;
