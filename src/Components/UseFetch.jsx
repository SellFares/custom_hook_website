import React, { useEffect, useState } from 'react';

 const useFetch = (url) => {
    const[data,setData]=useState();
    useEffect(()=>{ //This is a React Hook used for performing side effects in functional components. It’s typically used for fetching data, subscribing to events, or any other side effects that don’t involve rendering.
        fetch(url).then((res)=>res.json()) //This initiates an HTTP request to the specified url.
        .then((data)=>setData(data))
    },[])
  return [data]
}

export default useFetch