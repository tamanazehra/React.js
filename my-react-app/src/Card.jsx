

function Card(props){
    return(
        <div className="card">
            <img className="pfp"src={props.img} alt="profile picture" ></img>
            <h2 className='cardTitle'>{props.name}</h2>
            <p className='cardText'>{props.description}</p>
            <button className='followBtn'>Follow</button>

        </div>
    );
}

export default Card;