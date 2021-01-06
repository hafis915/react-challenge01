import React , {useEffect} from "react"
import Card from "../components/Card"
import useFetchData from "../Hooks/FetchData"

function Home() {
  const {data, setData ,loading} = useFetchData("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain")

  useEffect(() => {
    console.log("masukk")
    setData(data.slice(0,24))
  },[])

  return (
    <>
        {data.length === 0  ? 
        <h1>Loading...</h1> :
        <>
          <div className="title"><h1>La Liga Team Info</h1></div>
          <div className="card-container row ">
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
