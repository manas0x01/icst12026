import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Registration", path: "/registration" },
    { name: "Committee", path: "/committee" },
    {
      name: "Keynote Sessions",
      disabled: true,
      dropdown: [
        { name: "Message from Chairman AICTE", path: "/message-aicte" },
        { name: "Speakers", path: "/speakers" }
      ]
    },
   
    {
      name: "Schedule",
      disabled: true,
      dropdown: [
        { name: "Presentation Schedule", path: "/schedule/presentation" },
        { name: "Keynote Schedule", path: "/schedule/keynote" }
      ]
    },
    { name: "Guidelines", path: "/guidelines" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 shadow-xl sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 flex-wrap">
          {/* Logos */}
          <div className="flex items-center space-x-2 flex-wrap max-w-full">
            <img
              src="/images/gu.jpg"
              alt="Galgotias University"
              className="h-8 w-auto rounded-full max-w-[130px] sm:max-w-[130px] object-cover ring-2 ring-rose-400/50"
            />
            <img
              src="/logos/icst.png"
              alt="ISCT 2026"
              className="h-8 w-auto max-w-[70px] sm:max-w-[100px] object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1 items-center">
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative group"
                  >
                    <button
                      disabled={item.disabled}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center space-x-1 ${location.pathname.startsWith(item.navPathPrefix || item.name.toLowerCase().replace(' ', '-'))
                        ? "bg-white/10 text-rose-400 backdrop-blur-sm"
                        : "text-white hover:bg-white/10 hover:text-rose-400"
                        } ${item.disabled ? "opacity-50 cursor-not-allowed hover:bg-transparent" : ""}`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    </button>

                    {!item.disabled && (
                      <div className="absolute top-full left-0 w-56 bg-white/95 backdrop-blur-md rounded-lg shadow-2xl border border-slate-200 z-50 hidden group-hover:block transform transition-all duration-300 origin-top">
                        {item.dropdown.map((dropdownItem) => (
                          dropdownItem.external ? (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-slate-50 hover:to-rose-50 hover:text-slate-800 transition-all first:rounded-t-lg last:rounded-b-lg"
                            >
                              {dropdownItem.name}
                            </a>
                          ) : (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              className={`block px-4 py-3 text-sm transition-all first:rounded-t-lg last:rounded-b-lg ${isActive(dropdownItem.path)
                                ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white"
                                : "text-gray-700 hover:bg-gradient-to-r hover:from-slate-50 hover:to-rose-50 hover:text-slate-800"
                                }`}
                            >
                              {dropdownItem.name}
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive(item.path)
                    ? "bg-white/10 text-rose-400 backdrop-blur-sm"
                    : "text-white hover:bg-white/10 hover:text-rose-400"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <a
              href="https://cmt3.research.microsoft.com/ICCPCT2026/Submission/Manage"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:scale-105 transition-all duration-300 border border-rose-400"
            >
              Submit Paper
            </a>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.name} className="space-y-1">
                      <div className="px-3 py-2 text-sm font-medium text-rose-400 border-b border-slate-700/50">
                        {item.name}
                      </div>
                      {item.dropdown.map((dropdownItem) => (
                        dropdownItem.external ? (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-6 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-rose-400 hover:bg-white/10 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </a>
                        ) : (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className={`block px-6 py-2 rounded-md text-sm font-medium transition-colors ${isActive(dropdownItem.path)
                              ? "bg-rose-500/20 text-rose-400"
                              : "text-gray-300 hover:text-rose-400 hover:bg-white/10"
                              }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        )
                      ))}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(item.path)
                      ? "bg-rose-500/20 text-rose-400"
                      : "text-gray-300 hover:text-rose-400 hover:bg-white/10"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
