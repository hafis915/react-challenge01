import React , {useDebugValue, useEffect} from "react"
import {useParams} from "react-router-dom"
import useFetchData from "../Hooks/FetchData"
import  {useHistory} from "react-router-dom"


function Detail () {
    const {clubId} = useParams()
    const {data, loading} = useFetchData(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${clubId}`)
    const history = useHistory()

    function goToHomePage() {
        history.push("/")
    }
    return (
        <>
        {data.length === 0  ? <h1> Loading.. </h1> : 
        <>
            <div className="card col-sm-2" >
            <div className="card-body">
                <img src={data[0].strTeamBadge} className="card-img-top" alt="..."/>
                <h5 className="card-title">{data[0].strTeam}</h5>
                    <ul>   
                        <li>Tahun berdiri : {data[0].intFormedYear} </li>
                        <li>Nama stadium : {data[0].strStadium}</li>
                    </ul>
                <button 
                className="btn btn-primary" 
                onClick = {goToHomePage}
                >Back</button>
            </div>
        </div>
        </>

        }
        

        </>
    )
}
export default Detail