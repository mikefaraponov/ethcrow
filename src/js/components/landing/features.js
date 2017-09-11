import github from 'images/github.svg';
import ethereum from 'images/bitcoin.svg';
import handshake from 'images/handshake.svg';
import browser from 'images/browser.svg';

const features = [{
  src: handshake,
  title: 'Escrow',
  body: `Leaf CI is fully customizeble.
Via simple YAML file you can add what ever you want
to add to successful pass the build. Also we provide support.
`
}, {
  src: ethereum,
  title: 'Ethereum',
  body: `Leaf CI created with docker in mind.
You can build, test and deploy your docker containers with ease
no matter what inside the container.
`
}, {
  src: browser,
  title: 'Security',
  body: `Our service provides github build workflow.
You push into your repo,
we clone your repo, then platform execute tasks inside
leaf-ci.yml file.
`
}, {
  src: github,
  title: 'Github',
  body: `Leaf CI based on linux virtual
containers LXC/LXD, them provides build speed and isolotaion
from other users for successful and secure build.
`
}];

const renderSpecificFeature = (feature, i) => (
  <div
    key={i}
    className="content column is-12-mobile is-3-desktop is-6-tablet">
    <img
      className="image is-inline is-150x150"
      src={feature.src}
      alt={feature.title}
    />
    <h1 className="title has-text-centered ethcrow-title">
      {feature.title}
    </h1>
    <blockquote className="has-text-left">
      {feature.body}
    </blockquote>
  </div>
);

export default function Features() {
  return <section className="section">
      <div className="container">
        <h1 className="title is-2 is-spaced has-text-centered ethcrow-subtitle">Features</h1>
        <div className="columns is-mobile is-multiline has-text-centered">
          {features.map(renderSpecificFeature)}
        </div>
      </div>
    </section>;
}
