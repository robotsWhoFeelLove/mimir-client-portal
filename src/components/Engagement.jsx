import React from 'react';
import {Routes, Route, useParams} from "react-router-dom"
import { useState, useEffect } from 'react';


export function Engagement(){
        const [engagement, setEngagement] = useState()
   
        let { eid } = useParams();

        console.log({eid})

        const fetchItems = (api,setState)=>{
            fetch(import.meta.env.VITE_API_URL+api)
            .then(response => {
              console.log({response})
              return response.json()
            })
            .then(state=> {
              setState(state);
              console.log({state})
              // console.log(clients.length)
            }) 
        }
   
        const apiString = "api/engagement/"+ eid
         console.log(import.meta.env.VITE_API_URL+apiString)
    useEffect(()=>{

        fetchItems("",apiString,setEngagement)
    },[])
      

      return(
        <div>{eid}</div>
      )
}

