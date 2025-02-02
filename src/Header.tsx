import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <Link to="/">Mississauga Weather Co.</Link>
      </div>
      <div>
        <Link to="/sevenday">Seven day chart</Link>
      </div>
    </header>
  );
}

export default Header;
