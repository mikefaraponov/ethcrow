
export default class About extends React.Component {
  render() {
    return <div className="section">
      <div className="columns is-mobile is-centered">
        <div className="column is-8 ">
          <div className="content">
            <h1 className="ethcrow-title">Hello People!</h1>
            <p>This is Escrow<sup><a href="https://en.wikipedia.org/wiki/Escrow">[1]</a></sup> service that allows you to make digital information exchange with confidence</p>
            <h1 className="ethcrow-title">Free*</h1>
            <p>This service free and will be free forever</p>
            <h1 className="ethcrow-title">Typical use case</h1>
            <p>Domain area: <strong>Freelance</strong></p>
            <ul>
              <li>Сustomer search for freelancer outside of the system. And get freelancer ethereum wallet address</li>
              <li>After that he create contract and put the amount of money that was agreed before</li>
              <li>Contract lock money. And ONLY unlock it if freelancer reject contract or customer approve result that was sended via IPFS</li>
              <li>Happy end or not... It on your decision!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  }
}
