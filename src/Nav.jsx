import { useEffect, useState } from "react";
import { Link } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

useEffect(() => {
  const inExceptionBreakpoint =
    window.innerHeight <= 700 && window.innerWidth >= 500;

  if (isOpen && !inExceptionBreakpoint) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }

  return () => {
    document.body.classList.remove("no-scroll");
  };
}, [isOpen]);

  return (
    <>
      <header className="nav-header">
        <div className="nav-content">
          <img
            src="/assets/DMSerifDisplay(4).svg"
            className="nav-logo"
            alt="dscr-logo"
          />
          <div>
            <a
              href="https://calendly.com/sese-ntem/30min?preview_source=et_card&month=2025-08"
              className="nav-schedule-call"
            >
              Get Started
            </a>
            <button
              className="nav-hamburger"
              onClick={toggleMenu}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <IoClose className="nav-hamburger-icon" />
              ) : (
                <RxHamburgerMenu className="nav-hamburger-icon" />
              )}
            </button>
          </div>
          <ul className="nav-menu-items-2">
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Loans" onClick={toggleMenu}>
                Loan Programs{" "}
              </Link>
            </li>
            <li>
              <Link to="/Testimonials" onClick={toggleMenu}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/Contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/Portfolio" onClick={toggleMenu}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/Articles" onClick={toggleMenu}>
                Articles
              </Link>
            </li>
            <li>
              <Link to="/About" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <Link
              to="https://calendly.com/sese-ntem/30min?preview_source=et_card&month=2025-08"
              className="nav-schedule-call-2"
            >
              Get Started
            </Link>
          </ul>
        </div>
      </header>

      <nav className={`nav-menu ${isOpen ? "show" : ""}`}>
        <ul className="nav-menu-items">
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Loans" onClick={toggleMenu}>
              Loan Programs{" "}
            </Link>
          </li>
          <li>
            <Link to="/Testimonials" onClick={toggleMenu}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/Contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/Portfolio" onClick={toggleMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/Articles" onClick={toggleMenu}>
              Articles
            </Link>
          </li>
          <li>
            <Link to="/About" onClick={toggleMenu}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
