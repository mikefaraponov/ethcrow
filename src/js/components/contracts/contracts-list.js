import ContractItem from 'components/contracts/contract-item';
import Replacer from 'components/contracts/replacer';
import empty from 'images/empty.svg';

export default function ContractsList({contracts}) {
  if (contracts.length > 0) {
    return <div className="columns is-centered">
      <div className="column is-8">{contracts.map(ContractItem.toContract)}</div>
    </div>;
  } else {
    return <Replacer image={empty}/>
  }
}
