import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/Nikhilsahu31')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 font-semibold p-4 text-3xl'>Github followers: {data.followers}
    
   
    <img className='mx-auto rounded-full' src={data.avatar_url} alt="Git picture" width={300} />
     
    
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Nikhilsahu31')
    return response.json()
}