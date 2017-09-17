import Features from 'components/landing/features';
import Slogan from 'components/landing/slogan';
import Subscribe from 'components/landing/subscribe';
import SignUp from 'components/landing/sign-up';
import Roadmap from 'components/landing/roadmap';
import {connect} from 'react-redux';
// import {session} from 'actions';

// @connect((props) => ({
//   isLoading: props.loading.signUpLoading,
//   auth: !!props.session.currentUser,
// }), {
//   onSignUp: session.signUpUser,
// })
export default class Landing extends React.Component  {
    render() {
      return <div>
        <Slogan/>
        <SignUp
          isLoading={this.props.isLoading}
          onSignUp={this.props.onSignUp || Function.prototype}
        />
        <Features/>
        <Roadmap/>
        <Subscribe/>
      </div>;
    }
}
