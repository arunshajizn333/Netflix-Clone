import axios from 'axios'
import React, { useState } from 'react'

const Sam = () => {
    const[state,setState]=useState([])
  return (
    <div>
        <h1 style={{color: "white"}}>Heloo world</h1>
        <button onClick={()=>{
            axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
                          console.log(response.data);
                          setState(response.data)
            })
        }}>Click mE</button>
    {state.map((obj,index)=>{
        return(
            <div>
                <h1 style={{color: "white"}}>{index}</h1>
                <h4 style={{color: "white"}}>{obj.title}</h4>
            </div>
        )

    }

    
    )}
    </div>
  )
}

export default Sam