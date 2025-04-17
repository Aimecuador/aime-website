import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

interface SocialIconsProps {
  iconClassName?: string;
  iconColor?: string;
}

export default function SocialIcons({ 
  iconClassName = "h-5 w-5", 
  iconColor = "text-white hover:text-secondary transition-colors duration-300" 
}: SocialIconsProps) {
  return (
    <div className="flex items-center space-x-4">
      <a
        href="https://www.facebook.com/AimeEcuador"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={iconColor}
      >
        <Facebook className={iconClassName} />
      </a>
      <a
        href="https://twitter.com/aime_ecuador"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className={iconColor}
      >
        <Twitter className={iconClassName} />
      </a>
      <a
        href="https://www.instagram.com/aime_ecuador/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={iconColor}
      >
        <Instagram className={iconClassName} />
      </a>
      <a
        href="https://www.linkedin.com/company/asociaci%C3%B3n-de-ingenieros-de-minas-del-ecuador"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={iconColor}
      >
        <Linkedin className={iconClassName} />
      </a>
    </div>
  );
}