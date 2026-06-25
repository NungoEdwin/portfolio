import Button from "./Button";

export default function Card({project}){
return(
    <>
<div className="card  shadow-lg bg-white-200 p-4 rounded-2xl mb-4 border border-gray-200">
 <div className="card_details flex justify-start">
                <img src={project.picture} alt="cardpicture" className='w-96 h-64 rounded-2xl mr-4'></img>

                <div className="narration">
                    <h3 className="text-2xl font-semibold font-serif">{project.name}</h3>
                    <p className="font-serif text-2xl py-5">
                    {project.about}
                    </p>
                </div>
            </div>
            
            <div className="card_btn flex justify-center">

                <Button text='View Project' textSize='text-l' href={project.link}/>
                
            </div>
            </div>


    </>
)
}