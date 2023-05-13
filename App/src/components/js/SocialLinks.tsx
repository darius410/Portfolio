
import { AiOutlineTwitter } from 'react-icons/ai'
import {FaGithubAlt} from 'react-icons/fa'
import { MdLogoDev } from 'react-icons/md';
import { Icon } from '@iconify/react';
import brandGithubFilled from '@iconify/icons-tabler/brand-github-filled';
import { FaLinkedinIn } from 'react-icons/fa'
function SocialLinks() {


    return (
      
    <div className="flex flex-col justify-center m-auto text-center text-cyan-50 text-3xl border-t-2 w-4/5" >
       

        <ul className="flex flex-row text-xl justify-center py-6">

            <li className=""><SidebarIcon icon={<AiOutlineTwitter size={60} />} /></li>
            <li className=""> <SidebarIcon icon={<FaGithubAlt size={60} />} /></li>
            <li className=""><SidebarIcon icon={<MdLogoDev size={60} />} /></li>
            <li className=""><SidebarIcon icon={<FaLinkedinIn size={60} />} /></li>
               
                
        </ul>

    </div>
    )
  }
    
const SidebarIcon = ({icon} : {icon:any}) => (
    <button className="">
        {icon}
        
    </button>
  
    
  )
  
  export default SocialLinks
  