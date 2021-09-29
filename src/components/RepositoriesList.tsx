import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';

import { useTypedSelector } from '../hooks/useTypedSelector';

interface Props {}

const RepositoriesList: React.FC<Props> = () => {
  const { searchRepositories } = useActions();

  const [term, setTerm] = useState<string>('');

  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && (
        <ul>
          {data.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RepositoriesList;
