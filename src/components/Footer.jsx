import React from "react";
import { Instagram, Twitter, Facebook, MapPin, Mail } from "lucide-react";

const footerLinks = [
  {
    heading: "Company",
    links: ["About Us", "Careers", "Press", "Blog"],
  },
  {
    heading: "Explore",
    links: ["Destinations", "Tours", "Special Deals", "Travel Guides"],
  },
  {
    heading: "Support",
    links: ["Help Center", "Safety Info", "FAQs", "Contact Us"],
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-16 pb-8 px-4">
      {/* Subtle map overlay for depth */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img
          src="/assets/images/map-overlay.png"
          alt="Map overlay"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & Newsletter (spans 2 columns on lg) */}
        <div className="lg:col-span-2">
          <h3 className="text-2xl text-white font-bold mb-4">Wanderlust</h3>
          <p className="mb-4">
            Join our newsletter for the latest travel deals and tips.
          </p>
          <div className="flex items-center bg-gray-800 rounded-full w-full max-w-md overflow-hidden">
            <Mail className="w-5 h-5 mx-3 text-blue-400" />
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent flex-1 py-2 px-4 placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-r-full text-white font-semibold transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Link groups */}
        {footerLinks.map((group) => (
          <div key={group.heading}>
            <h4 className="text-xl text-white font-semibold mb-4">
              {group.heading}
            </h4>
            <ul className="space-y-2">
              {group.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact & Social */}
        <div>
          <h4 className="text-xl text-white font-semibold mb-4">
            Get in Touch
          </h4>
          <div className="flex items-center mb-2">
            <MapPin className="w-5 h-5 mr-2 text-red-400" />
            <span>123 Traveler’s Lane, Wander City</span>
          </div>
          <div className="flex items-center mb-4">
            <Mail className="w-5 h-5 mr-2 text-blue-400" />
            <span>support@wanderlust.com</span>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative mt-12 border-t border-gray-800 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Wanderlust. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;