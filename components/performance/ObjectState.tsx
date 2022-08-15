import { useState } from 'react';

const ObjState = () => {
  const [objState, setObjState] = useState({ name: '' });

  return (
    <div>
      <h1>Hello {objState.name}!</h1>
      <Content />
      <button onClick={() => setObjState({ name: 'World' })}>set World</button>
    </div>
  );
};

const Content = () => {
  return <p>content</p>;
};

// ObjState.whyDidYouRender = true;

export default ObjState;
