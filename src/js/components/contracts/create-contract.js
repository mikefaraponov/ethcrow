export default function CreateContract() {
  return <section className="section">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-8">
          <div className="field">
            <label className="label">From</label>
            <div className="control">
              <input disabled className="input" type="text" placeholder="0x2ff4d83d13fb20b88614fbe38aaceaadad9d53fc"/>
            </div>
          </div>
          <div className="field">
            <label className="label">To</label>
            <div className="control">
              <input className="input" type="text" placeholder="Producer address"/>
            </div>
          </div>
          <div className="field is-expanded">
            <label className="label">Price</label>
            <div className="field has-addons">
              <p className="control">
                <a className="button is-static">
                  ETH
                </a>
              </p>
              <p className="control is-expanded">
                <input className="input" type="tel" placeholder="Amount of money hold in contract"/>
              </p>
            </div>
          </div>
          <br/>
          <button className="button is-success">
            Create
          </button>
        </div>
      </div>
    </div>
  </section>;
}
