import Features from './features';
import Slogan from './slogan';
import Subscribe from './subscribe';
import SignUp from './sign-up';

export default function Landing({onSignUp}) {
  return <main role="main">
      <Slogan/>
      <SignUp onSignUp={onSignUp}/>
      <Subscribe/>
      <Features/>
    </main>;
}





