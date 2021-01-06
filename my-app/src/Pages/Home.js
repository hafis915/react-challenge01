import React from "react"
import Card from "../components/Card"
import useFetchData from "../Hooks/FetchData"

function Home() {
  const {data, loading} = useFetchData("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain")

  return (
    <>
        {loading ? 
        <h1>Loading...</h1> :
        <>
        <div className="title"><h1>La Liga Team Info</h1></div>
        <div className="card-container row">
            {data.map( el => {
              return <Card key = {el.idTeam} data ={el}></Card>
            })}
        </div>
        </>
        }
        


    </>
  );
}

export default Home;
