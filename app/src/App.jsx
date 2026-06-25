import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import Picture from './assets/groupie.png'

function App() {
  const [count, setCount] = useState(0)
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setUsers(data.projects))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <section className='navigation flex justify-end-safe'>
        <div className=" flex justify-between m-17">
           <Button text="About" textSize='text-xl' href="#about"/>
           <Button text="Projects"textSize='text-xl' href="#projects" ></Button>
           <Button text="Contacts" textSize='text-xl' href="#contacts" ></Button>
        </div>
        </section>
        <section className='intro' id="about">
        <div className='flex flex-col ml-10 text-gray-400'>
          <h3 className='font-serif text-xl font-semibold'>Hi, my name is</h3>
          <p className='text-7xl font-serif font-bold'>
              Nungo Edwin <br />
              I build things for the web<br/>
              and your mobile.  
         </p>
         <p className='font-serif text-xl text-medium'>
          I'm software developer specializing in building exceptional digital experiences
         </p>
         <div className='text-2xl tet-extrabold font-serif  p-3 border border-aquamarine
          border-3 rounded-xl w-50 flex justify-center italic'>Hire Me</div>
        </div>
        
      </section>

      <section className="body px-30" id="projects">
      <h2 className='flex justify-center font-serif font-semibold text-2xl mb-3'> Projects</h2>
      {projects.map((project)=>{ 
      <Card project={project}></Card>
})}
      


      </section>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
