import {NavLink} from 'react-router-dom';

export default function NavContracts({auth, activeContractsCount}) {
  if (auth) {
    return <NavLink
      to="/contracts"
      className="nav-item"
      activeClassName="is-active">
      Contracts&nbsp;<span className="tag is-info contracts">{activeContractsCount || 0}</span>
    </NavLink>;
  } else {
    return null;
  }
}
