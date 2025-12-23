import { Github, Instagram, Mail, Twitter } from "lucide-react";
import { useMemo } from "react";

function Footer() {
  const footerLinks = useMemo(
    () => [
      { title: "Company", links: ["About Us", "Careers", "Press"] },
      {
        title: "Community",
        links: ["For Artists", "Developers", "Advertising"],
      },
      {
        title: "Support",
        links: ["Help Center", "Safety", "Terms & Conditions"],
      },
    ],
    []
  );

  return (
    <footer className="w-full mt-24 pt-12 pb-24 border-t border-white/10 bg-[#050505]/50 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-8">
        
        <div className="col-span-2 md:col-span-2">
          <h2 className="text-2xl font-bold text-[#00E5FF]">CYBERBEAT</h2>
          <p className="text-white/60 text-sm mb-6 max-w-xs">
            The next generation of audio streaming, where music meets the
            machine.
          </p>
          <div className="flex space-x-4">
            <Twitter
              className="text-white/70 hover:text-[#00E5FF] cursor-pointer transition-colors"
              size={20}
            />
            <Instagram
              className="text-white/70 hover:text-[#22FF88] cursor-pointer transition-colors"
              size={20}
            /> 
            <Mail
              className="text-white/70 hover:text-magenta-400 cursor-pointer transition-colors"
              size={20}
            />
          </div>
        </div>

        {/* Link Sections */}
        {footerLinks.map((section, index) => (
          <div key={index} className="space-y-3">
            <h4 className="text-sm font-bold uppercase text-[#22FF88] mb-4">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href="#"
                    className="text-white/70 text-sm hover:text-[#00E5FF] cursor-pointer transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
 
      <div className="mt-12 pt-6 border-t border-white/5 text-center text-xs text-white/50">
        &copy; {new Date().getFullYear()} @ CYBERBEAT Records. &copy;All rights
        reserved. Powered by The Grid.
      </div>
    </footer>
  );
}

export default Footer
