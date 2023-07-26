import '@fontsource/noto-sans';
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import {Routes,Route, useParams} from 'react-router-dom';
import Header from "./Header"
import Header2 from "./Headerr2"
import qwa from "../public/QWA_Logo_Full_Color.svg"
import viteLogo from '/vite.svg'
import Banner from './Banner';
import Question from './Question'
import Radials from './Radials'
import webs from '../public/webs.png'
import './App.css'

function App() {
  const [results, setResults] = useState({})

  

  const queryParameters = new URLSearchParams(window.location.search)
  const type = queryParameters.get("type")
  const cid = queryParameters.get("cid")
  const aud = queryParameters.get("aud")

  const fetchString2 = `http://localhost:3000/api/survey/${cid}/${type}/${aud}`
console.log({fetchString2})
  // console.log(this.props.match.params.clientID)
  const fetchString = `http://localhost:3000/api/results/${cid}`
  console.log({fetchString})

  // const requestOptions = {
  //   method: 'GET',
  //   body: JSON.stringify({"client" : `${name}`})
  // }
  let questions=[]

  const fetchClientData = () => {
    fetch(fetchString2)
      .then(response => {
        return response.json()
      })
      .then(results=> {
        setResults(results)
      })
      .then(()=>{
  
        })
      
  }

  useEffect(()=> {
    fetchClientData()
    
  },[])



  return (
        
      <>

      <Banner 
        
        />
      <div className="z-01">
  
          {results.questions ? results.questions.map((question,index)=> {
            questions.push(question);
            console.log({questions});
        return (<>
            <div className='questions lg:w-[80vw] bg-fixed h-screen sticky top-0 grid self-center'>
              <Question
                key="question._id"
                question={question}
                text={question.display_text}
                />
            
            {!results.questions[index+1] && 
              <div className="h-[30vh] grid"><button type="button" className="self-center justify-self-center z-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button></div>}
          </div>
        </>)
      }
      
      )
     
   :  <div>Loading...</div>}
  
      </div>

 
      {/* <div className="sticky bottom-0 z-0 flex h-screen items-center justify-center">
        <img src="https://www.stockvault.net/data/2016/03/14/187732/preview16.jpg" className="h-full w-full object-cover" />
      </div> */}
      
          </>);
          
    

  
}

export default App
