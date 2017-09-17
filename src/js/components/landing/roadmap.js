import roadmap from 'images/map.svg';

const noPaddingTop = {paddingTop: 0};

export default function Roadmap() {
  return <section className="section" style={noPaddingTop}>
    <div className="container">
      <h1 className="title is-2 ethcrow-subtitle is-spaced has-text-centered">Roadmap</h1>
      <div className="columns is-centered is-multiline">
        <div className="column is-half has-text-right is-hidden-mobile">
          <img
            src={roadmap}
            className="image is-350x350 is-inline"
            alt="Roadmap"
            style={{marginRight: '20px'}}/>
        </div>
        <div className="column is-half">
           <div className="column is-12 content ">
            <h1 className="title is-12 ethcrow-title">
              <span className="icon is-large">
                  <i className="fa fa-flag-checkered"></i>
              </span>&nbsp;Production
            </h1>
          </div>
          <div className="column is-12 content ">
            <h1 className="title is-12 ethcrow-title">
              <span className="icon is-large">
                  <i className="fa fa-flag-checkered"></i>
              </span>&nbsp;Feedback</h1>
          </div>
          <div className="column is-12 content">
            <h1 className="title is-12 ethcrow-title">
              <span className="icon is-large">
                  <i className="fa fa-flag-checkered"></i>
              </span>&nbsp;Improvements
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
