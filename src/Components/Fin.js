import "../CSS/index.css"
export default function Fin(){
    return(
        <footer class="fin">
            <h3>NOUS CONTACTER </h3>
            <p id="pmail">notreenail@gmail.com </p> 
            <p id="ptelephone">(212)07827817 </p>
            <p id="padress">adress rue x rabat 1578 </p>

            <input id="dp" type="text" name="discription" ></input>

            <form action="" class="info">
                <input id="telephone" type="text" name="telephone" required/> 
                <input id="mail" type="email" name="mail" required/>
                <input id="nom" type="text" name="nom" required/>
                <input id="envoyer" type="button" value="Envoyer"/>
            </form>

            <a id="ps" href="#">Politique d'usage du site</a>
            <a id="pc" href="#">Politique em matiere des cookies</a>
            <a id="pd" href="#">Politique de donnees</a>
        </footer>
    )
}