import { Link } from "react-router";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { IoLogoYoutube } from "react-icons/io5";

function Footer() {
  return (
    <>
      <section className="footer">
        <p className="all-right-reserved">
          {"\u00A9"} 2025 DSCR & Beyond. All rights reserved.
        </p>
        <div className="footer-links">
          <Link className="footer-link" to="/">
            <FaFacebookSquare size={25} color="white" />
          </Link>
          <Link className="footer-link" to="/">
            <TiSocialInstagram size={25} color="white" />
          </Link>
          <Link className="footer-link" to="/">
            <FaLinkedin size={25} color="white" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Footer;
