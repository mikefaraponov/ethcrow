import github from 'images/github.svg';
import ethereum from 'images/bitcoin.svg';
import handshake from 'images/handshake.svg';
import browser from 'images/browser.svg';

const features = [{
  src: handshake,
  title: 'Escrow',
  body: `Ethcrow provides escrow service for documents, files, secret texts and other types of data without third party, but using smart contracts depending on some rules
`
}, {
  src: ethereum,
  title: 'Ethereum',
  body: `Ethcrow builded on top of Ethereum, an open-source, public, blockchain-based distributed computing platform featuring smart contract functionality
`
}, {
  src: browser,
  title: 'Security',
  body: `It adopted using all required security technics, such as PKI infrastructure, encryption, special HTTP headers and penetration testing
`
}, {
  src: github,
  title: 'Free*',
  body: `Ethcrow Project source codes publicitly available to others who would like to view that code, copy it, learn from it, alter it, or share it
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
