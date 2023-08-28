import './App.css';
import { useState } from 'react';
import CrewForm from './Components/CrewForm';
import Header from './Components/Header';
import Banner from './Components/Banner';

function App() {
  const [crewForm, setCrewForm] = useState(false);

  // Show CrewForm Componenet
  const displayCrewForm = () => {
    setCrewForm(!crewForm);
    console.log(crewForm);
  };

  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <button className="textButton" onClick={displayCrewForm}>
        {crewForm === false ? (
          <p>Show Crew Form</p>
        ) : (
          <p>Enter Your Crew Data</p>
        )}
      </button>
      {crewForm === true ? <CrewForm></CrewForm> : <></>}
    </div>
  );
}

export default App;
