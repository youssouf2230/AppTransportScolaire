import Link from "next/link";

interface MenuItem {
    title: string;
    links: {
        text: string;
        url: string;
    }[];
}

interface FooterProps {
    tagline?: string;
    menuItems?: MenuItem[];
    copyright?: string;
    bottomLinks?: {
        text: string;
        url: string;
    }[];
}

export const Footer = ({
                           menuItems = [
                               {
                                   title: "Services",
                                   links: [
                                       { text: "Bus Schedules", url: "#" },
                                       { text: "Route Planner", url: "#" },
                                       { text: "Safety Guidelines", url: "#" },
                                       { text: "Support", url: "#" },
                                   ],
                               },
                               {
                                   title: "About Us",
                                   links: [
                                       { text: "Our Mission", url: "#" },
                                       { text: "Team", url: "#" },
                                       { text: "Blog", url: "#" },
                                       { text: "Contact", url: "#" },
                                   ],
                               },
                               {
                                   title: "Resources",
                                   links: [
                                       { text: "FAQ", url: "#" },
                                       { text: "Customer Support", url: "#" },
                                       { text: "Mobile App", url: "#" },
                                   ],
                               },
                               {
                                   title: "Follow Us",
                                   links: [
                                       { text: "Twitter", url: "#" },
                                       { text: "Instagram", url: "#" },
                                       { text: "LinkedIn", url: "#" },
                                   ],
                               },
                           ],
                           copyright = "© 2025 Bus School. All rights reserved.",
                           bottomLinks = [
                               { text: "Terms & Conditions", url: "#" },
                               { text: "Privacy Policy", url: "#" },
                           ],
                       }: FooterProps) => {
    return (
        <section className="pt-24 pb-4 bg-blue-400 text-white">
            <div className="container mx-auto px-6">
                <footer>
                    <div className="flex sm:justify-evenly max-sm:gap-12 my-6 flex-wrap">
                        {menuItems.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                                <h3 className="mb-4 font-bold text-lg">{section.title}</h3>
                                <ul className="space-y-3">
                                    {section.links.map((link, linkIdx) => (
                                        <li key={linkIdx} className="hover:text-yellow-300 font-medium">
                                            <Link href={link.url}>{link.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="col-span-2 mb-8 lg:mb-0">
                        <h1 className="md:text-[10rem] sm:text-[8rem] text-6xl text-center font-black text-white">
                            Bus School
                        </h1>
                    </div>

                    <div className="mt-24 flex flex-col justify-between gap-4 border-t border-blue-300 text-center pt-8 text-sm font-medium md:flex-row md:items-center">
                        <p>{copyright}</p>
                        <ul className="flex gap-4 max-md:m-auto">
                            {bottomLinks.map((link, linkIdx) => (
                                <li key={linkIdx} className="hover:text-yellow-300 underline">
                                    <Link href={link.url}>{link.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </footer>
            </div>
        </section>
    );
};
