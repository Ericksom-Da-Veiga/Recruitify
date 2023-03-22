import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import Categorie from './Components/Categorie';
import Emploi from './Components/Emploi';
import Fin from './Components/Fin'

import Brand from './Images/logo.png';
import img1 from './Images/job1.jpg';
import img2 from './Images/job2.jpg';
import img3 from './Images/job3.jpg';
import img4 from './Images/job4.jpg';

function App() {
  return (
    <div className="App">
        <Navbar img={Brand} link1='#' link2='#' link3='#' link4='#'/>
        <Intro img1={img1} img2={img2} img3={img3} img4={img4} />
        <Categorie/>
        <Emploi/>
        <Fin/>
    </div>
  );
}

export default App;
