import React  from "react"
import { useHistory } from "react-router-dom"
function Card (props) {
    const history = useHistory()
    function getInfo(event){
        console.log(event.target.id)
        history.push(`detail/${event.target.id}`)
    }
    return(
        <div className="card col-sm-2 shadow p-3 mb-5 bg-white rounded" >
        <div className="card-body">
        <img src={props.data.strTeamBadge} className="card-img-top" alt="..."/>
        <h5 className="card-title">{props.data.strTeam}</h5>
            <ul>   
                <li>Formed Year : {props.data.intFormedYear} </li>
                <li>Stadium : {props.data.strStadium}</li>
            </ul>
        <button 
        id= {props.data.idTeam}
        className="btn btn-primary" 
        onClick= {getInfo}
        >More Info</button>
        </div>
    </div>
    )
}

export default Card