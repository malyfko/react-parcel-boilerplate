import React, { useState } from 'react';

export const Home = () => {
  const [name, setName] = useState();

  return (
    <>
      <div>{`Welcome${name ? ', ' + name : ''}!`}</div>
      <input
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </>
  );
};
