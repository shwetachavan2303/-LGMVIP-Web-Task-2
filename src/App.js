import './App.css';
import React, { useState } from 'react';
import Navbar from './component/Navbar';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = () => {
    setLoading(true);
    fetch("https://reqres.in/api/users?page=1")
      .then(res => res.json())
      .then(d => {
        setData(d.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <Navbar fetchUsers={fetchUsers} />
      {loading && <div className="loader"></div>}
      {data && data.map((x) => (
        <section key={x.id}>
            <img src={x.avatar} alt={`${x.first_name} ${x.last_name}`} />
          <p>{x.first_name} {x.last_name} <span>{x.email}</span></p>
        </section>
      ))}
    </div>
  );
}

export default App;
