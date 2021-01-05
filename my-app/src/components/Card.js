import React  from "react"

function Card (props) {
    
    function getInfo(event){
        console.log(event.target.id)
    }
    return(
        <div className="card col-sm-2" >
        <div className="card-body">
        <img src={props.data.strTeamBadge} className="card-img-top" alt="..."/>
        <h5 className="card-title">{props.data.strTeam}</h5>
            <ul>   
                <li>Tahun berdiri : {props.data.intFormedYear} </li>
                <li>Nama stadium : {props.data.strStadium}</li>
            </ul>
        <button 
        id= {props.data.idTeam}
        className="btn btn-primary" 
        onClick= {getInfo}
        >Info detail</button>
        </div>
    </div>
    )
}

export default Card