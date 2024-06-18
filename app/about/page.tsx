"use client";
import Image from "next/image";
import React from "react";
import { Bounce, Slide, AttentionSeeker } from "react-awesome-reveal";
const AboutSection: React.FC = () => {
  return (
    <section className="lg:container py-10 dark:text-white">
        {/* <div className="h-px w-full mb-12 bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div> */}
      <div className="container mt-28 mx-auto">
        <div className="heading_container text-center mb-12">
          
            <div>
              <h2 className="text-4xl font-semibold ">
                About <span className="text-primary">Us</span>
              </h2>
              <p className="mt-4 font-semibold text-nd text-black/70 dark:text-white/70">
                &apos;Champions: Where top talent meets limitless opportunities,
                empowering freelancers and businesses to thrive together. &apos;
              </p>
            </div>
         
        </div>

        <div className=" flex flex-wrap  items-center">
          <Slide direction="right">
            <div className="">
              <Image
                src="/images/about_us.png"
                alt=""
                width={600}
                height={400}
                className=""
              />
            </div>
          </Slide>

          <div className="lg:w-1/3 px-5 lg:ml-20">
            <Slide>
              <div>
                <h3 className="font-bold text-3xl">We Are <span className="text-primary">Champions</span></h3>
                <p className="mt-4 text-black/60 dark:text-white/70 ">
                  Champions is a dynamic freelance platform dedicated to
                  empowering businesses. With a focus on connecting top-tier
                  talent with exciting opportunities, we foster a vibrant
                  community built on collaboration, excellence, and mutual
                  success. Join us to unleash your potential and achieve your
                  goals if you are a business in search of exceptional talent.
                </p>
                <a
                  href="about.html"
                  className="inline-block mt-4 py-2 px-1 bg-blue-500 text-white rounded transition-all duration-300 hover:bg-blue-700 font-bold"
                >
                  Read More
                </a>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
