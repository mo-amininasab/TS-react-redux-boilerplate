import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';

import {useTypedSelector} from '../hooks/useTypedSelector';

interface Props {}

const RepositoriesList: React.FC<Props> = ({}) => {
  const { searchRepositories } = useActions();

  const [term, setTerm] = useState<string>('');

  const {data, error, loading} = useTypedSelector(state => state.repositories);
  console.log(data);
  

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
    </div>
  );
};

export default RepositoriesList;
