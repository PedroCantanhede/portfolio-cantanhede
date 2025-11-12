
// Import project images
import project1 from '@/assets/projects/project1.png';
import project2 from '@/assets/projects/project2.png';
import project3 from '@/assets/projects/project3.png';
import project4 from '@/assets/projects/project4.png';
import project5 from '@/assets/projects/project5.png';
import project6 from '@/assets/projects/project6.png';

// Import button icon
import buttonMain from '@/assets/button-main.svg';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "GerartAI",
      technologies: "Technologies: React, TypeScript, Node.js, Express, Prisma, PostgreSQL",
      image: project1
    },
    {
      id: 2,
      title: "Adote Pet",
      technologies: "Technologies: React, Next.js, Axios, Node.js, Spring, H2 Database",
      image: project2
    },
    {
      id: 3,
      title: "Pomodorinho",
      technologies: "Technologies: React Native, TypeScript, CSS, Android Studio",
      image: project3
    },
    {
      id: 4,
      title: "LO-FI Beats",
      technologies: "Technologies: HTML, CSS and JavaScript",
      image: project4
    },
    {
      id: 5,
      title: "Burst",
      technologies: "Technologies: PHP, JavaScript, MySQL",
      image: project5
    },
    {
      id: 6,
      title: "OBInvest",
      technologies: "Technologies: Python, Streamlit, Matplotlib, yFinance",
      image: project6
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16"
      style={{ marginBottom: "200px" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="space-y-12">
          {/* Title and Subtitle */}
          <div style={{ paddingBottom: "60px" }}>
            <h2
              className="section-title text-[45px] font-extrabold text-white"
              style={{ fontFamily: "Inter", margin: 0, padding: 0 }}
            >
              Projects
            </h2>
            <p
              className="section-subtitle text-[14px] font-semibold text-[#FFB400]"
              style={{ fontFamily: "Inter", margin: 0, padding: 0, paddingBottom: "27px" }}
            >
              Some of my Work
            </p>
          </div>

          {/* Projects Grid */}
          <div className="w-full flex justify-center">
            <div className="projects-grid grid gap-[36px] mx-auto">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="overflow-hidden project-card"
                  style={{ height: "318.33px", backgroundColor: "#000000" }}
                >
                  {/* Project Image */}
                  <div className="project-image" style={{ height: "198.33px", overflow: "hidden" }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-4 flex justify-between items-end h-[120px]">
                    <div className="flex-1" style={{ textAlign: "left" }}>
                      {/* Project Title */}
                      <h3
                        style={{ 
                          fontFamily: "Inter", 
                          fontSize: "20px", 
                          fontWeight: 700, 
                          color: "#C1C1C1",
                          margin: 0,
                          padding: 0
                        }}
                      >
                        {project.title}
                      </h3>


                      {/* Technologies */}
                      <p
                        style={{ 
                          fontFamily: "Inter", 
                          fontSize: "12px", 
                          fontWeight: 400, 
                          color: "#A9A9A9",
                          margin: 0,
                          padding: 0,
                          paddingTop: "26px",
                          maxWidth: "215px"
                        }}
                      >
                        {project.technologies}
                      </p>
                    </div>

                    {/* Button */}
                    <div className="flex-shrink-0">
                      <img
                        src={buttonMain}
                        alt="View Project"
                        className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
