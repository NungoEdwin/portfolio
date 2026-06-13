import Button from "./Button";

export default function Card({picture,text,title,link}){
return(
    <>
<div className="card  shadow-lg bg-white-200 p-4 rounded-2xl mb-4 border border-gray-200">
 <div className="card_details flex justify-start">
                <img src={picture} alt="cardpicture" className='w-96 h-64 rounded-2xl mr-4'></img>

                <div className="narration">
                    <h3 className="text-2xl font-semibold font-serif">{title}</h3>
                    <p className="font-serif text-2xl py-5">
                        Groupie Tracker is a web application that allows music enthusiasts to explore and discover
                        information about various artists and bands. Our platform provides detailed data on artists'
                        creation dates, first album releases, members, and upcoming concert locations.

                        With an interactive interface, users can search, filter, and visualize artist information,
                        making it easier than ever to stay up-to-date with your favorite musicians and discover new
                        ones.

                    </p>
                </div>
            </div>
            
            <div className="card_btn flex justify-center">

                <Button text='View Project' textSize='text-l' href="https://learn.zone01kisumu.ke/git/enungo/groupie-tracker-filters"/>
                
            </div>
            </div>


    </>
)
}