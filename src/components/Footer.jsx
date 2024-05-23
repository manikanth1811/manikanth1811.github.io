import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    // <footer className="footer footer-center p-4 bg-base-300 text-base-content">
    //   <aside>
    //     <p>Copyright © 2024 - All right reserved by Manikanth</p>
    //   </aside>
    // </footer>
    <div class="footer-div min-w-full h-[7%] lg:h-[5%] flex items-start lg:items-center pt-2 lg:pt-1 justify-center border-t-2 border-secondary">
      <div class="copyright flex items-end">
        <span class="pr-1 font-medium">Copyright @</span>
        <span class="pl-1 font-medium mr-1"> Manikanth</span>
      </div>
      <div class="github-icon">
        <a
          href="https://github.com/manikanth1811"
          target="_blank"
          class="github-link"
        >
          <FaGithub size={18} />
        </a>
      </div>
    </div>
  );
}
