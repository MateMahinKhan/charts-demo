import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/sevenday">
            Seven Day
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
