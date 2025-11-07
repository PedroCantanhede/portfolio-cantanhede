import footerLinkedin from '@/assets/icons/footer-linkedin.svg';
import footerBehance from '@/assets/icons/footer-behance.svg';
import footerGithub from '@/assets/icons/footer-github.svg';
import footerInstagram from '@/assets/icons/footer-instagram.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: footerLinkedin, url: 'https://linkedin.com/in/pedro-cantanhede' },
    { name: 'Behance', icon: footerBehance, url: 'https://behance.net' },
    { name: 'GitHub', icon: footerGithub, url: 'https://github.com/PedroCantanhede' },
    { name: 'Instagram', icon: footerInstagram, url: 'https://instagram.com' },
  ];

  return (
    <footer className="bg-black">
      {/* Horizontal Line */}
      <div 
        className="w-full" 
        style={{ 
          height: "1px", 
          backgroundColor: "#374151" 
        }}
      ></div>
      
      {/* Footer Content */}
      <div 
        className="footer-content mx-auto"
        style={{ 
          paddingTop: "42px",
          paddingBottom: "50px"
        }}
      >
        {/* Social Icons */}
        <div 
          className="footer-icons flex items-center"
          style={{ gap: "21px" }}
        >
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

        {/* Copyright Text */}
        <p
          className="footer-copyright"
          style={{ 
            fontFamily: "Inter", 
            fontSize: "14px", 
            fontWeight: 400, 
            color: "#A9A9A9",
            margin: 0,
            padding: 0
          }}
        >
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
