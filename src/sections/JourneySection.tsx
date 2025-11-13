import educationIcon from "@/assets/icons/education.svg";
import experienceIcon from "@/assets/icons/experience.svg";

type TimelineItemProps = {
  title: string;
  organization?: string;
  period: string;
  description?: string;
};

const TimelineItem = ({ title, organization, period, description }: TimelineItemProps) => {
  return (
    <div className="relative mb-8 pl-[34px]">
      {/* Bullet and vertical line */}
      <div className="absolute left-[12px] -translate-x-1/2 top-0 w-[12px] h-[12px] bg-[#FFFFFF] rounded-full border border-[#1F2937]"></div>
      <div className="absolute -translate-x-1/2" style={{ left: '12px', top: '14px', bottom: 0, borderLeft: '1px solid #1F2937' }}></div>
      <div>
        <h4
          className="journey-item-title mb-1 break-words"
          style={{ fontFamily: "Inter", fontSize: "17px", fontWeight: 500, color: "#FFFFFF", wordBreak: "break-word", overflowWrap: "break-word" }}
        >
          {title}
        </h4>
        {organization && (
          <p
            className="journey-item-organization mb-1 break-words"
            style={{ fontFamily: "Inter", fontSize: "13.6px", fontWeight: 400, color: "#9CA3AF", wordBreak: "break-word", overflowWrap: "break-word" }}
          >
            {organization}
          </p>
        )}
        <p
          className="journey-item-period mb-2 break-words"
          style={{ fontFamily: "Inter", fontSize: "13.6px", fontWeight: 400, color: "#6B7280", wordBreak: "break-word", overflowWrap: "break-word" }}
        >
          {period}
        </p>
        {description && (
          <p
            className="journey-item-description leading-relaxed break-words"
            style={{ fontFamily: "Inter", fontSize: "13.6px", fontWeight: 400, color: "#9CA3AF", wordBreak: "break-word", overflowWrap: "break-word" }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

const JourneySection = () => {
  return (
    <section
      id="journey"
      className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16"
      style={{ marginBottom: "220px" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="space-y-12">
          {/* Title and Subtitle */}
          <div style={{ paddingBottom: "60px" }}>
            <h2
              className="section-title text-[45px] font-extrabold text-white"
              style={{ fontFamily: "Inter", margin: 0, padding: 0 }}
            >
              My Journey
            </h2>
            <p
              className="section-subtitle text-[14px] font-semibold text-[#FFB400]"
              style={{ 
                fontFamily: "Inter", 
                fontSize: "14px", 
                fontWeight: 600, 
                color: "#FFB400",
                margin: 0,
                padding: 0
              }}
            >
              Experience & Education
            </p>
          </div>

          {/* Two Columns Layout */}
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 journey-grid gap-[32px] mx-auto">
            {/* Education Column */}
            <div className="text-left max-w-[540px] w-full">
              <div className="flex items-center mb-8" style={{ gap: "12px" }}>
                <img src={educationIcon} alt="Education" className="w-6 h-6" />
                <h3
                  className="journey-section-title text-[25px] font-bold text-white"
                  style={{ fontFamily: "Inter" }}
                >
                  Education
                </h3>
              </div>

              {/* Education Timeline */}
              <div className="relative">
                <TimelineItem
                  title="Bachelor of Information Systems"
                  organization="CEFET/RJ - University"
                  period="2021 - 2025"
                />
                <TimelineItem
                  title="Technical Certificate in IT"
                  organization="Senac/RJ"
                  period="2019 - 2020"
                />
              </div>
            </div>

            {/* Experience Column */}
            <div className="text-left max-w-[540px] w-full">
              <div className="flex items-center mb-8" style={{ gap: "12px" }}>
                <img src={experienceIcon} alt="Experience" className="w-6 h-6" />
                <h3
                  className="journey-section-title text-[25px] font-bold text-white"
                  style={{ fontFamily: "Inter" }}
                >
                  Experience
                </h3>
              </div>

              {/* Experience Timeline */}
              <div className="relative">
                <TimelineItem
                  title="Mid-level Software Developer"
                  organization="Icatu Seguros — Rio de Janeiro, Brazil"
                  period="2025 - Present"
                  description="Leading front-end development with Angular and TypeScript, improving code quality and performance while collaborating on scalable solutions."
                />
                <TimelineItem
                  title="Junior Software Developer"
                  period="2023 - 2025"
                  description="Gained autonomy in software development, contributed to front-end projects, and enhanced product features with clean, maintainable code."
                />
                <TimelineItem
                  title="Front-end Developer Intern"
                  period="2022 - 2023"
                  description="First opportunity in development, where I improved my skills in Angular and front-end fundamentals while supporting team projects."
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
