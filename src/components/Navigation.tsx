import { Button } from "@/components/ui/button";
import logo from "../assets/logo.svg";
import menuIcon from "../assets/mobile/icon-menu.svg";
import { useState } from "react";

const Navigation = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <nav className="nav-wrapper max-w-7xl mx-auto pt-[60px] pb-6">
        <div className="nav-container flex items-center">
          {/* Logo */}
          <div className="nav-logo flex-shrink-0">
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
          <div className="nav-menu hide-mobile flex items-center space-x-[50px]">
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
          <div className="nav-contact hide-mobile flex-shrink-0">
            <Button
              variant="contact"
              size="standard"
            >
              Contact Me
            </Button>
          </div>

          {/* Mobile menu button - only visible until 639px */}
          <div className="nav-mobile-menu only-mobile relative">
            <button
              aria-label="Abrir menu"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="appearance-none bg-transparent border-0 p-0 m-0 shadow-none focus:outline-none hover:bg-transparent active:bg-transparent"
            >
              <img src={menuIcon} alt="Menu" className="w-[20px] h-[20px]" />
            </button>
            {isMobileMenuOpen && (
              <div className="absolute right-0 mt-3 w-56 rounded-md bg-black shadow-lg">
                <div className="flex flex-col py-2">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        handleMenuClick(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-left px-4 py-3 font-montserrat text-[16px] text-[#C1C1C1] hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="px-4 pt-2 pb-3">
                    <Button variant="contact" size="standard" className="w-full">
                      Contact Me
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
