import { Button } from "@/components/ui/button";
import logo from "../assets/logo.svg";
import { useState } from "react";

const Navigation = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    { id: "Home", label: "Home" },
    { id: "About", label: "About" },
    { id: "Journey", label: "Journey" },
    { id: "Testimonials", label: "Testimonials" },
    { id: "Projects", label: "Projects" },
  ];

  const handleMenuClick = (itemId: string) => {
    setActiveItem(itemId);
  };

  return (
    <header className="bg-black">
      <nav className="max-w-7xl mx-auto px-[120px] pt-[60px] pb-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={logo}
                alt="Pedro Cantanhêde Logo"
                className="h-10 w-auto" 
              />
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FFC700] transform -skew-x-12"></div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex items-center space-x-[50px]">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`font-montserrat text-[18px] transition-colors duration-200 bg-transparent border-none outline-none cursor-pointer ${
                  activeItem === item.id
                    ? "text-[#FFB400]"
                    : "text-[#C1C1C1] hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <div className="flex-shrink-0">
            <Button
              variant="contact"
              size="standard"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
