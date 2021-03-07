import React from 'react';

function App() {
  const [data, setdata] = React.useState('Name');
  const [data1, setdata1] = React.useState('Surname');
  const [loading, setloading] = React.useState(null);

  const dbconnect = () =>{
    setloading(true)
    fetch('http://localhost:3001/api')
    .then((res)=>res.json())
    .then((data)=>{setdata(data.name);setloading(false);setdata1(data.surname)})
    .catch((err)=>console.log(err))
  }

  return (
    <div className="App">
      <button onClick={dbconnect}>Connect</button>
      <p>{loading!==null && loading ? "Loading..." : data + ' ' + data1}</p>
    </div>
  );
}

export default App;
