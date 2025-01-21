import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Navraj272').then(res=>res.json()).then(data=>setData(data))
    },[])


  return (
    <div className='text-center bg-gray-600 text-white
    p-4 text-3xl'>Github Id: {data.id} ,Login : {data.login}
    <img src={data.avatar_url} alt="git picture" />

    </div>
  )
}

export default Github
