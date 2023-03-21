import Menu from './Components/Menu';
import Sigla from './Components/Sigla';
import Categorie from './Components/Categorie';
import Emploi from './Components/Emploi';
import Fin from './Components/Fin'

function App() {
  return (
    <div className="App">
      <Menu/>
        <Sigla/>
        <Categorie/>
        <Emploi/>
        <Fin/>
    </div>
  );
}

export default App;
