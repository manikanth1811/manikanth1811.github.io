import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaDocker,
  FaGithub,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiExpress,
  SiTailwindcss,
  SiChakraui,
  SiKubernetes,
  SiVisualstudiocode,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FcLinux } from "react-icons/fc";
export default function SkillSection() {
  return (
    <div className="flex justify-center mb-10">
      <div className="w-[90%] lg:w-[60%]">
        <div className="headingMain flex justify-center">
          <span className="text-3xl font-bold text-secondary">Skills</span>
        </div>
        <div className="flex flex-wrap flex-col lg:flex-row lg:gap-5 justify-center items-center">
          <div className="card w-96 bg-base-100 shadow-xl transform transition duration-500 hover:scale-105">
            <div className="card-body">
              <h2 className="card-title text-primary">Web Technologies</h2>
              <div className="flex gap-x-5 gap-y-2 flex-wrap">
                <div className="technology flex items-center gap-1 text-[#e34c26]">
                  <FaHtml5 />
                  <span>HTML 5</span>
                </div>
                <div className="technology flex items-center gap-1 text-[#264de4]">
                  <FaCss3Alt />
                  <span>CSS 3</span>
                </div>
                <div className="technology flex items-center gap-1 text-[#F1DB4F]">
                  <IoLogoJavascript />
                  <span>JavaScript</span>
                </div>
                <div className="technology flex items-center gap-1 text-[#61DAFA]">
                  <FaReact />
                  <span>React</span>
                </div>
                <div className="technology flex items-center gap-1 text-[#3C873A]">
                  <FaNodeJs />
                  <span>Node JS</span>
                </div>
                <div className="technology flex items-center gap-1 text-[black]">
                  <SiExpress />
                  <span>Express</span>
                </div>
                <div className="technology flex items-center gap-1 text-[#38BDF8]">
                  <SiTailwindcss />
                  <span>Tailwindcss</span>
                </div>
                <div className="technology flex items-center gap-1 text-[#5AC9C9]">
                  <SiChakraui />
                  <span>Chakra UI</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl transform transition duration-500 hover:scale-105 pb-[2rem]">
            <div className="card-body">
              <h2 className="card-title text-primary">Cloud Technologies</h2>
              <div className="flex gap-x-5 gap-y-2 flex-wrap">
                <div className="technology flex items-center gap-1 text-[#000]">
                  <FaAws size={20} />
                  <span>AWS</span>
                </div>
                <div className="technology flex items-center gap-1 ">
                  <img
                    src="/google-cloud.svg"
                    alt=""
                    className="h-[20px] w-[20px]"
                  />
                  <span>GCP</span>
                </div>
                <div className="technology flex items-center gap-1 text-[#326CE5]">
                  <SiKubernetes />
                  <span>Kubernetes</span>
                </div>
                <div className="technology flex items-center gap-1 text-[#0CB7EC]">
                  <FaDocker />
                  <span>Docker</span>
                </div>
                <div className="technology flex items-center gap-1 text-[#000]">
                  <FcLinux />
                  <span>Linux</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl transform transition duration-500 hover:scale-105 pb-[2rem]">
            <div className="card-body">
              <h2 className="card-title text-primary">Databases</h2>
              <div className="flex gap-x-5 gap-y-2 flex-wrap">
                <div className="technology flex items-center gap-1 text-[lightblue]">
                  <DiMysql size={20} />
                  <span>Mysql</span>
                </div>
                <div className="technology flex items-center gap-1 ">
                  <img
                    src="/mongodb.svg"
                    alt=""
                    className="h-[20px] w-[20px]"
                  />
                  <span>Mongo DB</span>
                </div>
                <div className="technology flex items-center gap-1 ">
                  <img
                    src="/postgresql.svg"
                    alt=""
                    className="h-[20px] w-[20px]"
                  />
                  <span>PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl transform transition duration-500 hover:scale-105 pb-[2rem]">
            <div className="card-body">
              <h2 className="card-title text-primary">Tools and Other</h2>
              <div className="flex gap-x-5 gap-y-2 flex-wrap">
                <div className="technology flex items-center gap-1 text-[#F1502F]">
                  <FaGitAlt size={20} />
                  <span>Git</span>
                </div>
                <div className="technology flex items-center gap-1 text-[#000]">
                  <FaGithub />
                  <span>Github</span>
                </div>
                <div className="technology flex items-center gap-1 text-[#326CE5]">
                  <SiVisualstudiocode />
                  <span>VS Code</span>
                </div>
                <div className="technology flex items-center gap-1 ">
                  <img src="/vite.svg" alt="" className="h-[20px] w-[20px]" />
                  <span>Vite</span>
                </div>
                <div className="technology flex items-center gap-1 ">
                  <div className="flex items-center">
                    <img src="/npm.svg" alt="" className="h-[8px] w-[25px]" />
                  </div>
                  <span>npm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="flex justify-center w-[100%] flex-col items-center">
    //   <div className="heading mb-4">
    //     <span className="text-3xl font-bold text-secondary">Skills</span>
    //   </div>
    //   <div className="flex lg:w-[50%] w-[80%] flex-col">
    //     <div
    //       tabIndex={0}
    //       className="collapse collapse-arrow border border-base-100 bg-base-100 w-[100%]"
    //     >
    //       <div className="collapse-title text-xl font-medium">
    //         Front End Technologies
    //       </div>
    //       <div className="collapse-content pl-10">
    //         <ul className="list-none flex flex-wrap">
    //           <li className="px-2">HTML</li>
    //           <li className="px-2">CSS</li>
    //           <li className="px-2">JavaScript</li>
    //           <li className="px-2">React</li>
    //           <li className="px-2">Node JS</li>
    //           <li className="px-2">Express</li>
    //           <li className="px-2">Chakra-UI</li>
    //           <li className="px-2">Jest</li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div
    //       tabIndex={0}
    //       className="collapse collapse-arrow border border-base-100 bg-base-100"
    //     >
    //       <div className="collapse-title text-xl font-medium">
    //         Cloud Technologies
    //       </div>
    //       <div className="collapse-content pl-10">
    //         <ul className="list-none flex flex-wrap">
    //           <li className="px-2">AWS</li>
    //           <li className="px-2">GCP</li>
    //           <li className="px-2">Kubernetes</li>
    //           <li className="px-2">Docker</li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div
    //       tabIndex={0}
    //       className="collapse collapse-arrow border border-base-100 bg-base-100"
    //     >
    //       <div className="collapse-title text-xl font-medium">Tools</div>
    //       <div className="collapse-content pl-10">
    //         <ul className="list-none flex flex-wrap">
    //           <li className="px-2">Git</li>
    //           <li className="px-2">GitHub</li>
    //           <li className="px-2">VS Code</li>
    //           <li className="px-2">Github Actions</li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div
    //       tabIndex={0}
    //       className="collapse collapse-arrow border border-base-100 bg-base-100"
    //     >
    //       <div className="collapse-title text-xl font-medium">Databases</div>
    //       <div className="collapse-content pl-10">
    //         <ul className="list-none flex flex-wrap">
    //           <li className="px-2">SQL</li>
    //           <li className="px-2">Postgresql</li>
    //           <li className="px-2">MongoDB</li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
