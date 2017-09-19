import Features from 'components/landing/features';
import Slogan from 'components/landing/slogan';
import Subscribe from 'components/landing/subscribe';
import GoToApp from 'components/landing/go-to-app';
import Roadmap from 'components/landing/roadmap';

export default function Landing()  {
  return <div>
    <Slogan/>
    <GoToApp/>
    <Features/>
    <Roadmap/>
    <Subscribe/>
  </div>;
}
