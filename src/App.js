
import './App.css';
import useApi from './useApi';
import Shop from './Shop';


import React, { useState } from 'react'


function App() {
  
  const [page, setPage] = React.useState(10);
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { data, isLoading } = useApi(url);
  


  const htmlUseApi = <>
                      {isLoading && 'Loading…'}
                      <button onClick={() => setPage((p) => p + 1)}>Next</button>
                      <ul>
                        {data?.map((el) => (
                            <li key={el.id}>{el.title}</li>
                          ))}
                      </ul>
                    </>;
  

  return (
    <>
      {/* {htmlUseApi} */}
      <Shop/>
    </>
  );
}

export default App

