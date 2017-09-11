export default function Subscribe() {
  return <section className="section">
    <div className="container">
      <div className="columns is-centered ">
        <div className="column box is-half bg-ethereum">
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-medium is-info"
              type="email"
              placeholder="Subscribe for news"
            />
            <span className="icon is-left">
              <i className="fa fa-envelope"/>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
