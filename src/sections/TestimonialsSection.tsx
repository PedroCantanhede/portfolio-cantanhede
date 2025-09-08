import quoteIcon from "@/assets/icons/quote.svg";

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16"
      style={{ paddingTop: "40px" }}
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
                  "XXXXXXXX."
                </p>
                
                 {/* Author Info */}
                 <div className="flex items-center" style={{ gap: "16px", paddingLeft: "25px", paddingBottom: "25px" }}>
                   <div className="flex items-center justify-center" style={{ width: "32px", height: "32px", backgroundColor: "#000000", borderRadius: "6px" }}>
                     <span 
                       className="text-white font-medium"
                       style={{ fontFamily: "Inter", fontSize: "11.9px" }}
                     >
                       XX
                     </span>
                   </div>
                  <div style={{ margin: 0, padding: 0, textAlign: "left" }}>
                    <p
                      className="text-white font-medium"
                      style={{ fontFamily: "Inter", fontSize: "13.6px", margin: 0, padding: 0, textAlign: "left" }}
                    >
                      XX
                    </p>
                     <p
                       className="text-[#6B7280]"
                       style={{ fontFamily: "Inter", fontSize: "11.9px", fontWeight: 400, paddingTop: "4px", margin: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, textAlign: "left" }}
                     >
                      XX
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
                  "XXXXXXXX."
                </p>
                
                 {/* Author Info */}
                 <div className="flex items-center" style={{ gap: "16px", paddingLeft: "25px", paddingBottom: "25px" }}>
                   <div className="flex items-center justify-center" style={{ width: "32px", height: "32px", backgroundColor: "#000000", borderRadius: "6px" }}>
                     <span 
                       className="text-white font-medium"
                       style={{ fontFamily: "Inter", fontSize: "11.9px" }}
                     >
                       XX
                     </span>
                   </div>
                  <div style={{ margin: 0, padding: 0, textAlign: "left" }}>
                    <p
                      className="text-white font-medium"
                      style={{ fontFamily: "Inter", fontSize: "13.6px", margin: 0, padding: 0, textAlign: "left" }}
                    >
                      XX
                    </p>
                     <p
                       className="text-[#6B7280]"
                       style={{ fontFamily: "Inter", fontSize: "11.9px", fontWeight: 400, paddingTop: "4px", margin: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, textAlign: "left" }}
                     >
                      XX
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
