import React, {useState, useEffect} from "react"
import Card from "./components/Card"
function App() {

  const [data, setData] = useState([])

  useEffect(() =>{
    fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain")
    .then(res => res.json())
    .then(data => 
      // console.log(data.teams.slice(0,24)),
      setData(data.teams.slice(0,24))
    )
    .catch(err =>{
      console.log(err)
    })
  }, [])
  return (
    <>
        <div className="title"><h1>La Liga Team Info</h1></div>
        
        <div className="card-container row">
            {data.map( el => {
              return <Card key = {el.idTeam} data ={el}></Card>
            })}
        </div>


    </>
  );
}

export default App;
