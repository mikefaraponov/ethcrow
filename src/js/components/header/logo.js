import {NavLink} from 'react-router-dom';
import box from 'images/box.svg';

export default function Logo() {
  return <div className="nav-left">
    <NavLink className="nav-item" to="/">
      <img src={box} className="image is-32x32"/>&nbsp;<b className="logo">Ethcrow</b>
    </NavLink>
  </div>;
}
