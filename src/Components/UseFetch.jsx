import { useState, useEffect } from "react"

const UseFetch = (url) => {
    const [data,setData] = useState(); 
    useEffect( () => {
        fetch(url).then((res)=>res.json())  
        //  fetch(url): This initiates an HTTP request to the specified url.
        //  .then((res) => res.json()): This converts the response from the server to JSON format.
        .then((data) => setData(data))
        //  .then((data) => setData(data)): This sets the retrieved data to the state variable data. setData is a function that updates the state in React functional components.
    }, [])
    return [data]
}

export default UseFetch
