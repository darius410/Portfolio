
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaBluesky } from "react-icons/fa6";
import {FaGithubAlt} from 'react-icons/fa'
import { MdLogoDev } from 'react-icons/md';
import { Icon } from '@iconify/react';
// import brandGithubFilled from '@iconify/icons-tabler/brand-github-filled';
import { FaLinkedinIn } from 'react-icons/fa'
function SocialLinks() {


    return (
      <div className="flex flex-col justify-center  text-center text-platinum-100 text-3xl border-t-2 w-4/5">
        <ul className="flex flex-row text-xl py-3">
          <li className="">
            <a href="https://bsky.app/profile/imjustchaos.bsky.social">
              <SidebarIcon icon={<FaBluesky size={55} />} />
            </a>
          </li>
          <li className="">
            <a href="https://github.com/darius410">
              <SidebarIcon icon={<FaGithubAlt size={60} />} />
            </a>
          </li>

          <li className="">
            <a href="https://dev.to/darius410">
              <SidebarIcon icon={<MdLogoDev size={60} />} />
            </a>
          </li>
          <li className="">
            <a href="https://www.linkedin.com/in/darius-hansley-96b752147/">
              <SidebarIcon icon={<FaLinkedinIn size={60} />} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
    
const SidebarIcon = ({icon} : {icon:any}) => (
  
    <button className="">
        {icon}
        
    </button>
  
    
  )
  
  export default SocialLinks
  