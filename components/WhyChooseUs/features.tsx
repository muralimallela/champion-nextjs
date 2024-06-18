import { Feature } from "@/types/feature"
import Image from "next/image";

export const features: Feature[] = [
    {
      title: "Unparalleled Expertise",
      icon: (
        <Image width={100} height={100} src="/images/w1.png" alt="Unparalleled Expertise" className="w-16 h-16 mb-4" />
      ),
      icon_dark: (
        <Image width={100} height={100} src="/images/4trans.png" alt="Unparalleled Expertise" className="w-16 h-16 mb-4" />
      ),
      description: "Our team comprises seasoned professionals with decades of combined experience. We stay ahead of industry trends to ensure you get the most current and effective solutions.",
    },
    {
      title: "Exceptional Quality",
      icon: (
        <Image width={100} height={100} src="/images/fast.png" alt="Exceptional Quality" className="w-16 h-16 mb-4" />
      ),
      icon_dark: (
        <Image width={100} height={100} src="/images/3 trans.png" alt="Exceptional Quality" className="w-16 h-16 mb-4" />
      ),
      description: "We prioritize quality in everything we do. From the initial consultation to the final delivery, we ensure every detail meets our high standards.",
    },
    {
      title: "Customer-Centric Approach",
      icon: (
        <Image width={100} height={100} src="/images/customer-service.png" alt="Customer-Centric Approach" className="w-16 h-16 mb-4" />
      ),
      icon_dark: (
        <Image width={100} height={100} src="/images/1 trans.png" alt="Customer-Centric Approach" className="w-16 h-16 mb-4" />
      ),
      description: "Our clients are at the heart of everything we do. We listen, adapt, and tailor our services to meet your unique needs and objectives.",
    },
    {
      title: "Stick to your budget",
      icon: (
        <Image width={100} height={100} src="/images/budget.png" alt="Stick to your budget" className="w-16 h-16 mb-4" />
      ),
      icon_dark: (
        <Image width={100} height={100} src="/images/2trans.png" alt="Stick to your budget" className="w-16 h-16 mb-4" />
      ),
      description: "Specializes in connecting clients with top-tier freelancers who excel in delivering high-quality work within specified budget constraints, ensuring cost-effectiveness without compromising on excellence.",
    },
  ];