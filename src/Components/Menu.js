import "../CSS/index.css"

import logo from "../Images/WORKING.png"


function Menu(){
    return(
      <div class="menu">
        <nav class="bar">
          <li><input type="text"/></li>
          <li><a href="#">A popos de nous</a></li>
          <li><a href="#">Publier</a></li>
          <li><a href="#">Trouver emploi</a></li>
          <img id="logo" src={logo} alt="logo" />
        </nav>
      </div>
    );
}

export default Menu;