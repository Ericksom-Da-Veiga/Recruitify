//le footer
import "../CSS/Fin.css"
export default function Fin(){
    return(
        <footer class="fin">
            <h3>NOUS CONTACTER </h3> <br/><br/><br/><br/>
            <p id="pmail">notreenail@gmail.com </p> 
            <p id="ptelephone">(212)07827817 </p>
            <p id="padress">adress rue x rabat 1578 </p>

            <form action="" class="info">
                <input id="telephone" type="text" name="telephone" placeholder="telephone" required/>
                <input id="mail" type="email" name="mail" placeholder="mail" required/>
                <input id="nom" type="text" name="nom" placeholder="Nom" required/>
                
                <input id="envoyer" type="button" value="Envoyer"/>
            </form>
            <input id="description" type="text" name="description" placeholder="description" ></input> 

            <a id="ps" href="#">Politique d'usage du site</a>
            <a id="pc" href="#">Politique em matiere des cookies</a>
        </footer>
    )
}