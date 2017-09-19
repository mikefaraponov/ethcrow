import featuresList from 'components/landing/features-list';

function toFeature(feature) {
  return <div
    key={feature.id}
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
  </div>;
}

export default function Features() {
  return <section className="section">
      <div className="container">
        <h1 className="title is-2 is-spaced has-text-centered ethcrow-subtitle">Features</h1>
        <div className="columns is-mobile is-multiline has-text-centered">
          {featuresList.map(toFeature)}
        </div>
      </div>
    </section>;
}


