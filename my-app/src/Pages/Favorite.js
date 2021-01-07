import React  from "react"
import {useSelector} from "react-redux"
import Card from "../components/Card"
import {Link} from "react-router-dom"


function Favorite() {
    const fav = useSelector(state => state.dataReducer.fav)

  return (
    <>
        {fav.length === 0  ? 
        <h1>Loading...</h1> :
        <>
          <div className="title">
            <Link to="/">Home</Link>
            <h1>Favorite Team</h1>
          </div>
          <div className="card-container row">
              {fav.map( (el,idx) => {
                return <Card 
                key = {el.idTeam} 
                data ={el} 
                index= {idx}
                ></Card>
              })}
          </div>
        </>
        }
    </>
  );
}

export default Favorite;
