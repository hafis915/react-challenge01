import dataReducer from "./reducer"

export function addNewFav (payload) {
    return (dispatch, getState) => {
        const {fav} = getState().dataReducer
        let newData= fav
        newData.push(payload)
        dispatch({
            type: "fav/setFav",
            favorite : newData
        })

    }
    
}
export function fetchDetail (clubId){
    console.log(clubId, "action")
    return (dispatch,getState) => {
        console.log(getState(), "getstate")
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${clubId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data, "dataa")
            dispatch ({
                type : "FETCH_DETAIL",
                detail : data.teams[0]
            })
        })
    }
}