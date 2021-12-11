import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Header from './component/Header';
import Body from './component/Body';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fq from './component/Fq';
function App() {
  const [search, setsearch] = useState("")
  const [resualt, setresualt] = useState([])
  const [counter, setcounter] = useState(0)
  const [submited, setsubmited] = useState(false)
const [respostotal, setrespostotal] = useState(8)
const [loading, setloading] = useState(false)
const newsubmit=()=>{
  setloading(true) 
  axios.get(`https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&per_page=8`)
.then(function (response) {
  // handle success
  setresualt(response.data.items)
setcounter(response.data.total_count)

  setloading(false)
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
  setsubmited(true)
});
}
const submitsearch =()=>{
  setloading(true) 
  axios.get(`https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&per_page=${respostotal}`)
.then(function (response) {
  // handle success
  setresualt(response.data.items)
setcounter(response.data.total_count)
  setrespostotal(respostotal+8)
  setloading(false)
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
  setsubmited(true)
});
}
  return (
    <Router>
    <div className="App">
     <Header/>
<Routes>
<Route path="/" element={<Body  resualt={resualt} counter={counter} search={search} submited={submited}  setsearch={setsearch} newsubmit={newsubmit} loading={loading} submitsearch={submitsearch}/> }/>
     
<Route path="faq" element={<Fq />}/>
</Routes>
    </div>
    </Router>
  );
}

export default App;
