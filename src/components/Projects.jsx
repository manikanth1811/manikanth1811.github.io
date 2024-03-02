export default function Projects() {
  return (
    <div className="flex flex-col justify-center items-center" id="projects">
      <div className="flex">
        <span className="text-3xl font-bold text-secondary mt-4 mb-8">
          Projects
        </span>
      </div>
      <div className="projects-section flex flex-wrap justify-center items-center w-[70%] pb-6 gap-10">
        <div className="card w-80 rounded-lg transform transition duration-500 hover:scale-105 shadow-xl">
          <figure>
            <img
              src="/projectAnimations/ToDoListApp.png"
              alt="AlgoViz"
              className="h-[10rem]"
            />
          </figure>
          <div className="card-body pt-2">
            <h2 className="card-title">To Do-It</h2>
            <p className="pb-[1.5rem]">
              Simple ToDo List app made using Vanila JS and Local Storage.
            </p>
            <div className="card-actions justify-evenly">
              <a
                href="https://github.com/manikanth1811/TO-DO-IT"
                target="_blank"
              >
                <button className="btn btn-primary px-5 w-[8rem] md:w-[6rem]">
                  Code
                </button>
              </a>
              <a
                href="https://manikanth1811.github.io/TO-DO-IT/"
                target="_blank"
              >
                <button className="btn btn-primary px-5 w-[8rem]">
                  Live Site
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card w-80 rounded-lg transform transition duration-500 hover:scale-105 shadow-xl">
          <figure>
            <img
              src="/projectAnimations/AlgoVizAnimation.png"
              alt="AlgoViz"
              className="h-[10rem]"
            />
          </figure>
          <div className="card-body pt-2">
            <h2 className="card-title">AlgoViz</h2>
            <p>
              A React web app for visualizing basic sorting and graph algorithms
            </p>
            <div className="card-actions justify-evenly">
              <a
                href="https://github.com/manikanth1811/AlgoVis"
                target="_blank"
              >
                <button className="btn btn-primary px-5 w-[8rem] md:w-[6rem]">
                  Code
                </button>
              </a>
              <a
                href="https://github.com/manikanth1811/AlgoVis"
                target="_blank"
              >
                <button className="btn btn-primary px-5 w-[8rem]">
                  Live Site
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card w-80 rounded-lg transform transition duration-500 hover:scale-105 shadow-xl">
          <figure>
            <img
              src="/projectAnimations/portfolio.png"
              alt="AlgoViz"
              className="h-[10rem]"
            />
          </figure>
          <div className="card-body pt-2">
            <h2 className="card-title">Personal Portfolio</h2>
            <p className="pb-[1.5rem]">
              Personal Portfolio made with React, TailwindCSS, Daisy UI.
            </p>
            <div className="card-actions justify-evenly">
              <a
                href="https://github.com/manikanth1811/manikanth1811.github.io"
                target="_blank"
              >
                <button className="btn btn-primary px-5 w-[8rem] md:w-[6rem]">
                  Code
                </button>
              </a>
              <a href="" target="_blank">
                <button className="btn btn-primary px-5 w-[8rem]">
                  Live Site
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card w-80 rounded-lg transform transition duration-500 hover:scale-105 shadow-xl">
          <figure>
            <img
              src="/projectAnimations/ResumeBuilder.png"
              alt="AlgoViz"
              className="h-[10rem]"
            />
          </figure>
          <div className="card-body pt-2">
            <h2 className="card-title">Resume Builder</h2>
            <p className="pb-[1.5rem]">
              A React Resume Builder to build ATS friendly websites.
            </p>
            <div className="card-actions justify-evenly">
              <a
                href="https://github.com/manikanth1811/resume-builder"
                target="_blank"
              >
                <button className="btn btn-primary px-5 w-[8rem] md:w-[6rem]">
                  Code
                </button>
              </a>
              <a
                href="https://manikanth1811.github.io/resume-builder/"
                target="_blank"
              >
                <button className="btn btn-primary px-5 w-[8rem]">
                  Live Site
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card w-80 rounded-lg transform transition duration-500 hover:scale-105 shadow-xl">
          <figure>
            <img
              src="/projectAnimations/CricketMemoGame.png"
              alt="AlgoViz"
              className="h-[10rem]"
            />
          </figure>
          <div className="card-body pt-2">
            <h2 className="card-title">Cricket Memo Game</h2>
            <p className="">
              A React Cricket Memorization game. Score points by selecting
              unique players
            </p>
            <div className="card-actions justify-evenly">
              <a
                href="https://github.com/manikanth1811/cricket-memo-game/"
                target="_blank"
              >
                <button className="btn btn-primary px-5 w-[8rem] md:w-[6rem]">
                  Code
                </button>
              </a>
              <a
                href="https://github.com/manikanth1811/cricket-memo-game/"
                target="_blank"
              >
                <button className="btn btn-primary px-5 w-[8rem]">
                  Live Site
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card w-80 rounded-lg transform transition duration-500 hover:scale-105 shadow-xl">
          <figure>
            <img
              src="/projectAnimations/simplemessage.png"
              alt="AlgoViz"
              className="h-[10rem]"
            />
          </figure>
          <div className="card-body pt-2">
            <h2 className="card-title">Chat Room</h2>
            <p className="pb-[1.5rem]">
              Simple Chat Room made with Node JS and Express
            </p>
            <div className="card-actions justify-evenly">
              <a
                href="https://github.com/manikanth1811/message-board"
                target="_blank"
              >
                <button className="btn btn-primary px-5 w-[8rem] md:w-[6rem]">
                  Code
                </button>
              </a>
              <a
                href="https://message-board-production-9989.up.railway.app/"
                target="_blank"
              >
                <button className="btn btn-primary px-5 w-[8rem]">
                  Live Site
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
