import Card from '../components/Card';
import BigList from '../components/performance/BigList';
import ObjectState from '../components/performance/ObjectState';
import WithGraphQL from '../components/performance/WithGraphQL';

export default function Home() {
  const componentList = [ObjectState, WithGraphQL, BigList];

  return (
    <div className="card-list">
      {componentList.map((Component, i) => (
        <Card key={i}>
          <Component />
        </Card>
      ))}
      <style jsx>{`
        .card-list {
          padding: 20px;
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
