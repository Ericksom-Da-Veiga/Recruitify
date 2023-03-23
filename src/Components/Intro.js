import './../CSS/Intro.css';


function Info () {
    return (
        <div id='info'>
            <div>
                <h1 class="discription">Nous <br/> trouvons <br/>  les meilleurs <br/> talents pour vous</h1>
                <br/>
                <p>Notre mission est de mettre en relation les talents et les entreprises</p>
                <br/>
                <input  type="button" value="Découvrir"/>
                <input  type="button" value="Découvrir"/>
            </div>
        </div>
    );
}

function Images (props) {
    return (
        <div id='images'>
            <div>
                <img id='jobs' style={{width:"150px",height:"auto"}} src={props.img1}/>
                <img id='jobs' style={{width:"150px",height:"auto"}} src={props.img2}/>
                <br/><br/>
                <img id='jobs' style={{width:"150px",height:"auto"}} src={props.img3}/>
                <img id='jobs' style={{width:"150px",height:"auto"}} src={props.img4}/>
            </div>
        </div>
    );
}

function Introduction(props) {
    return (
        <div id='intro'>
            <Info/>
            <Images  img1={props.img1} img2={props.img2} img3={props.img3} img4={props.img4} />
        </div>
    );
}

export default Introduction;
