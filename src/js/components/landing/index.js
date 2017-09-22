import Features from 'components/landing/features';
import Slogan from 'components/landing/slogan';
import Subscribe from 'components/landing/subscribe';
import GoToApp from 'components/landing/go-to-app';
import Roadmap from 'components/landing/roadmap';
import Technologies from 'components/landing/technologies';

export default function Landing()  {
  return <div>
    <Slogan/>
    <GoToApp/>
    <Features/>
    <Technologies/>
    <Roadmap/>
    <Subscribe/>
  </div>;
}
