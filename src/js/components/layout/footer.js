export default function Footer() {
  return <footer className="footer" id="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          <Ethcrow/> by <Me/>. The source code is licensed <MIT/>. The website content is licensed <ANS/>.
        </p>
        <p>
          <a className="icon" href="https://github.com/Ethcrow/Ethcrow">
            <i className="fa fa-github"></i>
          </a>
        </p>
      </div>
    </div>
  </footer>;
}

function ANS() {
  return <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
    CC ANS 4.0
  </a>;
}

function MIT() {
  return <a href="http://opensource.org/licenses/mit-license.php">MIT</a>;
}

function Ethcrow() {
  return <strong>Ethcrow</strong>;
}

function Me() {
  return <a href="https://github.com/mikefaraponov">Mikhail Faraponov</a>;
}
