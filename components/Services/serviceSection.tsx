"use client";
import React from "react";
import { services } from "./services";
import Image from "next/image";
import { JackInTheBox} from "react-awesome-reveal";
import "animate.css";
import Link from "next/link";

const ServiceSection: React.FC = () => {
  return (
    <section className="lg:container mt-[80px] mx-auto py-12 bg-white dark:bg-background ">
      <div className="container mx-auto">
        <div className="text-center mb-12 ">
          <h2 className="text-4xl font-bold ">
            Our <span className="text-blue-500">Services</span>
          </h2>
          <p className="mt-4 text-gray-600">
            We provide comprehensive and innovative solutions tailored to meet
            your unique business needs.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 border border-transparent ml-0"
            >
              <JackInTheBox duration={900} >
                <Link href={service.path}>
                  <div className="mx-auto   dark:bg-background bg-white bg-opacity-10 dark:border dark:border-white/80 shadow-custom-light dark:shadow-custom backdrop-blur-3.5  border-white border-opacity-20 p-6 rounded-xl text-center">
                    <div className="mb-6">
                      <Image
                        width={200}
                        height={100}
                        src={service.image}
                        alt={service.name}
                        className="mx-auto w-28 h-20"
                      />
                    </div>
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-gray-800 uppercase dark:text-white">
                        {service.name}
                      </h5>
                      <p className="mt-4 text-gray-600 dark:text-white/50">
                        {service.description}
                      </p>
                    </div>
                    <div>
                      <p className="text-blue-500 font-semibold hover:text-blue-400">
                        Read More
                      </p>
                    </div>
                  </div>
                </Link>
              </JackInTheBox>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
