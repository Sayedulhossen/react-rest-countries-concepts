import './App.css';
import { useState } from 'react';
import Countries from './components/Countries/Countries';
import Person from './components/Person/Person';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* <Countries></Countries> */}
      <Header></Header>
      <Countries></Countries>
      <Person></Person>
    </div>
  );
}
// function Countries() {
  
//   const [countries, setCountries] = useState([]);
//     useEffect( () => {
//       fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then( data => setCountries(data))
     
//     },[]);
//   return (
//     <div>
//       <h1>Travells all around the worlds!!!</h1>
//       <h4>Countries Available: {countries.length}</h4>
//       {
//         countries.map( country  => <Country capital={country.capital}></Country>)
//       }
//     </div>
//   )
// }
// function Country(props) {
//   return (
//     <div>
//       <h2>Capital: {props.capital}</h2>
//       {/* <h2>languages: {props.languages}</h2> */}
//     </div>
//   )
// }
export default App;
