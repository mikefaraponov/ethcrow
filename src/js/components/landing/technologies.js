import bulma from 'images/bulma.png';
import ethereum from 'images/ethereum.svg';
import ipfs from 'images/ipfs.svg';
import mobx from 'images/mobx.svg';
import react from 'images/react.svg';

export default function Technologies() {
  return <div className="container section"><div className="columns is-vcentered">
    <div className="column has-text-right">
      <div className="columns is-multiline is-mobile">
          <div className="column is-12 has-text-centered">
            <img className="image is-inline" src={bulma} height="auto" width="50%" alt="x"/>
          </div>
          <div className="column is-3">
            <img className="image is-128x128" src={ipfs}/>
          </div>
          <div className="column is-3">
            <img className="image is-128x128" src={ethereum}/>
          </div>
          <div className="column is-3">
            <img className="image is-128x128" src={react}/>
          </div>
          <div className="column is-3">
            <img className="image is-128x128" src={mobx}/>
          </div>
        </div>
    </div>
    <div className="column">
      <div className="subtitle is-2 ethcrow-subtitle">Some pretty awesome technologies<br/> that we are using.</div>
    </div>
  </div></div>;
}
