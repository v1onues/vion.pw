import { AiOutlineShareAlt, AiOutlineGithub } from "react-icons/ai"
import { BiQuestionMark } from "react-icons/bi"
import { HiOutlineExternalLink } from "react-icons/hi"
import { RiShieldUserLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import Project from "../data/projects.js"

export default function Projects(){

    return (<div className="mt-3 max-w-8xl w-11/12 sm:w-10/12 mx-auto">
        <title>Projects | V1onuess.</title>

        <div data-aos="fade-right">
            <h1 className="text-3xl font-sans text-gray-400 font-bold flex items-center gap-2"><AiOutlineShareAlt/> My Projects </h1>
            <div className="mt-12 w-full grid grid-cols-1 gap-4 grid-flow-row auto-rows-max px-3 sm:px-0 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {(Project.active.map(project => (
                    <div className="bg-primary-100 rounded-xl p-2 group">
                        <div className="flex flex-col justify-between gap-1 h-full">
                            <div className="h-full">
                                <div className="w-full h-48 rounded-xl overflow-hidden">
                                    <img className="w-full h-full rounded-xl scale-100 group-hover:scale-125 transition duration-500" src={project.image}/>
                                </div>
                                <div className="space-y-3 mt-1 p-5">
                                    <h1 className="font-sans font-semibold text-white text-2xl">{project.name}</h1>
                                    <h2 className="font-sans text-base text-gray-300">{project.description}</h2>
                                </div>
                            </div>
                            <div className="flex justify-between items-center p-4">
                                <div className="font-sans text-base text-white flex items-center gap-2"><RiShieldUserLine size="25px" color="WHITE"/> {project.role}</div>
                                {(project.link) && (<a target="_blank" href={project.link}><div className="font-sans text-base text-gray-600 flex items-center gap-2 hover:text-gray-500"><HiOutlineExternalLink size="25px"/> Let's see!</div></a>)}
                            </div>
                        </div>
                    </div>
                )))}
            </div>
        </div>

    </div>)

}
