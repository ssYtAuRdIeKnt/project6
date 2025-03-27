import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("search");

  const links = [
    { id: "search", label: "Search" },
    { id: "deals", label: "Deals" },
    { id: "locations", label: "Locations" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let currentSection = "search";

      links.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition + 80) {
          currentSection = id;
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex justify-between items-center px-4 shadow-md fixed top-0 left-0 right-0 bg-white z-50 h-16">
      <div className="text-2xl font-bold flex items-center">Logo</div>
      <div className="flex h-full">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`flex items-center px-4 h-full border-b-4 transition-colors duration-200 ${
              active === link.id ? "border-black" : "border-transparent"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
      <button className="border px-4 py-2 rounded-lg flex items-center">sign in</button>
    </nav>
  );
};

export default Navbar;