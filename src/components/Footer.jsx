import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
return ( <footer className="bg-[#0F172A] text-white border-t border-white/10"> <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

    {/* Brand */}
    <div>
      <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
        NexDiff
      </h2>
      <p className="mt-4 text-white/70 text-sm">
        We build modern digital solutions to help businesses grow faster.
      </p>
    </div>

    {/* Links */}
    <div>
      <h3 className="font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-white/70 text-sm">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">Services</li>
        <li className="hover:text-white cursor-pointer">About</li>
        <li className="hover:text-white cursor-pointer">Contact</li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h3 className="font-semibold mb-4">Services</h3>
      <ul className="space-y-2 text-white/70 text-sm">
        <li>Web Development</li>
        <li>App Development</li>
        <li>AI Solutions</li>
        <li>Cloud & DevOps</li>
      </ul>
    </div>

    {/* Social */}
    <div>
      <h3 className="font-semibold mb-4">Connect</h3>
      <div className="flex gap-4 text-xl text-white/70">
        <FaFacebook className="hover:text-white cursor-pointer" />
        <FaInstagram className="hover:text-white cursor-pointer" />
        <FaLinkedin className="hover:text-white cursor-pointer" />
        <FaTwitter className="hover:text-white cursor-pointer" />
      </div>
    </div>
  </div>

  {/* Bottom */}
  <div className="border-t border-white/10 text-center py-6 text-white/50 text-sm">
    © {new Date().getFullYear()} NexDiff. All rights reserved.
  </div>
</footer>

);
};

export default Footer;
