import './App.css';
import Form from './components/form/form.jsx';
import List from './components/list/list.jsx';
import Header from './components/header/header.jsx';
import React,{useState} from 'react';

function App() {
  const [l,setL]=useState(false);
  const [d,setD]=useState([]);

  // This function is used to add data to array
  const ren=(data)=>{
    setD([...d,data]);
    setL(!l);
  }

  //This function is used to change the components of the page
  const r=()=>{
    setL(!l);
  }

  // This funtion is used to update the object of the array to contain checkout time
  const t=(id)=>{
    const i=d.findIndex(el=>el.id===id);
    const newArr=[...d];
    const current=new Date();
    const time=current.toLocaleTimeString("en-US");
    newArr[i].out=time;
    setD(newArr);
  }

  return (
    <div className="App">
      <Header/>
      {
        l?<List d={d} r={r} t={t}/>:<Form ren={ren}/>
      }
    </div>
  );
}

export default App;
