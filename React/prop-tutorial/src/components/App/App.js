
import './App.css';
import data from './data';
import AnimalCard from '../AnimalCard/AnimalCard';
import './App.css'

function App() {
  return (
    <div className="wrapper">
    <h1>Animals</h1>
    {data.map(animal =>(
      <AnimalCard 
      addtional = {animal.additional}
      diet = {animal.diet}
      key={animal.name}
      name={animal.name}
      scientificName = {animal.scientificName}
      size = {animal.size}/>
    ))}
</div>
);
}

export default App;
