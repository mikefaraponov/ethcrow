import ContractItem from 'components/contracts/contract-item';

const initialContracts = [
  {
    id: 1,
    status: 'NEW',
        from: 'You',
    to: 'Mikhail Shumaher',
  },
  {
    id: 2,
    status: 'PENDING',
        from: 'You',
    to: 'Mikhail Shumaher',
  },
  {
    id: 3,
    status: 'X',
      from: 'You',
    to: 'Mikhail Shumaher',
  },
  {
    id: 4,
    status: 'SUCCESS',
    from: 'You',
    to: 'Mikhail Shumaher',
  },
];

export default function ContractsList({contracts=initialContracts}) {
  return <section className="section">
    <div className="container">
      <div className="columns is-centered">
      <div className="column is-8">
      <button className="button is-success">
        <span className="icon">
          <i className="fa fa-plus-circle"/>
        </span>
        <span>Create new contract</span>
      </button>
      </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-8">
          {
            contracts.length ?
            contracts.map((contract) => <ContractItem
              status={contract.status}
              from={contract.from}
              to={contract.to}
              key={contract.id}
            />) : <NoContracts/>
          }
        </div>
      </div>
    </div>
  </section>;
}

function NoContracts() {
  return <div>NoContracts</div>;
}
