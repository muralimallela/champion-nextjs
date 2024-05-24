
import TeamSection from "@/components/Team/team";
import ServiceSection from "@/components/Services/serviceSection";
import TestimonialsSection from "@/components/Testimonials/testimonialsSection";
import AboutSection from "@/components/About/aboutSection";
import Hero from "@/components/Hero";
import { Divider } from 'primereact/divider';
export default function Home() {
  return (
    <>
      {/* <Hero/> */}
      <ServiceSection />
      <AboutSection/>
      <TeamSection/>
      <TestimonialsSection/>
      <Divider />
      
    </>
  );
}
