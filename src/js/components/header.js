import {NavLink} from 'react-router-dom';
import box from 'images/box.svg';

export default function Header ({onSignUp, isAuthenticated}) {
  return <nav className="nav">
    <div className="container">
      <Logo/>
      <NavToggle/>
      <Navigation/>
    </div>
  </nav>;
}

function Navigation() {
  return <div className="nav-right nav-menu">
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
  </div>;
}

function Logo() {
  return <div className="nav-left">
    <NavLink className="nav-item" to="/">
      <img src={box} className="image is-32x32"/>&nbsp;<b className="logo">Ethcrow</b>
    </NavLink>
  </div>;
}

function NavToggle() {
  return <span className="nav-toggle">
    <span/>
    <span/>
    <span/>
  </span>;
}
