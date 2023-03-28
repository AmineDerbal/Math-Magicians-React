import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/Calculator">Calculator</Link>
    <Link to="/Quote">Quote</Link>
  </nav>
);

export default Navbar;
