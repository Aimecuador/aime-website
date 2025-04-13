import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

interface SocialIconsProps {
  iconClassName?: string;
  iconColor?: string;
}

export default function SocialIcons({ 
  iconClassName = "h-5 w-5", 
  iconColor = "text-white hover:text-primary" 
}: SocialIconsProps) {
  return (
    <div className="flex items-center space-x-4">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className={iconColor}
      >
        <Facebook className={iconClassName} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className={iconColor}
      >
        <Twitter className={iconClassName} />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className={iconColor}
      >
        <Instagram className={iconClassName} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className={iconColor}
      >
        <Linkedin className={iconClassName} />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className={iconColor}
      >
        <Youtube className={iconClassName} />
      </a>
    </div>
  );
}