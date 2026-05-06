import type { ReactNode } from "react";
import { FaBluesky } from "react-icons/fa6";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { MdLogoDev } from "react-icons/md";

function SocialLinks() {
  return (
    <div className="about-section-rule flex flex-col justify-center text-platinum-100 text-3xl">
      <ul
        className="social-links-list text-xl py-3"
        aria-label="Social media links"
      >
        <li>
          <SidebarLink
            href="https://bsky.app/profile/imjustchaos.bsky.social"
            label="Bluesky profile"
            icon={<FaBluesky size={38} aria-hidden="true" />}
          />
        </li>
        <li>
          <SidebarLink
            href="https://github.com/darius410"
            label="GitHub profile"
            icon={<FaGithubAlt size={42} aria-hidden="true" />}
          />
        </li>
        <li>
          <SidebarLink
            href="https://dev.to/darius410"
            label="DEV profile"
            icon={<MdLogoDev size={40} aria-hidden="true" />}
          />
        </li>
        <li>
          <SidebarLink
            href="https://www.linkedin.com/in/darius-hansley-96b752147/"
            label="LinkedIn profile"
            icon={<FaLinkedinIn size={40} aria-hidden="true" />}
          />
        </li>
      </ul>
    </div>
  );
}

type SidebarLinkProps = {
  href: string;
  label: string;
  icon: ReactNode;
};

const SidebarLink = ({ href, label, icon }: SidebarLinkProps) => (
  <a
    href={href}
    aria-label={label}
    className="inline-flex items-center justify-center rounded-full p-2 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-platinum-100"
  >
    {icon}
  </a>
);

export default SocialLinks;
