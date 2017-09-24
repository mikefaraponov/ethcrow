import {NavLink} from 'react-router-dom';
import box from 'images/box.svg';
import {observer, inject} from 'mobx-react';
import classnames from 'classnames';
import {withRouter} from 'react-router-dom';

@withRouter
@inject('counter', 'menu')
@observer
export default class Header extends React.Component {
  componentWillMount() {
    this.contractAdded = this.props.counter.onContractAdded();
  }
  componentWillUnmount() {
    this.contractAdded.stopWatching();
  }
  render() {
    const burger = classnames('navbar-burger burger', {
      'is-active': this.props.menu.isOpened,
    });
    const menu = classnames('navbar-menu navbar-end', {
      'is-active': this.props.menu.isOpened,
    });
    return <nav className="navbar" role="navigation">
        <div className="navbar-brand">
          <NavItem to="/" nothing={true}>
            <img src={box} className="image is-32x32"/>
            &nbsp;
            <strong className="logo">Ethcrow</strong>
          </NavItem>
          <span className={burger} onClick={this.props.menu.toggleMenu}>
            <span/>
            <span/>
            <span/>
          </span>
        </div>
        <div className={menu}>
          <NavItem to="/about">
            About
          </NavItem>
          <NavItem to="/contracts">
            App<Counter counter={0}/>
          </NavItem>
          <NavItem to="/keys">
            Keys
          </NavItem>
        </div>
    </nav>;
  }
}

function Counter({counter}) {
  if (counter == 0) {
    return null;
  } else {
    return <span>
      &nbsp;<span className="tag is-info">{counter}</span>
    </span>;
  }
}

function NavItem({to, nothing, children, ...props}) {
  return <NavLink {...props}
    to={to}
    className="navbar-item"
    activeClassName={nothing ? null : 'is-active'}>
    {children}
  </NavLink>;
}
