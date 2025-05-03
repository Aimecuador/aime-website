import FacebookIcon from "./icons/facebook"
import InstagramIcon from "./icons/instagram"
import LinkedInIcon from "./icons/linkedin"
import TikTokIcon from "./icons/tiktok"
import TwitterXIcon from "./icons/twitter-x"

export const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/AimeEcuador",
    Icon: FacebookIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/aime_ecuador/",
    Icon: InstagramIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/asociaci%C3%B3n-de-ingenieros-de-minas-del-ecuador",
    Icon: LinkedInIcon,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@aime_ecuador",
    Icon: TikTokIcon,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/aime_ecuador",
    Icon: TwitterXIcon,
  },
]

interface SocialIconsProps {
  className?: string
  iconClassName?: string
  iconColor?: string
}

export default function SocialIcons({
  className = "",
  iconClassName = "h-5 w-5",
  iconColor = "text-white",
}: SocialIconsProps) {
  return (
    <div className={`flex space-x-2 lg:space-x-4 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-all duration-500 ${iconColor}`}
          aria-label={social.name}
        >
          <social.Icon className={iconClassName} />
        </a>
      ))}
    </div>
  )
}

