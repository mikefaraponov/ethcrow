import {Redirect} from 'react-router-dom';

export function ifNotAuthenticated(to) {
  return ifAuthenticated(to, (_) => !_);
}

export function ifAuthenticated(to, predicate = (_) => _) {
  return (target, key, descriptor) => {
    const func = descriptor.value;
    descriptor.value = function(...args) {
      if (predicate(this.props.isAuthenticated)) {
        return <Redirect to={to}/>;
      } else {
        return func.apply(this, args);
      }
    };
    return descriptor;
  }
}
