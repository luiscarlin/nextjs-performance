import { useState } from 'react';

const ObjState = () => {
  const [objState, setObjState] = useState('');

  return (
    <div>
      <h1>Hello {objState}!</h1>
      <Content />
      <button onClick={() => setObjState('World')}>set World</button>
    </div>
  );
};

const Content = () => {
  return <p>content</p>;
};

ObjState.whyDidYouRender = true;

export default ObjState;
