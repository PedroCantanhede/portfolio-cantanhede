import quoteIcon from "@/assets/icons/quote.svg";

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="space-y-12">
          {/* Title and Subtitle */}
          <div style={{ paddingBottom: "60px" }}>
            <h2
              className="text-[45px] font-extrabold text-white"
              style={{ fontFamily: "Inter", margin: 0, padding: 0 }}
            >
              Testimonials
            </h2>
            <p
              className="text-[14px] font-semibold text-[#FFB400]"
              style={{ fontFamily: "Inter", margin: 0, padding: 0, paddingBottom: "27px" }}
            >
              What colleagues say about me
            </p>
          </div>

          {/* Three Testimonial Cards */}
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-[25px] mx-auto">
              {/* First Card - Real Testimonial */}
               <div 
                 className="bg-[#171717] border border-[#1F2937] p-6 flex flex-col"
                 style={{ width: "394.67px", height: "265px", borderRadius: "6px" }}
               >
                 {/* Quote Icon */}
                 <div className="mb-4" style={{ paddingLeft: "25px", paddingTop: "25px", marginBottom: "20px" }}>
                   <img src={quoteIcon} alt="Quote" className="w-8 h-8" style={{ display: "block" }} />
                 </div>
                
                 {/* Testimonial Text */}
                 <p
                   className="flex-1"
                   style={{ 
                     fontFamily: "Inter", 
                     fontSize: "13.6px", 
                     fontWeight: 400, 
                     color: "#D1D5DB",
                     lineHeight: "24px",
                     paddingLeft: "25px",
                     marginBottom: "24px",
                     textAlign: "justify"
                   }}
                 >
                  <span className="block">"Pedro is a dedicated and proactive professional</span>
                  <span className="block">with excellent communication skills. Always</span>
                  <span className="block">collaborative and willing to share knowledge, he</span>
                  <span className="block">was key to our team's success."</span>
                </p>
                
                 {/* Author Info */}
                 <div className="flex items-center" style={{ gap: "16px", paddingLeft: "25px", paddingBottom: "25px" }}>
                   <div className="flex items-center justify-center" style={{ width: "32px", height: "32px", backgroundColor: "#000000", borderRadius: "6px" }}>
                     <span 
                       className="text-white font-medium"
                       style={{ fontFamily: "Inter", fontSize: "11.9px" }}
                     >
                       MM
                     </span>
                   </div>
                  <div style={{ margin: 0, padding: 0, textAlign: "left" }}>
                    <p
                      className="text-white font-medium"
                      style={{ fontFamily: "Inter", fontSize: "13.6px", margin: 0, padding: 0, textAlign: "left" }}
                    >
                      Michael Diniz Moraes
                    </p>
                     <p
                       className="text-[#6B7280]"
                       style={{ fontFamily: "Inter", fontSize: "11.9px", fontWeight: 400, paddingTop: "4px", margin: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, textAlign: "left" }}
                     >
                      Fullstack Developer
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Card - Placeholder */}
               <div 
                 className="bg-[#171717] border border-[#1F2937] p-6 flex flex-col"
                 style={{ width: "394.67px", height: "265px", borderRadius: "6px" }}
               >
                 {/* Quote Icon */}
                 <div className="mb-4" style={{ paddingLeft: "25px", paddingTop: "25px", marginBottom: "20px" }}>
                   <img src={quoteIcon} alt="Quote" className="w-8 h-8" style={{ display: "block" }} />
                 </div>
                
                 {/* Testimonial Text */}
                 <p
                   className="flex-1"
                   style={{ 
                     fontFamily: "Inter", 
                     fontSize: "13.6px", 
                     fontWeight: 400, 
                     color: "#D1D5DB",
                     lineHeight: "24px",
                     paddingLeft: "25px",
                     marginBottom: "24px",
                     textAlign: "justify"
                   }}
                 >
                  <span className="block">"Pedro is a committed and understanding</span>
                  <span className="block">professional with great communication skills.</span>
                  <span className="block">Supportive and focused, he helps the team</span>
                  <span className="block">overcome challenges and reach success together."</span>
                </p>
                
                 {/* Author Info */}
                 <div className="flex items-center" style={{ gap: "16px", paddingLeft: "25px", paddingBottom: "25px" }}>
                   <div className="flex items-center justify-center" style={{ width: "32px", height: "32px", backgroundColor: "#000000", borderRadius: "6px" }}>
                     <span 
                       className="text-white font-medium"
                       style={{ fontFamily: "Inter", fontSize: "11.9px" }}
                     >
                       LS
                     </span>
                   </div>
                  <div style={{ margin: 0, padding: 0, textAlign: "left" }}>
                    <p
                      className="text-white font-medium"
                      style={{ fontFamily: "Inter", fontSize: "13.6px", margin: 0, padding: 0, textAlign: "left" }}
                    >
                      Luciane Santos
                    </p>
                     <p
                       className="text-[#6B7280]"
                       style={{ fontFamily: "Inter", fontSize: "11.9px", fontWeight: 400, paddingTop: "4px", margin: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, textAlign: "left" }}
                     >
                      Frontend Developer
                    </p>
                  </div>
                </div>
              </div>

              {/* Third Card - Placeholder */}
               <div 
                 className="bg-[#171717] border border-[#1F2937] p-6 flex flex-col"
                 style={{ width: "394.67px", height: "265px", borderRadius: "6px" }}
               >
                 {/* Quote Icon */}
                 <div className="mb-4" style={{ paddingLeft: "25px", paddingTop: "25px", marginBottom: "20px" }}>
                   <img src={quoteIcon} alt="Quote" className="w-8 h-8" style={{ display: "block" }} />
                 </div>
                
                 {/* Testimonial Text */}
                 <p
                   className="flex-1"
                   style={{ 
                     fontFamily: "Inter", 
                     fontSize: "13.6px", 
                     fontWeight: 400, 
                     color: "#D1D5DB",
                     lineHeight: "24px",
                     paddingLeft: "25px",
                     marginBottom: "24px",
                     textAlign: "justify"
                   }}
                 >
                  <span className="block">"Pedro is an exceptional and visionary professional</span>
                  <span className="block">who turned ideas into real solutions. Intelligent,</span>
                  <span className="block">respectful, and driven, he inspires those around</span>
                  <span className="block">him and consistently delivers excellence."</span>
                </p>
                
                 {/* Author Info */}
                 <div className="flex items-center" style={{ gap: "16px", paddingLeft: "25px", paddingBottom: "25px" }}>
                   <div className="flex items-center justify-center" style={{ width: "32px", height: "32px", backgroundColor: "#000000", borderRadius: "6px" }}>
                     <span 
                       className="text-white font-medium"
                       style={{ fontFamily: "Inter", fontSize: "11.9px" }}
                     >
                       CP
                     </span>
                   </div>
                  <div style={{ margin: 0, padding: 0, textAlign: "left" }}>
                    <p
                      className="text-white font-medium"
                      style={{ fontFamily: "Inter", fontSize: "13.6px", margin: 0, padding: 0, textAlign: "left" }}
                    >
                      Carlos Eduardo Pantoja
                    </p>
                     <p
                       className="text-[#6B7280]"
                       style={{ fontFamily: "Inter", fontSize: "11.9px", fontWeight: 400, paddingTop: "4px", margin: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, textAlign: "left" }}
                     >
                      Professor at CEFET-RJ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
