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
        <div className = "container-detail">
            <div className= "detail shadow p-3 mb-5 bg-white rounded">
                <div>
                <h1>{data[0].strTeam}</h1>
                    <img src={data[0].strTeamBadge}></img>
                </div>
                <div>
                    <h4>Description : <p>{data[0].strDescriptionEN}</p></h4>
                    <h4>Formed Year : {data[0].intFormedYear}</h4>
                    <h4>Official website : <a href={data[0].strWebsite}>{data[0].strWebsite}</a></h4>

                    <button 
                    className="btn btn-danger"
                    onClick = {goToHomePage}
                    > Back Home</button>
                </div>

            </div>
        </div>


        </>

        }
        

        </>
    )
}
export default Detail