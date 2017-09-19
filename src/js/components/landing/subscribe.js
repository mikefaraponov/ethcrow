export default class Subscribe extends React.Component {
  render() {
    return <section className="hero is-info">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-one-third is-left">
              <p className="title">Ethcrow <strong>Newsletter</strong></p>
              <p className="subtitle">Get notified when v1 is ready!</p>
            </div>
            <div className="column">
              <div className="field is-grouped">
                <div className="control has-icons-left is-expanded">
                  <input
                    type="email"
                    className="input is-flat required email"
                    placeholder="Email address" required
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope"/>
                  </span>
                </div>
                <div className="control">
                  <input
                    type="button"
                    value="Subscribe"
                    className="button is-white is-outlined"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}

