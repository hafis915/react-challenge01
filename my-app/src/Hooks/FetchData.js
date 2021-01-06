import { useState, useEffect} from "react"

function useFetchData (url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
        setLoading(true)
        fetch(url)
        .then(res => res.json())
        .then(data => {
            //   console.log(data.teams.slice(0,24))
            setLoading(false)
            setData(data.teams.slice(0,24))
        }

        )
        .catch(err =>{
          console.log(err)
        })
        .finally(
          setLoading(false)
        )
    }, [url])

    return {
        data,
        setData,
        loading,
        setLoading
    }
}

export default useFetchData