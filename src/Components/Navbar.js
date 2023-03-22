import './../Styles/navbar.css';


function Brand (props) {
    return (
            <a href="#">
                <img id='brand' style={{width:"40px",height:"40px"}} src={props.img}/>
            </a>);
}

function Nav (props) {
    return (
        <div id='list' className="list">
            <ul>
                <li><a href={props.link1}>Home</a></li>
                <li><a href={props.link2}>Jobs</a></li>
                <li><a href={props.link3}>Post a job</a></li>
                <li><a href={props.link4}>About</a></li>
            </ul>
        </div>
    );
}

      

function Search () {
    return ( <div id="search">
                <input type="text" placeholder="Post"/>
                <input type="button" value="search"/>
             </div>);
}

var compteur = 0;

function Navbar (props) {
    return (
        <header>
            <div id="navbar">
                <Brand img={props.img}/>
                <Nav link1={props.link1} link2={props.link1} link3={props.link1} link4={props.link1}/>
                <Search/>
                <svg onClick={move} id='menu' width='25px' alt="menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path alt="menu" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>            
            </div>
        </header>
        
    );
}

var compteur = 0;

function move () {
    compteur++;

    if (compteur % 2 === 0) 
    document.getElementById('list').style.display = 'none';
    else
    document.getElementById('list').style.display = 'flex';  

}
 

export default Navbar;