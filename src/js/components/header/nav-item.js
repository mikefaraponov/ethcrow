import {NavLink} from 'react-router-dom';

export default function NavItem({to, text}) {
  return <NavLink to={to} className="nav-item" activeClassName="is-active">
    {text}
  </NavLink>;
}
