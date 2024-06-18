// import TeamSection from "@/components/Team/team";
import ServiceSection from "@/components/Services/serviceSection";
import TestimonialsSection from "@/components/Testimonials/testimonialsSection";
import AboutSection from "@/components/About/aboutSection";
import Contact from "@/components/contact/contactSection";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
export default function Home() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <AboutSection />
      <div className="h-px w-full mb-12 bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
      <WhyChooseUs />
      <div className="h-px w-full mb-12 bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>

      {/* <TeamSection /> */}
      <TestimonialsSection />
      <Contact />
    </>
  );
}
