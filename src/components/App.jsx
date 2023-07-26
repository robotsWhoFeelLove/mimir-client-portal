import '@fontsource/noto-sans';
import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
import {Routes,Route, useParams} from 'react-router-dom';
import Header from "./Header"
import Header2 from "./Headerr2"
import qwa from "../assets/QWA_Logo_Full_Color.svg"
// import viteLogo from '/vite.svg'
import Banner from './Banner';
import Question from './Question'
import Radials from './Radials'
import webs from '../assets/webs.png'
import _ from "lodash";
import ps from '../main';
// import './App.css'










function App() {
  const [results, setResults] = useState({})
  const [questions, setQuestions] = useState([])

  

  const queryParameters = new URLSearchParams(window.location.search)
  const type = queryParameters.get("type")
  const cid = queryParameters.get("cid")
  const aud = queryParameters.get("aud")

  const fetchString2 = `http://localhost:3000/api/survey/${cid}/${type}/${aud}`
console.log({fetchString2})
  // console.log(this.props.match.params.clientID)
  const fetchString = `http://localhost:3000/api/results/${cid}`
  console.log({fetchString})

  function handleClick(e){
    console.log(e.target)
    const resultsCopy = [...results.questions]
    // setQuestions(resultsCopy)
    let index = resultsCopy.findIndex((el)=> el._id === e.target.name )
    resultsCopy[index].score = Number(e.target.value)
    console.log({resultsCopy})
    setQuestions(resultsCopy)
    // console.log({results})
    return resultsCopy
  }

  function handleSubmit(e){
    e.preventDefault()
    const questionClone = _.cloneDeep(questions)
    // console.log({questionClone})
  const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({questions: questionClone})
    }
    // console.log({requestOptions})
    
    fetch(fetchString2,requestOptions)
      .then(response=> response.json())
      .then(response=> console.log({response}))
      .catch(err => console.error(err));
    
    
  }

 


  

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
<div className="main w-screen">
  
        <Banner
  
          />
        <div className="z-01">
  
            {results.questions ? results.questions.map((question,index)=> {
              // questions.push(question);
              // console.log({questions});
          return (<>
              <div className='questions lg:w-screen∂ bg-fixed h-screen sticky top-0 grid self-center'>
                <Question
                  key="question._id"
                  question={question}
                  text={question.display_text}
                  handleClick={handleClick}
                 
                  />
  
              {!results.questions[index+1] &&
                <div className="h-[30vh] grid">
                  <button onClick={handleSubmit} type="button" className="self-center justify-self-center z-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
                  </div>}
            </div>
          </>)
        }
  
        )
  
     :  <div>Loading...</div>}
  
        </div>
  
  
</div>
      {/* <div className="sticky bottom-0 z-0 flex h-screen items-center justify-center">
        <img src="https://www.stockvault.net/data/2016/03/14/187732/preview16.jpg" className="h-full w-full object-cover" />
      </div> */}
      
          </>);
          
    

  
}

export default App
