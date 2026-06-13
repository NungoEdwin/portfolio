export default function  Button({text,textSize}){
return(
<>
<button className={`hover:bg-aquamarine  transition ease-in-out delay-100  duration-400
 px-3 py-1 rounded-xl  mr-7 ${textSize} font-bold not-italic hover:animate-pulse`}>{text}</button>
</>
)

}