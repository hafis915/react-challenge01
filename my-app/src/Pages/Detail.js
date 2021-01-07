import React , {useEffect} from "react"
import {useParams} from "react-router-dom"
import  {useHistory} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {fetchDetail} from "../store/action"
function Detail () {
    const {clubId} = useParams()
    // const {data} = useFetchData(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${clubId}`)
    const detail = useSelector(state => state.detail)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        console.log(detail, "detail")
        dispatch(fetchDetail(clubId))
    }, [])

    function goToHomePage() {
        history.push("/")
    }
    return (
        <>
        {detail.length === 0  ? <h1> Loading.. </h1> : 
        <>
        <div className = "container-detail">
            <div className= "detail shadow p-3 mb-5 bg-white rounded">
                <div>
                    <h1>{detail.strTeam}</h1>
                    <img 
                    src={detail.strTeamBadge}
                    alt = "logo"
                    ></img>
                </div>
                <div>
                    <h4>Description : <p>{detail.strDescriptionEN}</p></h4>
                    <h4>Formed Year : {detail.intFormedYear}</h4>
                    <h4>Official website : <a href={detail.strWebsite}>{detail.strWebsite}</a></h4>

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