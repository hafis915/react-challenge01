import React from "react"
import {useParams} from "react-router-dom"
import useFetchData from "../Hooks/FetchData"

function Detail () {
    const {clubId} = useParams()
    const {data} = useFetchData(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${clubId}`)
    return (
        <>
        <h1>Ini Detail</h1>
        </>
    )
}
export default Detail