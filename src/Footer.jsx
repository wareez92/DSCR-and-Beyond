import { Link } from "react-router";


function Footer() {
  return (
    <>
      <hr></hr>

      <section>
        <div>
          <Link to="/">Facebook</Link>
          <Link to="/">Instagram</Link>
          <Link to="/">Youtube</Link>
          <Link to="/">LinkedIn</Link>
        </div>
      </section>
    </>
  );
}

export default Footer;
