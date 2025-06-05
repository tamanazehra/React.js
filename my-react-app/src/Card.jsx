
import pfp from './assets/pfp.png';

function Card(){
    return(
        <div className="card">
            <img className="pfp" src={pfp} alt="profile picture"/>
            <h2 className='cardTitle'>Tamana Zehra</h2>
            <p className='cardText'>Web Developer</p>
            <button className='followBtn'>Follow</button>

        </div>
    );
}

export default Card;