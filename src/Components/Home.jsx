import React, {useEffect, useState} from 'react';

import '../Styles/navbar.css';
import '../Styles/intro.css';
import '../Styles/suggestion.css';
import '../Styles/jobs.css';

import img1 from '../Images/job1.jpg';
import img2 from '../Images/job2.jpg';
import img3 from '../Images/job3.jpg';
import img4 from '../Images/job4.jpg';

function Suggestion (props) {
    return (
        <div id="suggestion">
            <input type="button" value={props.info}/>
        </div>
    );
}

function Home () {
    const [notes, setNotes] = useState([{
        motes_cles: '',
        date_ajout: '',
        date_fin: '',
        poste: '',
        pays: '',
        description: '',
        ville: ''
    }])

    useEffect(() => {
        fetch("/home").then(res => {
            if(res.ok) {
                return res.json();
            }
        }).then(jsonRes => setNotes(jsonRes));
    })
    return (
        <div>
            <div id='intro'>
                <div id='info'>
                    <div>
                        <h1 className="discription">Nous trouvons <br/>  les meilleurs talents pour vous</h1>
                        <br/>
                        <p>Notre mission est de mettre en relation les talents et les entreprises</p>
                        <br/>
                        <input  type="button" value="Découvrire"/>
                        <input  type="button" value="Découvrire"/>
                    </div>
                </div>
                <div id='images'>
                <div>
                    <img id='jobs-img' style={{width:"150px",height:"auto"}} src={img1}/>
                    <img id='jobs-img' style={{width:"150px",height:"auto"}} src={img2}/>
                    <br/><br/>
                    <img id='jobs-img' style={{width:"150px",height:"auto"}} src={img3}/>
                    <img id='jobs-img' style={{width:"150px",height:"auto"}} src={img4}/>
                </div>
            </div>
            </div>
            <div id="suggestions">
                <div id="titre">
                    <h1>Trouvez votre travail ou votre stage idéal</h1>
                </div>
                <div id="s">
                    <h3>Suggestions de travails</h3>
                    <Suggestion info="Ingénierie"/>
                    <Suggestion info="Finance"/>
                    <Suggestion info="Vendeur"/>
                    <Suggestion info="Exploitation"/>
                    <Suggestion info="Marketing"/>
                    <Suggestion info="Formation"/>
                    <Suggestion info="Recherche"/>
                    <Suggestion info="Administration"/>
                    <Suggestion info="Comptabilité"/>
                    <Suggestion info="Arts et design "/>
                    <Suggestion info="Formation"/>
                    <Suggestion info="Stage"/>
                </div>
            </div>
            <div id="jobs">
            
            <div>
                <img/>
            </div>
            {
                notes.map(note => 

                    <div id='job' key={note}>
                        <h2>{note.poste}</h2> <br/>
                        <p><b>Demaine: </b>{note.motes_cles}</p>
                        <p><b>Ville: </b>{note.ville}</p> 
                        <p><b>Début de publication: </b>{note.date_ajout}</p>
                        <p><b>Fin de publication: </b>{note.date_fin}</p> 
                        <p><b>Description: </b>{note.description}</p>
                    </div>
                )
            }
            
            </div>
        </div>
        
    )
}

export default Home;
