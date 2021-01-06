import React, {useEffect}  from "react"
import {Link} from "react-router-dom"
import Card from "../components/Card"
import useFetchData from "../Hooks/FetchData"
import {useSelector,useDispatch} from "react-redux"
import {addNewFav} from '../store/action'

function Home() {
  const {data } = useFetchData("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain")
  const fav = useSelector(state => state.fav)
  const dispatch = useDispatch()

  useEffect(() => {
    data.forEach((el) =>{
      el.favorite = false
    })
    console.log(data, "before")
  }, [])

  function addToFav(index) {
    data[index].favorite = true
    console.log(data[index])
    dispatch(addNewFav(data[index]))
  }


  return (
    <>
        {data.length === 0  ? 
        <h1>Loading...</h1> :
        <>
          <div className="title">
            <Link to="/favorite">Fav</Link>
            <h1>La Liga Team Info</h1>
          </div>
          <div className="card-container row">
              {data.map( (el,idx) => {
                return <Card 
                key = {el.idTeam} 
                data ={el} 
                index= {idx}
                addToFav = {addToFav}
                ></Card>
              })}
          </div>
        </>
        }

    </>
  );
}

export default Home;
