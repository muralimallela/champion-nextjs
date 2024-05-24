"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Zoom } from "react-awesome-reveal";
import { teamMembers } from "./teamMember";
import Image from "next/image";

const TeamSection: React.FC = () => {
  return (
    <section className="text-center rounded-2xl bg-[#00204a] text-white border-white py-12">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold">
            Our <span className="text-blue-500"> Team</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-12">
              <Zoom >
                <div className="bg-gradient-to-b from-[#002759] to-[#002b64] p-6 rounded-xl shadow-lg">
                  <div className="flex justify-center mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="w-40 h-40 rounded-full border-4 border-white"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="text-center mb-6">
                    <h5 className="text-lg font-semibold text-blue-400">
                      {member.name}
                    </h5>
                    <p>{member.role}</p>
                  </div>
                  <div className="px-2 flex justify-around space-x-2 text-white text-2xl">
                    {member.socialLinks.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        className="w-full hover:text-blue-400"
                      >
                        <FontAwesomeIcon icon={social.icon} className="w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </Zoom>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
