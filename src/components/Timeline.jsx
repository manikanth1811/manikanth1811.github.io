export default function Timeline() {
  return (
    <div className="w-[100%] flex items-center flex-col">
      <div className="flex justify-center my-6 font-bold" id="experience">
        <span className="text-3xl text-secondary">Experience</span>
      </div>
      <ExperienceTimeline />
      <div className="flex justify-center my-6 font-bold" id="education">
        <span className="text-3xl text-secondary">Education</span>
      </div>
      <EducationTimeline />
    </div>
  );
}

function EducationTimeline() {
  return (
    <div className="w-[60%]">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li className="w-[100%]">
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-secondary"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">Aug 2022 - May 2024</time>
            <div className="text-md font-black">University of Houston</div>
            <div className="text-sm font-extrathin">MS in Computer Science</div>
            <a
              className="link text-sm link-hover"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              Know More
            </a>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box text-left">
                <h3 className="font-bold text-lg mb-3">
                  University of Houston | Houston, US
                </h3>
                <ul className="list-disc px-6">
                  <li>GPA: 3.77</li>
                  <li>
                    Relavant Coursework: Cloud Computing, Data Structures and
                    Algoriths
                  </li>
                </ul>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
          <hr className="bg-secondary" />
        </li>
        <li className="w-[100%]">
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-secondary"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">Aug 2017 - July 2021</time>
            <div className="text-lg font-black">VNR VJIET</div>
            <div className="text-sm font-extrathin">Information Technology</div>
            <a
              className="link text-sm link-hover"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Know More
            </a>
            <dialog id="my_modal_5" className="modal">
              <div className="modal-box text-left">
                <h3 className="font-bold text-lg mb-3">
                  VNRVJIET | Hyderabad, India
                </h3>
                <ul className="list-disc px-6">
                  <li>GPA: 3.73</li>
                  <li>
                    Relavant Coursework: Operating Systems, Computer Networks,
                    Big Data Analytics, Database Systems.
                  </li>
                </ul>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </li>
      </ul>
    </div>
  );
}

function ExperienceTimeline() {
  return (
    <div className="w-[60%]">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li className="w-[100%]">
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-secondary"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">May 2023 - May 2024</time>
            <div className="text-lg font-black">University of Houston</div>
            <div className="text-sm font-extrathin">
              Instructional Assistant
            </div>
            <a
              className="link text-sm link-hover"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Know More
            </a>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box text-left">
                <h3 className="font-bold text-lg mb-3">
                  University of Houston | Houston, US
                </h3>
                <ul className="list-disc px-6">
                  <li>
                    Created a course website for easy access to materials and
                    improved communication, boosting student engagement by 40%.
                  </li>
                  <li>
                    Developed a web interface to collect and evaluate student
                    answers, reducing manual work by 80%.
                  </li>
                </ul>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
          <hr className="bg-secondary" />
        </li>
        <li className="w-[100%]">
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-secondary"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">Aug 2021 - July 2022</time>
            <div className="text-lg font-black">
              NCR Corporation India Pvt. Ltd.
            </div>
            <div className="text-sm font-extrathin">Software Engineer</div>
            <a
              className="link text-sm link-hover"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              Know More
            </a>
            <dialog id="my_modal_2" className="modal">
              <div className="px-6 py-6 modal-box">
                <h3 className="font-bold text-lg mb-3">
                  NCR Corporation India Pvt. Ltd. |{" Hyderabad, India"}
                </h3>
                <ul className="list-disc px-6">
                  <li>
                    Designed reusable React components for customer-facing
                    sites, reducing development time by 20% and ensuring
                    consistency across teams.
                  </li>
                  <li>
                    Implemented Jest Testing to React Components increasing code
                    coverage by 10% and decreasing bug-related issues by 50%.
                  </li>
                  <li>
                    Configured authentication and authorization mechanisms using
                    OAuth 2.0 and JWT, enhancing security and user experience
                    for internal applications.
                  </li>
                  <li>
                    Implemented Python-based AWS Lambda and GCP Cloud functions
                    to identify and debug application issues quickly, reducing
                    downtime during outages. Resulted in a 50% decrease in
                    downtime.
                  </li>
                  <li>
                    Monitored and debugged real-time issues in live applications
                    using Dynatrace, GCP Logging, Site 24x7, and Pagerduty,
                    resulting in a 20% increase in application up-time.
                  </li>
                </ul>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
          <hr className="bg-secondary" />
        </li>
        <li className="w-[100%]">
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-secondary"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">Feb 2021 - Aug 2021</time>
            <div className="text-lg font-black">
              NCR Corporation India Pvt. Ltd.
            </div>
            <div className="text-sm font-extrathin">Software Intern</div>
            <a
              className="link text-sm link-hover"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Know More
            </a>
            <dialog id="my_modal_3" className="modal">
              <div className="px-6 py-6 modal-box text-left">
                <h3 className="font-bold text-lg mb-3">
                  NCR Corporation India Pvt. Ltd. |{" Hyderabad, India"}
                </h3>
                <ul className="list-disc px-6">
                  <li>
                    Collaborated with team to migrate from traditional CI/CD
                    processes to GitOps for faster and more reliable
                    deployments.
                  </li>
                  <li>
                    Implemented, and Deployed a RESTful API service with Node JS
                    and Express JS to automate manual tasks in Slack saving 5 hr
                    of manual work per week.
                  </li>
                  <li>
                    Migrated React Class components to React Functional
                    components improving code readability and code performance
                    by 8%.
                  </li>
                </ul>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </li>
      </ul>
    </div>
  );
}
