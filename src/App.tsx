import './App.css'
import Navbar from './components/Navbar.tsx';
import './components/Particles'
import ParticlesBackground from './components/Particles.tsx';
import ProjectCard from './components/ProjectCard.tsx';
import Story from './pages/Story.tsx';
//TODO need to add a small aboutme, add project cards, and values


const text_for_project_card = [{
  heading: "Tailwind CSS Generator",
  detail: "A Tailwind CSS component generator that helps you prototype quickly.",
  stack: ["Svelte", "Typescript", "Tailwind CSS"],
  git_link: "https://github.com/ebrahim95/tailwindcss_generator",
  demo_link: "https://ebrahim95.github.io/tailwindcss_generator/"
}, {
  heading: "Bloglist Application ",
  detail: "A application to store you favorite blogs posts where other users can like and comment on the blog post.",
  stack: ["React", "Node.JS", "Redux"],
  git_link: "https://github.com/ebrahim95/practice-projects/tree/main/bloglist",
  demo_link: ""
}, {
  heading: "Gmail AI Summarizer | WIP",
  detail: "Takes all your emails and summarizes into a summary.",
  stack: ["Python", "Gemini", "RAG"],
  git_link: "https://github.com/ebrahim95/ai_email_organizer",
  demo_link: ""
}, {
  heading: "Auction Website",
  detail: "A website that enables you to aunction items.",
  stack: ["NextJS", "PlanetScale", "OAuth", "Tailwind"],
  git_link: "https://github.com/chingu-voyages/v45-tier3-team-46",
  demo_link: "https://v45-tier3-team-46-lbe8sys3f-trio-coders.vercel.app/"
}]

const skills_tags: string[] = ["CSS", "HTML", "NextJS", "React", "JavaScript", "Typescript", "Python", "Node", "Express", "MongoDB", "RestAPI", "Git"]


const text_style = "ring-2 ring-black ring-offset-2 ring-offset-white bg-black text-white rounded-sm mr-3 mb-3 py-1 px-3"
function App() {
  return (
    <main className='font-sans'>
      <ParticlesBackground />
      <div id="layout" className="w-dvw pt-40">
        <header className="fixed bg-indigo-300 border-black p-3 border-4 top-0 grid grid-cols-2 justify-start items-center w-full">
          <h1 className="text-black roboto-slab">Ebrahim | FullStack Engineer</h1>
          <Navbar />
        </header>
        <section id="profile" className="grid grid-rows-2 w-5/12 mx-auto mb-2 bg-white/50">
          <div className="mb-2">
            <h1 className="text-black roboto-slab">Hello!,</h1>
            <p className="text-black text-2xl">I am Ebrahim, a Fullstack engineer who enjoys building and learning new things.</p>
          </div>
          {/* <figure> */}
          {/*   <img src="" className="border-black border-4 bg-indigo-500/50 w-full h-5/6 mb-2 p-2" /> */}
          {/* </figure> */}

          <div id="skills" className="flex flex-wrap items-start content-start w-12/12">
            {skills_tags.map(skill => <text className={`${text_style}`}>{skill}</text>)}
          </div>
        </section>
        <section className="w-5/12 mx-auto mb-2">
          <h1 className="text-black roboto-slab">Projects</h1>
          {text_for_project_card.map(({ heading, detail, stack, git_link, demo_link }) => {
            return (
              <ProjectCard heading={heading} detail={detail} stack={stack} git_link={git_link} demo_link={demo_link} />)
          })}
        </section>
        <Story />
        <footer className="fixed bg-indigo-300 border-black p-3 border-4 flex gap-2 justify-center items-center w-full bottom-0">
          <button><a href="">Github</a></button>
          <h1 className='text-black'>|</h1>
          <button><a href="">LinkedIn</a></button>
          <h1 className='text-black'>|</h1>
          <button><a href="">Twitter</a></button>

        </footer>
      </div >
    </main >
  );

}

export default App
