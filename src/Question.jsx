import Radials from "./Radials"

export default function Question(props){

  return (  <div className="h-full justify-self-center self-center grid">

        <div className="bg-gray-700 bg-opacity-40 mx-2 lg:w-[50vw] backdrop-blur-md pt-4 pb-12 self-center">
            <div  className="text-white question my-10 text-2xl px-5 underline decoration-[#FDB517]">
                {props.text}
            </div>
              <Radials
                key={"rad"+props.question}
                radialId={"radials"+props.question}
                />
        </div>


  </div>)

}