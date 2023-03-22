//ca c'est la partie d'un la page d'accueil ou on met les categories de examples

import "../CSS/Categorie.css"
import directeur from "../Images/ideiapngtree-light-bulb-icon-vector-light-bulb-ideas-symbol-illustration-png-image_1715627.jpg"
import redacteurs from "../Images/tome-nota-do-icone-de-esboco-desenhado-de-mao-lapis-e-folha-de-papel-desenho-ilustracao-vetorial-para-impressao-web-mobile-e-infograficos-isolados-no-fundo-branco_107173-18008.jpg" 
import informatique from "../Images/pc2aycrk7.jpg"
import graphiste from "../Images/83097858-icône-de-ligne-de-crayon-logo-noir-de-haute-qualité-pour-la-conception-de-sites-web-et-les.jpg"

export default function Categorie(){
    return(
        <div class="categorie">
            <img src= {directeur} alt="directeur" />
            <p id="label1" for="">DIRECTEURS <br/> ARTISTIQUES</p>

            <img src={redacteurs} alt=" redacteurs"/>
            <p for="">RÉDACTEURS</p>

            <img src={informatique} alt="Informatique"/>
            <p for="">INFORMATIQUE</p>

            <img src={graphiste} alt="Graphiste"/>
            <p for="">GRAPHISTES</p>
        </div>
    );
}