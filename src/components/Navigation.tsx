import { Button } from "@/components/ui/button";
import logo from "../assets/logo.svg";
import menuIcon from "../assets/mobile/icon-menu.svg";
import footerLinkedin from '@/assets/icons/footer-linkedin.svg';
import footerBehance from '@/assets/icons/footer-behance.svg';
import footerGithub from '@/assets/icons/footer-github.svg';
import footerInstagram from '@/assets/icons/footer-instagram.svg';
import { useEffect, useState } from "react";

const Navigation = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "Home", label: "Home", sectionId: "home" },
    { id: "About", label: "About", sectionId: "about" },
    { id: "Journey", label: "Journey", sectionId: "journey" },
    { id: "Testimonials", label: "Testimonials", sectionId: "testimonials" },
    { id: "Projects", label: "Projects", sectionId: "projects" },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: footerLinkedin, url: 'https://linkedin.com/in/pedro-cantanhede' },
    { name: 'Dribbble', icon: footerBehance, url: 'https://dribbble.com/pedro-cantanhede' },
    { name: 'GitHub', icon: footerGithub, url: 'https://github.com/PedroCantanhede' },
    { name: 'Instagram', icon: footerInstagram, url: 'https://instagram.com' },
  ];

  const scrollToSection = (sectionId: string) => {
    // If it's home, scroll to top of page
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenuClick = (itemId: string, sectionId: string) => {
    setActiveItem(itemId);
    scrollToSection(sectionId);
  };

  const handleContactClick = () => {
    scrollToSection("contact");
  };

  // Detect active section on scroll using Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section is in the upper portion of viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const menuItem = menuItems.find(item => item.sectionId === sectionId);
          if (menuItem) {
            setActiveItem(menuItem.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections except home (we'll handle it separately)
    menuItems.forEach((item) => {
      if (item.sectionId !== "home") {
        const section = document.querySelector(`#${item.sectionId}`);
        if (section) {
          observer.observe(section);
        }
      }
    });

    // Also observe contact section
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    // Handle scroll to detect when at top (Home section)
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollPosition = window.scrollY;
        
        // Only set Home as active if we're at the very top and no other section is intersecting
        if (scrollPosition < 50) {
          const homeSection = document.querySelector('#home');
          if (homeSection) {
            const rect = homeSection.getBoundingClientRect();
            // If home section is visible in viewport, set it as active
            if (rect.top >= 0 && rect.top < window.innerHeight * 0.5) {
              setActiveItem("Home");
            }
          }
        }
      }, 100);
    };

    // Check initial position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-black nav-header-desktop">
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
                onClick={() => handleMenuClick(item.id, item.sectionId)}
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
              onClick={handleContactClick}
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
              <div
                className="mobile-menu-overlay fixed inset-0 z-50 w-screen h-screen flex flex-col"
                style={{ backgroundColor: "#000000", left: 0, right: 0, top: 0, bottom: 0, position: "fixed" }}
              >
                <div
                  className="flex items-center justify-between"
                  style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 20, paddingBottom: 0 }}
                >
                  <img src={logo} alt="Logo" className="w-auto" style={{ height: "45px" }} />
                  <button
                    aria-label="Fechar menu"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white leading-none bg-transparent border-0 w-[28px] h-[28px] flex items-center justify-center text-[28px]"
                    style={{ paddingRight: 26 }}
                  >
                    ×
                  </button>
                </div>

                <div className="mobile-menu-items-container flex flex-col items-center justify-center px-6" style={{ flex: '1' }}>
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        handleMenuClick(item.id, item.sectionId);
                        setIsMobileMenuOpen(false);
                      }}
                      className="mobile-menu-link font-montserrat text-[18px] outline-none"
                      style={{ color: "#E1E1E1", backgroundColor: "transparent", border: "none" }}
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  <div className="flex flex-col items-center pt-6 w-full">
                    <Button 
                      variant="contact" 
                      size="standard" 
                      className="overlay-contact-button"
                      onClick={() => {
                        handleContactClick();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Contact Me
                    </Button>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="mobile-menu-social-icons flex items-center justify-center gap-[21px] px-6" style={{ paddingTop: '40px', marginTop: 'auto' }}>
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                      aria-label={social.name}
                    >
                      <img 
                        src={social.icon} 
                        alt={social.name} 
                        style={{ 
                          width: "32px", 
                          height: "32px" 
                        }}
                      />
                    </a>
                  ))}
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
