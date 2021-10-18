
import './bootstrap.css';
import './App.css';
import 'tachyons';

 function App () {
  return (
    <div className="App cont dark-gray" id="home">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#home">Pokedex</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
        <div className='tc grow bg-gray br3 pa3 ma2 dib bw2 shadow-5'>
          <img alt='pokemon' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/1.png`} />
          <div>
            <p>Name: </p>
            <p>Ability: </p>
          </div>
        </div> 
    </div>
  )
    
}


export default App;
