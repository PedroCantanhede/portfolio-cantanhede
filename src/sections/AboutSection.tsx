import { Button } from "@/components/ui/button";
import meImage from "@/assets/me.svg";
import angularIcon from "@/assets/icons/angular.svg";
import typescriptIcon from "@/assets/icons/typescript.svg";
import scssIcon from "@/assets/icons/scss.svg";
import nodejsIcon from "@/assets/icons/nodejs.svg";
import gitIcon from "@/assets/icons/git.svg";
import azureIcon from "@/assets/icons/azure.svg";
import downloadIcon from "@/assets/icons/download.svg";

const AboutSection = () => {
  const downloadResume = () => {
    console.log("Downloading resume...");
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-12">
          {/* Title and Subtitle */}
          <div>
            <h2
              className="text-[45px] font-extrabold text-white"
              style={{ fontFamily: "Inter", margin: 0, padding: 0 }}
            >
              About Me
            </h2>
            <p
              className="text-[14px] font-semibold text-[#FFB400]"
              style={{ fontFamily: "Inter", margin: 0, padding: 0, paddingBottom: "27px" }}
            >
              Get to know me
            </p>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src={meImage}
              alt="Pedro Cantanhêde"
              className="w-64 h-64 object-contain rounded-full"
            />
          </div>

          {/* About Text */}
          <div className="max-w-2xl mx-auto space-y-6">
              <p
                className="text-[17px] font-medium"
                style={{ fontFamily: "Inter", color: "#E1E1E1", lineHeight: "25px" }}
              >
                <span className="block">
                  Hi there! I'm Pedro Cantanhêde, a front-end developer passionate about combining design and
                </span>
                <span className="block">
                  technology to create intuitive, accessible, and engaging digital experiences. With a strong focus on
                </span>
                <span className="block">
                  
                </span>
                <span className="block">
                  user experience, I strive to turn ideas into clean, functional, and visually appealing solutions.
                </span>
              </p>

            <p
              className="text-[17px] font-medium"
              style={{ fontFamily: "Inter", color: "#E1E1E1", lineHeight: "25px" }}
            >
              <span className="block">
                I bring a blend of technical expertise and creativity to every project. My main stack includes Angular,
              </span>
              <span className="block">
                TypeScript, SCSS, and Git, but I'm always eager to learn new technologies and align technical
              </span>
              <span className="block">
                 knowledge with practical experience to deliver impactful results.
              </span>
            </p>

            <p
              className="text-[17px] font-medium"
              style={{ fontFamily: "Inter", color: "#E1E1E1", lineHeight: "25px" }}
            >
              <span className="block">
                Let's work together to craft seamless front-end experiences that connect performance, design, and
              </span>
              <span className="block">
                 usability. Get in touch, and let's build something meaningful!
              </span>
            </p>
          </div>

          {/* Main Skills Section */}
          <div className="space-y-8" style={{ paddingTop: "60px" }}>
            <h3
              className="text-[17px] font-medium text-[#FFB400]"
              style={{ fontFamily: "Inter" }}
            >
              Main Skills
            </h3>

            <div className="flex justify-center">
              <div className="grid grid-cols-1 skills-grid w-fit" style={{ gap: "16px" }}>
                {/* Row 1 */}
                <div className="w-[186.66px] h-[38px] bg-[#171717] border border-[#1F2937] rounded-[6px] flex items-center">
                  <img
                    src={angularIcon}
                    alt="Angular"
                    className="w-5 h-5"
                    style={{ paddingLeft: "17px" }}
                  />
                  <span
                    className="text-white text-sm font-medium"
                    style={{ fontFamily: "Inter", paddingLeft: "9px" }}
                  >
                    Angular
                  </span>
                </div>

                <div className="w-[186.66px] h-[38px] bg-[#171717] border border-[#1F2937] rounded-[6px] flex items-center">
                  <img
                    src={typescriptIcon}
                    alt="TypeScript"
                    className="w-5 h-5"
                    style={{ paddingLeft: "17px" }}
                  />
                  <span
                    className="text-white text-sm font-medium"
                    style={{ fontFamily: "Inter", paddingLeft: "9px" }}
                  >
                    TypeScript
                  </span>
                </div>

                <div className="w-[186.66px] h-[38px] bg-[#171717] border border-[#1F2937] rounded-[6px] flex items-center">
                  <img
                    src={scssIcon}
                    alt="SCSS"
                    className="w-5 h-5"
                    style={{ paddingLeft: "17px" }}
                  />
                  <span
                    className="text-white text-sm font-medium"
                    style={{ fontFamily: "Inter", paddingLeft: "9px" }}
                  >
                    SCSS
                  </span>
                </div>

                {/* Row 2 */}
                <div className="w-[186.66px] h-[38px] bg-[#171717] border border-[#1F2937] rounded-[6px] flex items-center">
                  <img
                    src={nodejsIcon}
                    alt="Node.js"
                    className="w-5 h-5"
                    style={{ paddingLeft: "17px" }}
                  />
                  <span
                    className="text-white text-sm font-medium"
                    style={{ fontFamily: "Inter", paddingLeft: "9px" }}
                  >
                    Node.js
                  </span>
                </div>

                <div className="w-[186.66px] h-[38px] bg-[#171717] border border-[#1F2937] rounded-[6px] flex items-center">
                  <img
                    src={gitIcon}
                    alt="Git"
                    className="w-5 h-5"
                    style={{ paddingLeft: "17px" }}
                  />
                  <span
                    className="text-white text-sm font-medium"
                    style={{ fontFamily: "Inter", paddingLeft: "9px" }}
                  >
                    Git
                  </span>
                </div>

                <div className="w-[186.66px] h-[38px] bg-[#171717] border border-[#1F2937] rounded-[6px] flex items-center">
                  <img
                    src={azureIcon}
                    alt="Azure"
                    className="w-5 h-5"
                    style={{ paddingLeft: "17px" }}
                  />
                  <span
                    className="text-white text-sm font-medium"
                    style={{ fontFamily: "Inter", paddingLeft: "9px" }}
                  >
                    Azure
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Get Resume Button */}
          <div className="flex justify-center mt-[35px]">
            <Button
              onClick={downloadResume}
              variant="projects"
              size="standard"
              className="text-white flex items-center w-[186px] h-[45px]"
              style={{ gap: "8px" }}
            >
              <img src={downloadIcon} alt="Download" className="w-4 h-4" />
              Get Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
