import { useState, useEffect} from "react"

function useFetchData (url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
        setLoading(true)
        console.log(loading, "sebelum")
        fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(loading)
          console.log(data)
          setData(data.teams)
          setLoading(false)
        }

        )
        .catch(err =>{
          console.log(err)
        })

    }, [url])

    return {
        data,
        setData,
        loading,
        setLoading
    }
}

export default useFetchData