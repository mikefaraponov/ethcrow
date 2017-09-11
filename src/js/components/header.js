import {NavLink} from 'react-router-dom';
import box from 'images/box.svg';

export default function Header ({isAuthenticated}) {
  return <nav className="nav">
    <div className="container">
      <div className="nav-left">
        <NavLink className="nav-item" to="/">
          <img src={box} className="image is-32x32"/>&nbsp;<b className="logo">Ethcrow</b>
        </NavLink>
      </div>
      <span className="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div className="nav-right nav-menu">
        <NavLink to="/blog" className="nav-item" activeClassName="is-active">
          Blog
        </NavLink>
        <NavLink to="/demo" className="nav-item" activeClassName="is-active">
          Demo
        </NavLink>
        <span className="nav-item">
          <a className="button is-info">
            <span className="icon">
              <i className="fa fa-google"></i>
            </span>
            <span>Sign up</span>
          </a>
        </span>
      </div>
    </div>
  </nav>;
}
