import { Button } from "@/components/ui/button";
import character from "@/assets/cantanhede-caracter.svg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

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
      className="hero-section flex items-start justify-center px-4 sm:px-6 lg:px-8 pt-16 mt-20"
      style={{ marginBottom: "220px" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          {/* Character Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-main flex items-center justify-center shadow-2xl">
                <img
                  src={character}
                  alt="Pedro Cantanhêde"
                  className="w-[237px] h-[223px] object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Name + Role */}
          <div>
            <motion.h1
              className="hero-name text-[63px] font-bold text-white font-poppins leading-none m-0 p-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Pedro Cantanhêde
            </motion.h1>
            <h2
              className="hero-role text-[26px] font-semibold text-[#FFB400] font-poppins mt-2"
              style={{ fontWeight: 600 }}
            >
              <Typewriter
                options={{
                  strings: ["Front-end Developer "],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  cursor: "|",
                  cursorClassName: "text-[#FFB400]",
                }}
              />
            </h2>
          </div>

          {/* Description */}
          <motion.div
            className="hero-description-wrapper max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p
              className="hero-description text-[#E1E1E1] text-[19px] leading-relaxed font-poppins"
              style={{ fontWeight: 500 }}
            >
              <span className="block">
                With a passion for design and development, I focus on building
                clean, responsive
              </span>
              <span className="block">
                front-end solutions that connect aesthetics with performance and
                create
              </span>
              <span className="block">meaningful digital impact.</span>
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="hero-buttons flex flex-row gap-[25px] justify-center items-center mt-[2.813rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button onClick={scrollToContact} variant="contact" size="standard">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
