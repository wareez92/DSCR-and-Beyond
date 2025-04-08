import { Link } from "react-router";

function Nav() {
    return (<>
        <Link to="/">Home</Link>
        <Link to="/Loans">Loan Programs</Link>
        <Link to="/Testimonials">Testimonials</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Portfolio">Portfolio</Link>
    </>
    )
}

export default Nav;