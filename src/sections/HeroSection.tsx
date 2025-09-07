import { Button } from "@/components/ui/button";
import character from "@/assets/cantanhede-caracter.svg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          {/* Character Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-main flex items-center justify-center shadow-2xl">
                <img
                  src={character}
                  alt="Pedro Cantanhêde"
                  className="w-[237px] h-[223px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Name + Role */}
          <div>
            <h1 className="text-[63px] font-bold text-white font-poppins leading-none m-0 p-0">
              Pedro Cantanhêde
            </h1>
            <h2 className="text-[26px] font-semibold text-[#FFB400] font-poppins mt-2">
              Front-end Developer
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto">
            <p className="text-[#E1E1E1] text-base sm:text-lg md:text-[19px] leading-relaxed font-medium font-poppins">
              <span className="block">With a passion for design and development,</span>
              <span className="block">
                I focus on building clean, responsive front-end solutions that
                connect aesthetics with performance
              </span>
              <span className="block">
                and create meaningful digital impact.
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-row gap-[25px] justify-center items-center">
            <Button
              onClick={scrollToContact}
              variant="contact"
              size="standard"
            >
              Contact me
            </Button>
            <Button
              onClick={scrollToProjects}
              variant="projects"
              size="standard"
              className="text-white"
            >
              View projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
