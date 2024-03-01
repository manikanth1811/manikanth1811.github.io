export default function SkillSection() {
  return (
    <div className="flex justify-center w-[100%] flex-col items-center">
      <div className="heading mb-4">
        <span className="text-3xl font-bold text-secondary">Skills</span>
      </div>
      <div className="flex lg:w-[50%] w-[80%] flex-col">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-100 bg-base-100 w-[100%]"
        >
          <div className="collapse-title text-xl font-medium">
            Front End Technologies
          </div>
          <div className="collapse-content pl-10">
            <ul className="list-none flex flex-wrap">
              <li className="px-2">HTML</li>
              <li className="px-2">CSS</li>
              <li className="px-2">JavaScript</li>
              <li className="px-2">React</li>
              <li className="px-2">Node JS</li>
              <li className="px-2">Express</li>
              <li className="px-2">Chakra-UI</li>
              <li className="px-2">Jest</li>
            </ul>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-100 bg-base-100"
        >
          <div className="collapse-title text-xl font-medium">
            Cloud Technologies
          </div>
          <div className="collapse-content pl-10">
            <ul className="list-none flex flex-wrap">
              <li className="px-2">AWS</li>
              <li className="px-2">GCP</li>
              <li className="px-2">Kubernetes</li>
              <li className="px-2">Docker</li>
            </ul>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-100 bg-base-100"
        >
          <div className="collapse-title text-xl font-medium">Tools</div>
          <div className="collapse-content pl-10">
            <ul className="list-none flex flex-wrap">
              <li className="px-2">Git</li>
              <li className="px-2">GitHub</li>
              <li className="px-2">VS Code</li>
              <li className="px-2">Github Actions</li>
            </ul>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-100 bg-base-100"
        >
          <div className="collapse-title text-xl font-medium">Databases</div>
          <div className="collapse-content pl-10">
            <ul className="list-none flex flex-wrap">
              <li className="px-2">SQL</li>
              <li className="px-2">Postgresql</li>
              <li className="px-2">MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
