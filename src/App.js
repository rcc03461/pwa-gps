// import logo from './logo.svg';
import './App.css';
import {usePosition} from './components/usePosition';
// import Nav from './components/Nav';
// import { useEffect } from 'react';

function App() {

  const {latitude, longitude, error} = usePosition();


  // useEffect(()=>{
  //   navigator.geolocation.getCurrentPosition(
  //     function(position) {
  //       console.log(position);
  //     },
  //     function(error) {
  //       console.error("Error Code = " + error.code + " - " + error.message);
  //     }
  //   );
  // }, []);

  return (
    <div className="App">
  
    {/* <Nav/> */}
    <main>
      <h1>CSS is Cool</h1>
      <code>
        latitude: {latitude}<br/>
        longitude: {longitude}<br/>
        error: {error}
      </code>

    </main>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
