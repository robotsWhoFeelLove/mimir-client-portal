import React, { useState } from 'react';

export default function Radials(props){
      return (
  

            <main  className="grid min-h-fit w-full place-items-center ">
              <div className="grid w-[80vw] md:w-[30rem] grid-cols-5 gap-2 rounded-xl bg-gray-200 p-2">
                <div>
                  <input onClick={props.handleClick} type="radio" name={props.radialId} id={props.radialId+"-1"} defaultValue={1} className="peer hidden" defaultChecked />
                  <label htmlFor={props.radialId+"-1"} className="block cursor-pointer select-none rounded-xl p-2 text-center  peer-checked:bg-[#0EA8DC] peer-checked:font-bold peer-checked:text-white">1</label>
                </div>
                <div>
                  <input onClick={props.handleClick} type="radio" name={props.radialId}  id={props.radialId+"-2"} defaultValue={2} className="peer hidden"/>
                  <label htmlFor={props.radialId+"-2"} className={`block cursor-pointer select-none rounded-xl p-2 text-center  peer-checked:bg-[#0EA8DC] peer-checked:font-bold peer-checked:text-white`}>2</label>
                </div>
                <div>
                  <input onClick={props.handleClick} type="radio" name={props.radialId} id={props.radialId+"-3"} defaultValue={3} className="peer hidden"/>
                  <label htmlFor={props.radialId+"-3"} className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-[#0EA8DC] peer-checked:font-bold peer-checked:text-white">3</label>
                </div>
                <div>
                  <input onClick={props.handleClick} type="radio" name={props.radialId}  id={props.radialId+"-4"} defaultValue={4} className="peer hidden"/>
                  <label htmlFor={props.radialId+"-4"} className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-[#0EA8DC] peer-checked:font-bold peer-checked:text-white">4</label>
                </div>
                <div>
                  <input onClick={props.handleClick} type="radio" name={props.radialId}  id={props.radialId+"-5"} defaultValue={5} className="peer hidden"/>
                  <label htmlFor={props.radialId+"-5"} className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-[#0EA8DC] peer-checked:font-bold peer-checked:text-white">5</label>
            
                </div>
            
              </div>
            
            </main>
    
      );
    }
