import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactMe() {
  return (
    <div className="flex w-[100%] justify-center" id="contactMe">
      <div className="flex w-[70%] justify-center flex-col">
        <div className="contactMe flex justify-center py-6">
          <span className="text-3xl font-bold text-secondary">Contact Me</span>
        </div>
        <div className="contactContent flex justify-center gap-5 flex-col items-center lg:items-start lg:flex-row">
          <div className="flex contactInfo flex-col items-center gap-5 lg:mr-10">
            <div className="contactCard flex flex-col">
              <div className="icon flex justify-center items-center pr-2 gap-2 text-secondary">
                <IoMdCall size={30} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-light pt-1">+1-945-227-8598</span>
              </div>
            </div>
            <div className="contactCard flex flex-col items-center">
              <div className="icon flex items-center pr-2 gap-2 text-secondary">
                <MdEmail size={30} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-light pt-1">
                  policemanikanth18@gmail.com
                </span>
              </div>
            </div>
            <div className="contactCard flex flex-col items-center">
              <div className="icon flex items-center pr-2 gap-2 text-secondary">
                <FaLocationDot size={30} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-light pt-1">Houston, US</span>
              </div>
            </div>
          </div>
          <div className="formDiv flex mb-4">
            <form
              action="mailto:policemanikanth18@gmail.com"
              method="post"
              className="flex flex-col gap-4"
            >
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow input-secondary"
                  placeholder="Username"
                  required
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow input-info"
                  placeholder="Email"
                />
              </label>
              <textarea
                className="textarea textarea-bordered w-full max-w-md"
                rows={6}
                cols={35}
                placeholder="Add message"
              ></textarea>
              <div className="flex w-[100%] justify-center">
                <button type="submit" className=" btn btn-secondary w-[10rem]">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
