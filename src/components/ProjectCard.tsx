interface props {
  heading?: string
  detail?: string
  stack?: string[]
  git_link?: string
  demo_link?: string
}

const text_style = "ring-2 ring-black ring-offset-2 ring-offset-white bg-black text-white rounded-sm mr-3 py-1 px-3"
const button_style = "mb-1"
export default function ProjectCard({ heading, detail, stack, git_link, demo_link }: props) {
  //TODO Card
  return (
    <div id="project_card" className="text-black mx-auto my-4 border-4 border-black bg-white/75 flex flex-col">
      <div id="info" className="p-3 border-black flex flex-col gap-2 items-start bg-indigo-100">
        <h2>{heading}</h2>
        <p>{detail}</p>
      </div>
      <div className="flex flex-wrap border-t-black border-t-2 p-3">
        {stack?.map(s => <text className={`${text_style}`}>{s}</text>)}
      </div>
      <div id="links" className="flex gap-4 items-start p-3">
        {git_link === "" ? "" : <button className={`${button_style}`}><a href={`${git_link}`}>Github</a></button>}
        {demo_link === "" ? "" : <button className={`${button_style}`}> <a href={`${demo_link}`}>Demo</a></button>}
      </div>
    </div >
  )
}
