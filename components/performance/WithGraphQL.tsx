import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

const GET_COUNTRIES = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;

const WithGraphQL = () => {
  const [objState, setObjState] = useState('');

  return (
    <div>
      <h1>Hello {objState}!</h1>
      <Countries />
      <button onClick={() => setObjState('World')}>set World</button>
    </div>
  );
};

// eslint-disable-next-line react/display-name
const Countries = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES, {
    fetchPolicy: 'network-only',
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const countries = data.countries.slice(0, 4);

  return (
    <>
      {countries.map((country: any) => {
        return (
          <p key={country.code}>
            {country.code} - {country.emoji}
          </p>
        );
      })}
    </>
  );
};

// WithGraphQL.whyDidYouRender = true;

export default WithGraphQL;
