export function addNewFav (payload) {
    return {
        type: "fav/setFav",
        payload
    }
}
export function fetchDetail (clubId){
    console.log(clubId, "action")
    return dispatch => {
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