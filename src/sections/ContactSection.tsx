import mailWhite from '@/assets/icons/mail-white.svg';
import githubWhite from '@/assets/icons/github-white.svg';
import linkedinWhite from '@/assets/icons/linkedin-white.svg';
import mailIcon from '@/assets/icons/mail.svg';
import buttonSecondary from '@/assets/button-secondary.svg';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      id: 1,
      icon: mailWhite,
      label: "Email",
      value: "pedrohc.cantanhede@gmail.com"
    },
    {
      id: 2,
      icon: githubWhite,
      label: "GitHub",
      value: "github.com/PedroCantanhede"
    },
    {
      id: 3,
      icon: linkedinWhite,
      label: "LinkedIn",
      value: "linkedin.com/in/pedro-cantanhede"
    }
  ];

  return (
    <section className="py-20 px-4" style={{ paddingTop: "200px", marginBottom: "130px" }}>
      <div className="max-w-7xl mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center mb-16" style={{ paddingBottom: "60px" }}>
          <h2
            className="text-white font-extrabold mb-4"
            style={{ 
              fontFamily: "Inter", 
              fontSize: "45px", 
              fontWeight: 800, 
              color: "#FFFFFF",
              margin: 0,
              padding: 0
            }}
          >
            Let's talk!
          </h2>
          <p
            className="text-[#FFB400] font-semibold"
            style={{ 
              fontFamily: "Inter", 
              fontSize: "14px", 
              fontWeight: 600, 
              color: "#FFB400",
              margin: 0,
              padding: 0
            }}
          >
            Let's work together
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 items-start w-fit" style={{ gap: "32px" }}>
            {/* Left Column - Get in touch */}
            <div className="flex flex-col items-center">
              <h3
                className="text-white font-medium mb-8 w-full"
                style={{ 
                  fontFamily: "Inter", 
                  fontSize: "17px", 
                  fontWeight: 500, 
                  color: "#FFFFFF",
                  margin: 0,
                  paddingBottom: "32px",
                  textAlign: "left"
                }}
              >
                Get in touch
              </h3>
              
              {/* Contact Cards */}
              <div className="w-full" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {contactInfo.map((contact) => (
                  <div
                    key={contact.id}
                    className="flex items-center justify-between p-4 border hover:bg-gray-800/50 transition-colors cursor-pointer"
                    style={{ 
                      width: "600px",
                      height: "78px",
                      borderColor: "#1F2937", 
                      borderRadius: "8px",
                      backgroundColor: "transparent"
                    }}
                  >
                    <div className="flex items-center" style={{ gap: "16px", paddingLeft: "17px" }}>
                      <img 
                        src={contact.icon} 
                        alt={contact.label} 
                        className="w-6 h-6"
                      />
                      <div>
                        <p
                          className="text-white font-medium"
                          style={{ 
                            fontFamily: "Inter", 
                            fontSize: "13.6px", 
                            fontWeight: 500, 
                            color: "#FFFFFF",
                            margin: 0,
                            padding: 0
                          }}
                        >
                          {contact.label}
                        </p>
                        <p
                          className="text-gray-400"
                          style={{ 
                            fontFamily: "Inter", 
                            fontSize: "11.9px", 
                            fontWeight: 400, 
                            color: "#9CA3AF",
                            margin: 0,
                            padding: 0,
                            paddingTop: "4px"
                          }}
                        >
                          {contact.value}
                        </p>
                      </div>
                    </div>
                    <img 
                      src={buttonSecondary} 
                      alt="Arrow" 
                      className="w-4 h-4"
                      style={{ paddingRight: "17px" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Ready to start your project? */}
            <div className="flex flex-col items-start">
              <h3
                className="text-white font-medium mb-6 w-full"
                style={{ 
                  fontFamily: "Inter", 
                  fontSize: "17px", 
                  fontWeight: 500, 
                  color: "#FFFFFF",
                  margin: 0,
                  paddingBottom: "24px",
                  textAlign: "left"
                }}
              >
                Ready to start your project?
              </h3>
              
              <p
                className="text-white mb-8 leading-relaxed w-full"
                style={{ 
                  fontFamily: "Inter", 
                  fontSize: "13.6px", 
                  fontWeight: 400, 
                  color: "#9CA3AF",
                  lineHeight: "24px",
                  margin: 0,
                  paddingBottom: "40px",
                  textAlign: "left"
                }}
              >
                <span className="block">Looking for a developer who combines design and code to deliver seamless user</span>
                <span className="block">experiences? Get in touch, and let's bring your ideas to life.</span>
              </p>

              {/* Contact Button */}
              <Button
                variant="contact"
                size="standard"
                className="text-black flex items-center w-full"
                style={{ 
                  width: "600px",
                  height: "48px",
                  gap: "8px"
                }}
              >
                <img 
                  src={mailIcon} 
                  alt="Email" 
                  className="w-5 h-5"
                />
                <span>Contact me</span>
              </Button>

              <p
                className="text-gray-400 mt-4 w-full"
                style={{ 
                  fontFamily: "Inter", 
                  fontSize: "11.9px", 
                  fontWeight: 400, 
                  color: "#6B7280",
                  margin: 0,
                  paddingTop: "12px",
                  textAlign: "center"
                }}
              >
                Usually responds within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
