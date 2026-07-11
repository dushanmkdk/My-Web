import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "LinkedIn",
    username: "Dushan Kavishka",
    icon: Icons.linkedin,
    link: "https://linkedin.com/in/dushan-kavishka",
  },
  {
    name: "Gmail",
    username: "dushanmkdk",
    icon: Icons.gmail,
    link: "mailto:dushanmkdk@gmail.com",
  },
];
