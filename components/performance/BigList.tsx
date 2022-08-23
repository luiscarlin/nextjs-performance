import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

const GET_COUNTRIES = gql`
  query Countries {
    countries {
      name
      emoji
    }
  }
`;

interface Country {
  name: string;
  emoji: string;
}

interface GetCountryData {
  coutries: Country[];
}

const BigList = ({ countries }: { countries: Country[] }) => {
  return (
    <div>
      <h2>BigListPureComponent</h2>
      <div>
        {countries.map((n) => (
          <div key={n.name}>
            {n.name} - {n.emoji}
          </div>
        ))}
      </div>
    </div>
  );
};

BigList.displayName = 'BigListPureComponent';

const Main = () => {
  const [count, setCount] = useState(0);

  const { data, loading, error } = useQuery<any, GetCountryData>(
    GET_COUNTRIES,
    {
      fetchPolicy: 'network-only',
    }
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  /* use the hook instead of the const to prevent
   ** "BigListPureComponent" from re-rendering wit this component */

  //const bigListStyle = React.useMemo(() => ({ width: "100%" }), []);
  // const bigListStyle = { width: '100%' };

  return (
    <div>
      <h1>Big List</h1>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>
          Increase Count: {count}
        </button>
      </div>
      <BigList countries={data.countries} />
    </div>
  );
};

export default Main;
