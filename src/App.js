import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import useAxios from './useAxios';
import './App.css';

function RandomDog({ data: { message, name } }) {
  return (
    <div>
      <img src={message} />
    </div>
  );
}

function App() {

  const [setUrl, data, loading, setLoading, error] = useAxios();

  function showDoggie() {
    setUrl(`https://dog.ceo/api/breeds/image/random`);
    setLoading(true);
  }

  return (
    <div>
      <h1>Show me a dog!</h1>
      <button onClick={showDoggie}>Show Doggie</button>

      {loading && <Spinner />}

      {!loading && data && <RandomDog data={data} />}

      {error && <div>Error: {error}</div>}

    </div>
  );
}

export default App;