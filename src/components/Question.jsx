import Radials from "./Radials"

export default function Question(props){

  return (  <div className="h-full justify-self-center self-center grid">

        <div className="bg-gray-700 bg-opacity-40 text-center mx-2 lg:w-[50vw] backdrop-blur-md pt-4 pb-12 self-center">
            <div  className="text-white question my-10 text-2xl px-5 underline decoration-[#FDB517]">
                {props.text}
            </div>
              <Radials
                handleClick={props.handleClick}
                key={"rad"+props.question._id}
                radialId={props.question._id}
          
                />
        </div>


  </div>)

}