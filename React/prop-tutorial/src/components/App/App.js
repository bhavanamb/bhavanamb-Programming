
import './App.css';
import data from './data';
import AnimalCard from '../AnimalCard/AnimalCard';
import './App.css'

//showAdditional converts an object to array of pairs ( first element is key and second is value)
//maps data converting key-value to string

function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map(information => `${information[0]}: ${information[1]}`)
    .join('\n');
  alert(alertInformation)
};

function App() {
  return (
    <div className="wrapper">
      <h1>Animals</h1>
      {data.map(animal => (
        <AnimalCard
          additional={animal.additional}
          diet={animal.diet}
          key={animal.name}
          name={animal.name}
          scientificName={animal.scientificName}
          showAdditional={showAdditional}
          size={animal.size}
        />
      ))}
    </div>
  )
}

export default App;
