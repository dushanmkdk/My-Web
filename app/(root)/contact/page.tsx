import { Metadata } from "next";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import PageContainer from "@/components/common/page-container";
import { Card, CardContent } from "@/components/ui/card";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

const contactLinks = [
  {
    label: "Phone",
    value: siteConfig.links.phone,
    href: `tel:${siteConfig.links.phone.replace(/[^+\d]/g, "")}`,
    icon: Icons.contact,
  },
  {
    label: "Email",
    value: siteConfig.links.email,
    href: `mailto:${siteConfig.links.email}`,
    icon: Icons.gmail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dushan-kavishka",
    href: siteConfig.links.linkedin,
    icon: Icons.linkedin,
  },
];

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="mx-auto flex max-w-lg flex-col gap-4 py-6">
        {contactLinks.map(({ label, value, href, icon: Icon }) => (
          <Link key={label} href={href} target="_blank" rel="noreferrer">
            <Card className="transition-colors hover:bg-muted">
              <CardContent className="flex items-center gap-4 p-6">
                <Icon className="h-6 w-6 shrink-0 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <p className="font-medium">{value}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </PageContainer>
  );
}
