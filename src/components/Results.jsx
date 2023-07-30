import '@fontsource/noto-sans';
import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
import {Routes,Route, useParams} from 'react-router-dom';
import qwa from "../assets/QWA_Logo_Full_Color.svg"
// import viteLogo from '/vite.svg'
import Banner from './Banner';
import Question from './Question'
import Radials from './Radials'
import webs from '../assets/webs.png'
import _ from "lodash";
import circuit from "../assets/abstract_background_with_modern_hexagonal_tech_design_2801.jpg"

// import './App.css'










export default function Results() {
  const [results, setResults] = useState({})
  const [questions, setQuestions] = useState([])

  

  const queryParameters = new URLSearchParams(window.location.search)
  const type = queryParameters.get("type")
  const cid = queryParameters.get("cid")
  const aud = queryParameters.get("aud")

  

  const fetchString2 = `${import.meta.env.VITE_API_URL}api/survey/${cid}/${type}/${aud}`
window.console.log({fetchString2})
  // console.log(this.props.match.params.clientID)
  const fetchString = `${import.meta.env.VITE_API_URL}api/results/${cid}`
  window.console.log({fetchString})

  function handleClick(e){
    console.log(e.target)
    const resultsCopy = [...results.questions]
    // setQuestions(resultsCopy)
    let index = resultsCopy.findIndex((el)=> el._id === e.target.name )
    resultsCopy[index].score = Number(e.target.value)
    window.console.log({resultsCopy})
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
    window.console.log({requestOptions})
    
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
        window.console.log({results})
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
          <div className='parallax'>
        <div className="parallax__group">
       
      
       
          {results.questions && <div  className='parallax__layer parallax__layer_1' style={{ height: `calc(100vh * ${results.questions.length*.7}`}}>
                {/* <img src={circuit} alt=""  /> */}
          </div>}

            {results.questions ? results.questions.map((question,index)=> {
   
          return (<>

              <div className='questions section lg:w-screen bg-fixed h-screen sticky top-0 grid self-center'>
                
                <Question
                  className="section2 "
                  key="question._id"
                  question={question}
                  text={question.display_text}
                  handleClick={handleClick}
                 
                  />
  <div className='section1'></div>
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
</div>
      {/* <div className="sticky bottom-0 z-0 flex h-screen items-center justify-center">
        <img src="https://www.stockvault.net/data/2016/03/14/187732/preview16.jpg" className="h-full w-full object-cover" />
      </div> */}
      
          </>);
          
    

  
}


